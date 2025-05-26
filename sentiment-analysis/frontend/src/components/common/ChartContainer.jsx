import React from 'react';

const ChartContainer = ({ title, data }) => (
  <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', borderRadius: '4px', border: '1px solid #ddd' }}>
    <p style={{ color: '#666' }}>
      {data ? `Sentiment: ${data.sentiment} (${(data.confidence * 100).toFixed(1)}%)` : 'No data to display'}
    </p>
  </div>
);

export default ChartContainer;
