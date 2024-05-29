<template>
  <div>
    <h2>Blackjack Strategies</h2>
    <MyList :items="strategies" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MyList from '../components/MyList.vue';

const strategies = ref<string[]>([]);

const fetchStrategies = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/data'); // Passe den Port an, falls nötig
    const data = await response.json();
    console.log('Fetched data:', data);
    strategies.value = data.strategies;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchStrategies();
});
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
