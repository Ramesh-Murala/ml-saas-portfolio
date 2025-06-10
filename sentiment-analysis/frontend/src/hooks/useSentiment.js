import { useState } from 'react';
import { analyzeSentiment } from '../services/api';

export const useSentiment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const analyzeText = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeSentiment(text);
      setResult(data);
      return data;
    } catch (err) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { analyzeText, loading, error, result };
};
