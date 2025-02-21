import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const getRecommendations = async (userId, limit = 4) => {
  const response = await axios.get(`${API_URL}/recommendations/${userId}`, {
    params: { limit }
  });
  return response.data;
};
