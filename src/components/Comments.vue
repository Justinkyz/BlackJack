<template>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Comment {
  id: number;
  text: string;
}

const comments = ref<Comment[]>([]);
const commentText = ref('');

const fetchComments = () => {
  axios.get('/api/comments')
    .then(response => {
      comments.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching comments:', error);
    });
};

const addComment = () => {
  if (commentText.value.trim() === '') {
    return;
  }
  axios.post('/api/comments', { text: commentText.value })
    .then(() => {
      fetchComments();
      commentText.value = '';
    })
    .catch(error => {
      console.error('Error adding comment:', error);
    });
};

onMounted(() => {
  fetchComments();
});
</script>

<style scoped>
textarea {
  width: 100%;
  margin-bottom: 10px;
}

button {
  margin-bottom: 20px;
}
</style>
