<script setup lang="ts">
</script>

<template>
  <div class="home">
    <el-card class="box-card">
      <template #header>
        <slot name="header"></slot>
      </template>
      <slot name="body"></slot>
  </el-card>
  </div>
</template>

<style scoped>
</style>