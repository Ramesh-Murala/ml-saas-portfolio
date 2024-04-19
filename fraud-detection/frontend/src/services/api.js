import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

export const evaluateTransaction = async (transaction) => {
  const response = await api.post('/fraud/evaluate', transaction);
  return response.data;
};

export default api;
