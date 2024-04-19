import React, { useState } from 'react';
import PortalLayout from '../components/layout/PortalLayout';
import MetricCard from '../components/common/MetricCard';
import Table from '../components/common/Table';
import Alert from '../components/common/Alert';
import { useFraudApi } from '../hooks/useFraudApi';
import { formatCurrency, formatPercentage } from '../utils/formatters';

const PortalHome = () => {
  const { checkFraud, loading, error } = useFraudApi();
  const [history, setHistory] = useState([]);
  
  const handleSimulate = async () => {
    const randomAmount = Math.floor(Math.random() * 6000) + 10;
    const tx = {
      transaction_id: `tx_${Date.now()}`,
      user_id: `user_${Math.floor(Math.random() * 1000)}`,
      amount: randomAmount,
      merchant: "Test Merchant",
      timestamp: new Date().toISOString()
    };
    
    const result = await checkFraud(tx);
    if (result) {
      setHistory(prev => [{
        ID: tx.transaction_id,
        Amount: formatCurrency(tx.amount),
        Risk: result.risk_level,
        FraudProb: formatPercentage(result.fraud_probability),
        Status: result.is_fraud ? 'Blocked' : 'Approved'
      }, ...prev].slice(0, 5));
    }
  };

  return (
    <PortalLayout>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Dashboard</h2>
        <button 
          onClick={handleSimulate} 
          disabled={loading}
          style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Evaluating...' : 'Simulate Transaction'}
        </button>
      </div>

      {error && <Alert type="error" message={error} />}

      <div style={{ display: 'flex', margin: '0 -0.5rem 2rem -0.5rem' }}>
        <MetricCard title="Transactions Scanned" value={history.length} subtitle="This session" />
        <MetricCard title="Fraud Prevented" value={history.filter(h => h.Status === 'Blocked').length} subtitle="High risk blocked" />
        <MetricCard title="Active Model" value="Dummy v1.0" subtitle="Ensemble tree based" />
      </div>

      <h3>Recent Transactions</h3>
      <Table data={history} />
    </PortalLayout>
  );
};

export default PortalHome;
