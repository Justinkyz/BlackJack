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
    <div>
      <h2>Comments</h2>
      <div>
        <textarea v-model="commentText" rows="4" cols="50" placeholder="Enter your comment"></textarea>
        <button @click="addComment">Add Comment</button>
      </div>
      <div v-if="comments.length">
        <h3>Comment List</h3>
        <div v-for="comment in comments" :key="comment.id">
          <p>{{ comment.text }}</p>
        </div>
      </div>
      <div v-else>
        <p>No comments yet.</p>
      </div>
    </div>
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
    const response = await axios.get('/api/leaderboard');
    leaderboard.value = response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
  }
};

const fetchComments = async () => {
  try {
    const response = await axios.get('/api/comments');
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
    await axios.post('/api/comments', { text: commentText.value });
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
  margin-bottom: 2rem;
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

textarea {
  width: 100%;
  margin-bottom: 10px;
}
</style>
