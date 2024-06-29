import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { GameState } from '@/types/GameState';

const apiClient = axios.create({
  baseURL: 'https://meilenstein1.onrender.com', // Adjust the URL to your backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

const handleResponse = async <T>(request: () => Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await request();
    console.log('API response:', response); // Debugging: API response
    return response.data;
  } catch (error) {
    console.error('API request error:', error); // Debugging: Error message
    throw error;
  }
};

export default {
  getRoot() {
    return handleResponse<any>(() => apiClient.get('/leaderboard'));
  },
  startGame() {
    return handleResponse<GameState>(() => apiClient.post('/api/game/start'));
  },
  getStatus() {
    return handleResponse<GameState>(() => apiClient.get('/api/game/status'));
  },
  hit() {
    return handleResponse<GameState>(() => apiClient.post('/api/game/hit'));
  },
  stand() {
    return handleResponse<GameState>(() => apiClient.post('/api/game/stand'));
  }
};
