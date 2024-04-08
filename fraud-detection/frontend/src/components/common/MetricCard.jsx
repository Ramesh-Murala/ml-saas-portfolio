import React from 'react';

const MetricCard = ({ title, value, subtitle }) => {
  return (
    <div style={{ padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', flex: 1, margin: '0.5rem' }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#6b7280', fontSize: '0.875rem', textTransform: 'uppercase' }}>{title}</h3>
      <p style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
      {subtitle && <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>{subtitle}</p>}
    </div>
  );
};

export default MetricCard;
