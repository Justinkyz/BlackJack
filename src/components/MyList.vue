<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  items: string[];
}>();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
}
</style>
