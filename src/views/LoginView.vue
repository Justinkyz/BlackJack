<template>
  <div class="login-container">
    <h2>Login</h2>
    <div>
      <input v-model="username" type="text" placeholder="Enter your username" />
      <input v-model="password" type="password" placeholder="Enter your password" />
      <button @click="login">Login</button>
    </div>
    <div v-if="loginError" class="error">
      <p>{{ loginError }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const loginError = ref('');
const router = useRouter();

const login = () => {
  if (username.value.trim() === '' || password.value.trim() === '') {
    loginError.value = 'Username and password are required';
    return;
  }

  axios.post('/api/login', { username: username.value, password: password.value })
    .then(response => {
      if (response.data === "Login successful") {
        localStorage.setItem('auth', 'true'); // Speichern des Auth-Status
        router.push('/home'); // Weiterleitung nach erfolgreicher Anmeldung
      } else {
        loginError.value = 'Invalid username or password';
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      loginError.value = 'Invalid username or password';
    });
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
}
</style>
