<template>
  <div>
    <h2>Blackjack Spiel</h2>
    <button @click="startGame">Spiel starten</button>
    <div v-if="game">
      <h3>Spielstatus:</h3>
      <div>
        <h4>Spielerhand:</h4>
        <ul>
          <li v-for="(card, index) in game.playerHand" :key="index">{{ card.value }} of {{ card.suit }}</li>
        </ul>
        <h4>Dealerhand:</h4>
        <ul>
          <li v-for="(card, index) in game.dealerHand" :key="index">{{ card.value }} of {{ card.suit }}</li>
        </ul>
        <button @click="hit">Hit</button>
        <button @click="stand">Stand</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '@/api/api';
import type { GameState } from '@/types/GameState';

const game = ref<GameState | null>(null);

const startGame = async () => {
  try {
    const response = await api.startGame();
    game.value = response;
  } catch (error) {
    console.error('Fehler beim Starten des Spiels:', error);
  }
};

const hit = async () => {
  try {
    const response = await api.hit();
    game.value = response;
  } catch (error) {
    console.error('Fehler bei Hit:', error);
  }
};

const stand = async () => {
  try {
    const response = await api.stand();
    game.value = response;
  } catch (error) {
    console.error('Fehler bei Stand:', error);
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
button:hover {
  background-color: #ddd;
}
</style>
