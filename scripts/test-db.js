import { query, pool } from '../server/db.js';

async function testOperations() {
  try {
    console.log('Testing DB operations...');

    // 1. Check tests
    const testsRes = await query('SELECT count(*) FROM tests;');
    console.log('✓ Tests count in PostgreSQL:', testsRes.rows[0].count);

    // 2. Check health packages
    const pkgsRes = await query('SELECT count(*) FROM health_packages;');
    console.log('✓ Health packages count in PostgreSQL:', pkgsRes.rows[0].count);

    // 3. Check reviews
    const revsRes = await query('SELECT count(*) FROM reviews;');
    console.log('✓ Patient reviews count in PostgreSQL:', revsRes.rows[0].count);

    // 4. Test insert booking
    const bookingRes = await query(
      `INSERT INTO bookings (
        appointment_id, patient_name, patient_phone, selected_test,
        booking_date, booking_time, collection_type, home_address
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        'SDCL-TEST999',
        'Jaswanth (Test)',
        '9843696625',
        'Complete Health Checkup',
        '2026-10-10',
        '07:00 AM - 08:30 AM (Fasting Slot)',
        'home',
        'Ponneri Bazaar'
      ]
    );
    console.log('✓ Inserted test booking:', bookingRes.rows[0].appointment_id, 'Status:', bookingRes.rows[0].status);

    // 5. Test query booking
    const verifyBooking = await query(
      'SELECT * FROM bookings WHERE appointment_id = $1;',
      ['SDCL-TEST999']
    );
    console.log('✓ Verified retrieved booking for:', verifyBooking.rows[0].patient_name);

    // 6. Test update status
    const updateRes = await query(
      `UPDATE bookings SET status = 'confirmed' WHERE appointment_id = $1 RETURNING *;`,
      ['SDCL-TEST999']
    );
    console.log('✓ Updated booking status to:', updateRes.rows[0].status);

    // 7. Clean up test record
    await query('DELETE FROM bookings WHERE appointment_id = $1;', ['SDCL-TEST999']);
    console.log('✓ Cleaned up test booking.');

    console.log('\n🎉 ALL DATABASE CHECKS PASSED PERFECTLY!');
  } catch (err) {
    console.error('❌ Database test error:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testOperations();
