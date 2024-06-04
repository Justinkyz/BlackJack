import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://meilenstein1.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getRoot() {
    return apiClient.get('/leaderboard');
  }
};