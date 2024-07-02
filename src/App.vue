<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1 class="welcome-title">Welcome to JC Blackjack</h1>
        <nav class="nav">
          <RouterLink to="/" exact>Home</RouterLink>
          <RouterLink to="/leaderboard" exact>Leaderboard</RouterLink>
          <RouterLink to="/blackjack" exact>Blackjack</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

header {
  background-color: #2c3e50;
  color: white;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-title {
  font-size: 2rem;
  margin: 0;
}

.nav {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
  border-radius: 4px;
}

.nav a:hover {
  background-color: #34495e;
}

.nav a.router-link-exact-active {
  background-color: #007bff;
  color: white;
}

main {
  padding: 6rem 2rem 2rem; /* Adjusted padding to account for the fixed header */
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
</style>
