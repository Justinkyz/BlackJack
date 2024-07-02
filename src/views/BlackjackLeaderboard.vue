<template>
  <div class="container">
    <aside class="sidebar">
      <h1>Welcome to JC Blackjack</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/leaderboard">Leaderboard</router-link>
        <router-link to="/blackjack">Blackjack</router-link>
      </nav>
    </aside>
    <main class="main-content">
      <section class="leaderboard-section">
        <h2>Blackjack Leaderboard</h2>
        <button @click="fetchLeaderboard" class="btn">Aktualisieren</button>
        <table class="leaderboard-table">
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
      </section>
      <section class="comments-section">
        <h2>Comments</h2>
        <textarea v-model="commentText" rows="4" placeholder="Enter your comment" class="textarea"></textarea>
        <button @click="addComment" class="btn">Add Comment</button>
        <div v-if="comments.length">
          <h3>Comment List</h3>
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <p>{{ comment.text }}</p>
          </div>
        </div>
        <div v-else>
          <p>No comments yet.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const leaderboard = ref<{ name: string, score: number }[]>([]);
const comments = ref<{ id: number, text: string }[]>([]);
const commentText = ref('');

const fetchLeaderboard = async () => {
  try {
    const response = await axios.get('https://blackjack-tent.onrender.com/api/leaderboard');
    leaderboard.value = response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
  }
};

const fetchComments = async () => {
  try {
    const response = await axios.get('https://blackjack-tent.onrender.com/api/comments');
    comments.value = response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const addComment = async () => {
  if (commentText.value.trim() === '') {
    return;
  }
  try {
    await axios.post('https://blackjack-tent.onrender.com/api/comments', { text: commentText.value });
    commentText.value = '';
    fetchComments();
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

onMounted(() => {
  fetchLeaderboard();
  fetchComments();
});
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  background-color: #f4f4f4;
  padding: 1rem;
  width: 200px;
}

.sidebar h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sidebar nav a {
  display: block;
  padding: 0.5rem 0;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.sidebar nav a:hover {
  background-color: #ddd;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.leaderboard-section, .comments-section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.leaderboard-table th, .leaderboard-table td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.leaderboard-table thead {
  background-color: #f9f9f9;
}

.leaderboard-table tbody tr:hover {
  background-color: #f1f1f1;
}

.textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-item {
  padding: 0.5rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>
