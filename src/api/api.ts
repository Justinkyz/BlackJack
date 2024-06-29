// src/api/api.ts
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { GameState } from '@/types';

const apiClient = axios.create({
  baseURL: 'https://meilenstein1.onrender.com', // Adjust the URL to your backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

const handleResponse = async <T>(request: () => Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export default {
  getRoot() {
    return handleResponse<any>(() => apiClient.get('/leaderboard'));
  },
  startGame() {
    return handleResponse<GameState>(() => apiClient.get('/api/blackjack/start'));
  },
  getStatus() {
    return handleResponse<GameState>(() => apiClient.get('/api/blackjack/status'));
  },
  hit() {
    return handleResponse<GameState>(() => apiClient.post('/api/blackjack/hit'));
  },
  stand() {
    return handleResponse<GameState>(() => apiClient.post('/api/blackjack/stand'));
  }
};
