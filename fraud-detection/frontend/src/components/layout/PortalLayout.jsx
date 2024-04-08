import React from 'react';

const PortalLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#111827', color: 'white', padding: '1rem 2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Fraud Intelligence Portal</h1>
      </header>
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        {children}
      </main>
      <footer style={{ background: '#f3f4f6', padding: '1rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
        &copy; 2026 Enterprise ML Corp
      </footer>
    </div>
  );
};

export default PortalLayout;
