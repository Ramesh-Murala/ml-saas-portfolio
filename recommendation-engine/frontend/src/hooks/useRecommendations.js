import { useState, useEffect } from 'react';
import { getRecommendations } from '../services/api';

export const useRecommendations = (userId) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecs = async () => {
      try {
        const data = await getRecommendations(userId);
        setRecommendations(data.recommendations);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecs();
  }, [userId]);

  return { recommendations, loading, error };
};
