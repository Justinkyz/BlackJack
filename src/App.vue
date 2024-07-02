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
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  text-align: center;
}

.welcome-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.nav {
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
  padding: 2rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
  }
}
</style>
