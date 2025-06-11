import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const analyzeSentiment = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { text });
    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw new Error('Failed to analyze sentiment');
  }
};
