<template>
  <div>
    <h2>Blackjack Spiel</h2>
    <button @click="startGame">Spiel starten</button>
    <div v-if="game">
      <h3>Spielstatus:</h3>
      <div>
        <h4>Spielerhand:</h4>
        <ul>
          <li v-for="(card, index) in game.playerHand" :key="index">
            <img :src="getCardImage(card)" :alt="`${card.value} of ${card.suit}`" class="card-image" />
          </li>
        </ul>
        <h4>Dealerhand:</h4>
        <ul>
          <li v-for="(card, index) in game.dealerHand" :key="index">
            <img :src="getCardImage(card)" :alt="`${card.value} of ${card.suit}`" class="card-image" />
          </li>
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
import type { GameState, Card } from '@/types/GameState';

const game = ref<GameState | null>(null);

const startGame = async () => {
  try {
    console.log('Starting game...'); // Debugging: Start of startGame function
    const response = await api.startGame();
    game.value = response;
  } catch (error) {
    console.error('Fehler beim Starten des Spiels:', error);
  }
};

const hit = async () => {
  try {
    console.log('Player hits...'); // Debugging: Start of hit function
    const response = await api.hit();
    game.value = response;
  } catch (error) {
    console.error('Fehler bei Hit:', error);
  }
};

const stand = async () => {
  try {
    console.log('Player stands...'); // Debugging: Start of stand function
    const response = await api.stand();
    game.value = response;
  } catch (error) {
    console.error('Fehler bei Stand:', error);
  }
};

const getCardImage = (card: Card) => {
  const value = card.value.toString().toLowerCase();
  const suit = card.suit.toLowerCase();
  return require(`@/assets/cards/${value}_of_${suit}.png`);
};
</script>

<style scoped>
.card-image {
  width: 100px;
  height: auto;
}

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
