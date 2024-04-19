import { useState } from 'react';
import { evaluateTransaction } from '../services/api';

export const useFraudApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkFraud = async (transaction) => {
    setLoading(true);
    setError(null);
    try {
      const result = await evaluateTransaction(transaction);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message || 'Error evaluating transaction');
      setLoading(false);
      return null;
    }
  };

  return { checkFraud, loading, error };
};
