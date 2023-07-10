<script setup lang="ts">
import { ref } from "vue"
import accoutPanle from "./accoutPanle.vue";
import messagePanle from "./messagePanle.vue";
let currentTab = ref(0)

</script>

<template>
  <div class="out-container">
    <h1 class="text-white">管理系统</h1>
    <div class="w-2xl h-md bg-white ring p-2xl flex flex-col flex-items-center br-2">
      <div class="text-center flex justify-center flex-items-center w-sm m-4 mt-8 bg-tsp br-100 p-2">
        <div @click="(e)=>currentTab = 0" class="c-tab" text-2xl  cursor-pointer  :class="currentTab === 0 ? 'active' : ''">账号登录</div>
        <div @click="(e)=>currentTab = 1" class="c-tab" text-2xl  cursor-pointer :class="currentTab === 1 ? 'active' : ''">短信登录</div>
      </div>
      <div class="form w-md">
        <component :is="currentTab ? messagePanle : accoutPanle "></component>
      </div>
      <div class="text-center">
        <el-button type="primary" class="w-sm">立即登录</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.out-container{
  background-image: linear-gradient(rgba(14, 165, 233), rgb(6, 60, 186));
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.c-tab{
  box-sizing: border-box;
  width: 12rem;
  padding: 2px;
  height: 60px;
  line-height: 60px;
  border-radius: 100px;
}
.el-button{
  height: 50px;
  font-size: large;
  border-radius: 10px;
}
</style>
