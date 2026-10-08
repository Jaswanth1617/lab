import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function AdminPortalModal({ isOpen, onClose, onShowToast }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' | 'inquiries' | 'health'
  const [bookings, setBookings] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [stats, setStats] = useState(null);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const loadData = async () => {
    setLoading(true);
    try {
      const [bookingsRes, inquiriesRes, statsRes, healthRes] = await Promise.all([
        fetch('/api/bookings').then((r) => (r.ok ? r.json() : [])),
        fetch('/api/inquiries').then((r) => (r.ok ? r.json() : [])),
        fetch('/api/stats').then((r) => (r.ok ? r.json() : null)),
        fetch('/api/health').then((r) => (r.ok ? r.json() : null))
      ]);

      setBookings(Array.isArray(bookingsRes) ? bookingsRes : []);
      setInquiries(Array.isArray(inquiriesRes) ? inquiriesRes : []);
      setStats(statsRes);
      setHealth(healthRes);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUpdateStatus = async (appointmentId, newStatus) => {
    try {
      const res = await fetch(`/api/bookings/${appointmentId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) =>
            b.appointment_id === appointmentId ? { ...b, status: newStatus } : b
          )
        );
        onShowToast(`Booking ${appointmentId} updated to "${newStatus}"`);
      }
    } catch (err) {
      onShowToast('Failed to update booking status: ' + err.message);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (filterStatus === 'all') return true;
    return b.status === filterStatus;
  });

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'confirmed':
        return { background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' };
      case 'completed':
        return { background: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0' };
      case 'cancelled':
        return { background: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' };
      case 'sample_collected':
        return { background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' };
      default:
        return { background: '#fef9c3', color: '#854d0e', border: '1px solid #fef08a' };
    }
  };

  return (
    <div
      className="modal-backdrop active"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ zIndex: 9999 }}
    >
      <div
        className="modal-container"
        style={{
          maxWidth: '880px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div className="modal-header" style={{ borderBottom: '1px solid #e2e8f0', padding: '18px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #0d9488, #0f766e)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7V4h16v3M9 20h6M12 4v16" />
              </svg>
            </div>
            <div>
              <h3 className="modal-title" style={{ margin: 0, fontSize: '1.25rem' }}>
                Clinic Database Records & Staff Portal
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>
                PostgreSQL Database: <code style={{ color: '#0d9488', fontWeight: 600 }}>clinic</code> on localhost:5432
              </p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Portal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '12px 24px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'bookings' ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.85rem', padding: '6px 14px' }}
            onClick={() => setActiveTab('bookings')}
          >
            📋 Bookings ({bookings.length})
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'inquiries' ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.85rem', padding: '6px 14px' }}
            onClick={() => setActiveTab('inquiries')}
          >
            💬 Inquiries ({inquiries.length})
          </button>
          <button
            type="button"
            className={`btn btn-sm ${activeTab === 'health' ? 'btn-primary' : 'btn-outline'}`}
            style={{ fontSize: '0.85rem', padding: '6px 14px' }}
            onClick={() => setActiveTab('health')}
          >
            🟢 Database Status & Health
          </button>
          <button
            type="button"
            onClick={loadData}
            className="btn btn-sm"
            style={{
              marginLeft: 'auto',
              background: '#e2e8f0',
              color: '#334155',
              padding: '6px 12px',
              fontSize: '0.8rem'
            }}
            title="Refresh database records"
          >
            🔄 Refresh
          </button>
        </div>

        {/* Content Body */}
        <div className="modal-body" style={{ overflowY: 'auto', padding: '20px 24px', flex: 1 }}>
          {loading && (
            <div style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
              Loading database records...
            </div>
          )}

          {/* TAB 1: BOOKINGS */}
          {!loading && activeTab === 'bookings' && (
            <div>
              {/* Filter pills */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {['all', 'pending', 'confirmed', 'sample_collected', 'completed', 'cancelled'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilterStatus(st)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: filterStatus === st ? '#0d9488' : '#cbd5e1',
                      background: filterStatus === st ? '#ccfbf1' : '#ffffff',
                      color: filterStatus === st ? '#0f766e' : '#475569',
                      fontSize: '0.78rem',
                      fontWeight: filterStatus === st ? '600' : '400',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>

              {filteredBookings.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px dashed #cbd5e1'
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 500, color: '#475569' }}>
                    No bookings found in PostgreSQL matching this filter.
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
                    Book a diagnostic test on the site to see records stored in real-time!
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {filteredBookings.map((b) => (
                    <div
                      key={b.id || b.appointment_id}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '16px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '8px',
                          flexWrap: 'wrap',
                          gap: '8px'
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontFamily: 'monospace',
                              fontWeight: 700,
                              color: '#0d9488',
                              background: '#f0fdfa',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              marginRight: '8px',
                              fontSize: '0.85rem'
                            }}
                          >
                            {b.appointment_id}
                          </span>
                          <strong style={{ fontSize: '1rem', color: '#0f172a' }}>
                            {b.patient_name}
                          </strong>
                          <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '8px' }}>
                            📞 {b.patient_phone}
                          </span>
                        </div>

                        {/* Status dropdown */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span
                            style={{
                              ...getStatusBadgeStyle(b.status),
                              padding: '3px 8px',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              textTransform: 'uppercase'
                            }}
                          >
                            {b.status.replace('_', ' ')}
                          </span>
                          <select
                            value={b.status}
                            onChange={(e) => handleUpdateStatus(b.appointment_id, e.target.value)}
                            style={{
                              fontSize: '0.75rem',
                              padding: '3px 6px',
                              borderRadius: '6px',
                              border: '1px solid #cbd5e1',
                              background: '#fff'
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="sample_collected">Sample Collected</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '6px',
                          fontSize: '0.85rem',
                          color: '#334155',
                          marginTop: '8px',
                          background: '#f8fafc',
                          padding: '10px',
                          borderRadius: '6px'
                        }}
                      >
                        <div>
                          <strong>Test:</strong> {b.selected_test}
                        </div>
                        <div>
                          <strong>Date:</strong> {b.booking_date?.slice(0, 10)}
                        </div>
                        <div>
                          <strong>Time Slot:</strong> {b.booking_time}
                        </div>
                        <div>
                          <strong>Service:</strong>{' '}
                          {b.collection_type === 'home'
                            ? '🏠 Home Sample Collection'
                            : '🏥 Clinic Visit'}
                        </div>
                      </div>

                      {b.home_address && (
                        <div
                          style={{
                            marginTop: '8px',
                            fontSize: '0.82rem',
                            color: '#475569'
                          }}
                        >
                          <strong>Home Address:</strong> {b.home_address}
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: '6px',
                          fontSize: '0.72rem',
                          color: '#94a3b8',
                          textAlign: 'right'
                        }}
                      >
                        Stored in DB: {new Date(b.created_at).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: INQUIRIES */}
          {!loading && activeTab === 'inquiries' && (
            <div>
              {inquiries.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px dashed #cbd5e1'
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 500, color: '#475569' }}>
                    No inquiries received yet in PostgreSQL.
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
                    Submitting the contact form will store patient messages here.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '16px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '6px'
                        }}
                      >
                        <strong>{inq.name}</strong>
                        <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                          {new Date(inq.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '6px' }}>
                        📞 {inq.phone} {inq.email ? `| ✉️ ${inq.email}` : ''} | 🔬 {inq.service}
                      </div>
                      <div
                        style={{
                          background: '#f1f5f9',
                          padding: '10px',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          color: '#1e293b'
                        }}
                      >
                        "{inq.message}"
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SYSTEM & DB HEALTH */}
          {!loading && activeTab === 'health' && (
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '14px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    padding: '16px',
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '10px'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 600 }}>
                    PostgreSQL Status
                  </div>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#15803d',
                      marginTop: '4px'
                    }}
                  >
                    ● CONNECTED & ACTIVE
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#166534', marginTop: '4px' }}>
                    Database: <code style={{ fontWeight: 600 }}>clinic</code>
                  </div>
                </div>

                <div
                  style={{
                    padding: '16px',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '10px'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#1e40af', fontWeight: 600 }}>
                    Host & Port
                  </div>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#1d4ed8',
                      marginTop: '4px'
                    }}
                  >
                    localhost:5432
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#1e40af', marginTop: '4px' }}>
                    User: <code>postgres</code>
                  </div>
                </div>

                <div
                  style={{
                    padding: '16px',
                    background: '#faf5ff',
                    border: '1px solid #e9d5ff',
                    borderRadius: '10px'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#6b21a8', fontWeight: 600 }}>
                    Total Stored Entities
                  </div>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#7e22ce',
                      marginTop: '4px'
                    }}
                  >
                    {stats
                      ? stats.tests + stats.packages + stats.reviews + stats.bookings
                      : '—'}{' '}
                    Records
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6b21a8', marginTop: '4px' }}>
                    Across 5 core relational tables
                  </div>
                </div>
              </div>

              {/* Counts table */}
              {stats && (
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      padding: '12px 16px',
                      background: '#f8fafc',
                      fontWeight: 600,
                      borderBottom: '1px solid #e2e8f0'
                    }}
                  >
                    PostgreSQL Table Inventory
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                          🔬 Diagnostic Tests (<code>tests</code>)
                        </td>
                        <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>
                          {stats.tests} records
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                          📦 Health Checkup Packages (<code>health_packages</code>)
                        </td>
                        <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>
                          {stats.packages} records
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                          ⭐ Patient Reviews & Testimonials (<code>reviews</code>)
                        </td>
                        <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>
                          {stats.reviews} records
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                          📋 Appointments & Bookings (<code>bookings</code>)
                        </td>
                        <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>
                          {stats.bookings} records
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                          💬 Inquiries & Contact Submissions (<code>inquiries</code>)
                        </td>
                        <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 700 }}>
                          {stats.inquiries} records
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
