import express from 'express';
import cors from 'cors';
import { pool, query } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Health & Database connectivity check
app.get('/api/health', async (req, res) => {
  try {
    const result = await query('SELECT NOW() as current_time, current_database() as db_name;');
    res.json({
      status: 'healthy',
      database: result.rows[0].db_name,
      db_time: result.rows[0].current_time,
      uptime: process.uptime()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to connect to database',
      error: err.message
    });
  }
});

// 2. Tests catalog API
app.get('/api/tests', async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM tests WHERE is_active = TRUE ORDER BY category, title;'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tests', details: err.message });
  }
});

app.get('/api/tests/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await query('SELECT * FROM tests WHERE id = $1;', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Test not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch test', details: err.message });
  }
});

// 3. Health Packages API
app.get('/api/packages', async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM health_packages WHERE is_active = TRUE ORDER BY price ASC;'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch packages', details: err.message });
  }
});

// 4. Bookings API
// Create a new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      appointmentId,
      patientName,
      patientPhone,
      selectedTest,
      bookingDate,
      bookingTime,
      collectionType,
      homeAddress,
      primaryWaUrl,
      secondaryWaUrl
    } = req.body;

    if (!patientName || !patientPhone || !selectedTest || !bookingDate) {
      return res.status(400).json({
        error: 'Missing required booking fields (name, phone, test, date)'
      });
    }

    const token = appointmentId || 'SDCL-' + Math.floor(100000 + Math.random() * 900000);

    const insertSql = `
      INSERT INTO bookings (
        appointment_id, patient_name, patient_phone, selected_test,
        booking_date, booking_time, collection_type, home_address,
        primary_wa_url, secondary_wa_url, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'pending')
      RETURNING *;
    `;

    const values = [
      token,
      patientName.trim(),
      patientPhone.trim(),
      selectedTest.trim(),
      bookingDate,
      bookingTime || '07:00 AM - 08:30 AM',
      collectionType || 'lab',
      homeAddress || null,
      primaryWaUrl || null,
      secondaryWaUrl || null
    ];

    const { rows } = await query(insertSql, values);
    res.status(201).json({
      success: true,
      message: 'Booking saved successfully',
      booking: rows[0]
    });
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).json({ error: 'Failed to save booking', details: err.message });
  }
});

// Fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    let querySql = 'SELECT * FROM bookings ';
    const params = [];

    if (status) {
      params.push(status);
      querySql += 'WHERE status = $1 ';
    }

    params.push(limit);
    querySql += `ORDER BY created_at DESC LIMIT $${params.length};`;

    const { rows } = await query(querySql, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings', details: err.message });
  }
});

// Fetch a single booking by token
app.get('/api/bookings/:appointmentId', async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { rows } = await query(
      'SELECT * FROM bookings WHERE appointment_id = $1;',
      [appointmentId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch booking', details: err.message });
  }
});

// 5. Inquiries / Contact Messages API
app.post('/api/inquiries', async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        error: 'Missing required inquiry fields (name, phone, message)'
      });
    }

    const insertSql = `
      INSERT INTO inquiries (name, phone, email, service, message, status)
      VALUES ($1, $2, $3, $4, $5, 'new')
      RETURNING *;
    `;

    const values = [
      name.trim(),
      phone.trim(),
      email ? email.trim() : null,
      service || 'General Inquiry',
      message.trim()
    ];

    const { rows } = await query(insertSql, values);
    res.status(201).json({
      success: true,
      message: 'Inquiry received and logged to database',
      inquiry: rows[0]
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    res.status(500).json({ error: 'Failed to save inquiry', details: err.message });
  }
});

app.get('/api/inquiries', async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 50;'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inquiries', details: err.message });
  }
});

// 6. Reviews API
app.get('/api/reviews', async (req, res) => {
  try {
    const { rows } = await query(
      'SELECT * FROM reviews WHERE is_approved = TRUE ORDER BY created_at DESC;'
    );

    // Format for frontend consumption
    const formattedReviews = rows.map((r) => ({
      id: r.review_code || `rev-${r.id}`,
      name: r.patient_name,
      location: r.location,
      rating: r.rating,
      test: {
        en: r.test_en || 'Health Diagnostic Checkup',
        ta: r.test_ta || r.test_en || 'மருத்துவப் பரிசோதனை'
      },
      category: r.category,
      date: {
        en: r.date_text_en || 'Recently',
        ta: r.date_text_ta || 'சமீபத்தில்'
      },
      avatarGradient: r.avatar_gradient || 'linear-gradient(135deg, #10b981, #059669)',
      initials: r.initials || r.patient_name.slice(0, 2).toUpperCase(),
      verified: r.verified,
      comment: {
        en: r.comment_en,
        ta: r.comment_ta || r.comment_en
      }
    }));

    res.json(formattedReviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews', details: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const {
      name,
      location,
      rating,
      testName,
      comment,
      category = 'service',
      avatarGradient
    } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({
        error: 'Missing required review fields (name, rating, comment)'
      });
    }

    const reviewCode = 'rev-user-' + Date.now();
    const initials = name
      .trim()
      .split(' ')
      .map((p) => p[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const insertSql = `
      INSERT INTO reviews (
        review_code, patient_name, location, rating,
        test_en, test_ta, category, date_text_en, date_text_ta,
        initials, avatar_gradient, verified, comment_en, comment_ta, is_approved
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, TRUE, $12, $13, TRUE)
      RETURNING *;
    `;

    const values = [
      reviewCode,
      name.trim(),
      location || 'Ponneri',
      Number(rating),
      testName || 'Diagnostic Test',
      testName || 'மருத்துவப் பரிசோதனை',
      category,
      'Just now',
      'சற்று முன்',
      initials,
      avatarGradient || 'linear-gradient(135deg, #10b981, #059669)',
      comment.trim(),
      comment.trim()
    ];

    const { rows } = await query(insertSql, values);
    res.status(201).json({
      success: true,
      message: 'Review saved successfully to database',
      review: rows[0]
    });
  } catch (err) {
    console.error('Error saving review:', err);
    res.status(500).json({ error: 'Failed to save review', details: err.message });
  }
});

// 7. Clinic Settings API
app.get('/api/settings', async (req, res) => {
  try {
    const { rows } = await query('SELECT * FROM lab_settings;');
    const settings = {};
    rows.forEach((r) => {
      settings[r.setting_key] = r.setting_value;
    });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings', details: err.message });
  }
});

// Update booking status
app.patch('/api/bookings/:appointmentId/status', async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;
    const { rows } = await query(
      'UPDATE bookings SET status = $1 WHERE appointment_id = $2 RETURNING *;',
      [status, appointmentId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ success: true, booking: rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status', details: err.message });
  }
});

// Overall stats
app.get('/api/stats', async (req, res) => {
  try {
    const [testsCount, pkgsCount, revsCount, bookingsCount, inquiriesCount] = await Promise.all([
      query('SELECT COUNT(*) FROM tests WHERE is_active = TRUE;'),
      query('SELECT COUNT(*) FROM health_packages WHERE is_active = TRUE;'),
      query('SELECT COUNT(*) FROM reviews WHERE is_approved = TRUE;'),
      query('SELECT COUNT(*) FROM bookings;'),
      query('SELECT COUNT(*) FROM inquiries;')
    ]);
    res.json({
      tests: Number(testsCount.rows[0].count),
      packages: Number(pkgsCount.rows[0].count),
      reviews: Number(revsCount.rows[0].count),
      bookings: Number(bookingsCount.rows[0].count),
      inquiries: Number(inquiriesCount.rows[0].count)
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Clinic Backend API running on http://localhost:${PORT}`);
});
