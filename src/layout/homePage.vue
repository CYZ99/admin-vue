<script setup lang="ts">
import { reactive } from 'vue'
import CTagList from './components/CTagList.vue';
import useHomeStore from '@/stores/homeStore'
import CHeader from './components/CHeader.vue';
const theme = reactive({
  default: {
    bgHeader: 'bg-default-bgHeader',
    bgAside:'bg-default-bgAside'
  }
})

const homeStore = useHomeStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="homeStore.asideWidth" class="aside" :class="theme.default.bgAside">
        <div>
        </div>
      </el-aside>
      <el-container class="bg-gray-200">
        <!-- 头部 -->
        <el-header :class="theme.default.bgHeader">
          <c-header></c-header>
        </el-header>
        <!-- 标签 -->
        <c-tag-list></c-tag-list>
        <div class="overflow-y-hidden">
          <el-main class="bg-white m-3">
            <router-view></router-view>
          </el-main>
        </div>

      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.aside{
  height: 100vh;
  color: #fff;
  overflow-y: auto;
}
:deep(.el-header){
  height: 52px !important;
}
</style>
