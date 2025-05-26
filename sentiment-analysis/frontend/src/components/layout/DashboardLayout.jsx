import React from 'react';

const DashboardLayout = ({ children }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <header style={{ marginBottom: '30px' }}>
      <h1 style={{ color: '#333' }}>Customer Sentiment Analysis API Dashboard</h1>
      <p style={{ color: '#666' }}>Analyze text for sentiment using state-of-the-art NLP models.</p>
    </header>
    <main>
      {children}
    </main>
    <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center', color: '#999' }}>
      &copy; {new Date().getFullYear()} ML SaaS Portfolio
    </footer>
  </div>
);

export default DashboardLayout;
