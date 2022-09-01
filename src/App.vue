<script setup lang="ts">
import { RouterView } from 'vue-router'
import Provider from '/@/components/provider.vue'

console.log("valkyr app init")

</script>
  
<template>
  <NConfigProvider>
    <Provider>
      <RouterView />
    </Provider>
  </NConfigProvider>
</template>

<style scoped>
</style>
