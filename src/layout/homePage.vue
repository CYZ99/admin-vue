<script setup lang="ts">
import { reactive} from 'vue'
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
        <el-header :class="theme.default.bgHeader">
          <c-header></c-header>
        </el-header>
        <el-main class="bg-white m-3">main</el-main>
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
