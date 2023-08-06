<script setup lang="ts">
import UserSearch from './cpns/user-search.vue'
import UserContent from './cpns/user-content.vue'
</script>

<template>
  <div class="user">
    <div class="user-container">
      <user-search></user-search>
      <user-content></user-content>
    </div>
  </div>
</template>

<style scoped>
.user-container{
  display: flex;
  flex-direction: column;
}
</style>