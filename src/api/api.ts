import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://meilenstein1.onrender.com', // Passe die URL an deine Backend-URL an
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getRoot() {
    return apiClient.get('/leaderboard');
  },
  startGame() {
    return apiClient.get('/api/blackjack/start');
  },
  getStatus() {
    return apiClient.get('/api/blackjack/status');
  },
  hit() {
    return apiClient.post('/api/blackjack/hit');
  },
  stand() {
    return apiClient.post('/api/blackjack/stand');
  }
};
