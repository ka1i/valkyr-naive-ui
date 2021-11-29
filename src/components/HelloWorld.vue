<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

fetch('/api/getUsers')
  .then((res) => res.json())
  .then((data) => { console.log(data); }
  );
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2 @click="$store.commit('add')">{{ $store.state.count }}</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <el-button @click="count++">count is: {{ count }}</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
