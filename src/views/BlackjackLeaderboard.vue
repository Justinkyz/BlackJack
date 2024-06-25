<template>
  <div>
    <h2>Blackjack Leaderboard</h2>
    <button @click="fetchLeaderboard">Aktualisieren</button>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in leaderboard" :key="index">
        <td>{{ player.name }}</td>
        <td>{{ player.score }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '@/api/api';

const leaderboard = ref<{ name: string, score: number }[]>([]);

const fetchLeaderboard = async () => {
  console.log('Aktualisiere...');
  try {
    const response = await api.getRoot();
    console.log('Fetched leaderboard:', response.data);
    leaderboard.value = response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
  }
};

onMounted(() => {
  fetchLeaderboard();
});
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

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

thead {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}
</style>