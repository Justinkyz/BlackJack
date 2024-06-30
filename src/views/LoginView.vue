<template>
  <div>
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
input {
  width: 100%;
  margin-bottom: 10px;
}

button {
  margin-bottom: 20px;
}

.error {
  color: red;
}
</style>
