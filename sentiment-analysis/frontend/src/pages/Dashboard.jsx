import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ChartContainer from '../components/common/ChartContainer';
import { useSentiment } from '../hooks/useSentiment';
import { useDashboardContext } from '../context/DashboardContext';

const Dashboard = () => {
  const [text, setText] = useState('');
  const { analyzeText, loading, error, result } = useSentiment();
  const { addHistory } = useDashboardContext();

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    const data = await analyzeText(text);
    if (data) {
      addHistory(data);
    }
  };

  return (
    <DashboardLayout>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <Card title="Input Text">
            <form onSubmit={handleAnalyze}>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="6"
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                placeholder="Enter customer review or feedback here..."
              />
              <Button type="submit" disabled={loading || !text.trim()}>
                {loading ? 'Analyzing...' : 'Analyze Sentiment'}
              </Button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </Card>
        </div>
        <div>
          <Card title="Analysis Result">
            <ChartContainer data={result} />
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
