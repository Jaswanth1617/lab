import React from 'react';

export default function ToastContainer({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" id="toastContainer" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast show">
          <div className="toast-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
