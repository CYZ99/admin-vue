<script setup lang="ts">
import { reactive } from 'vue'
import CTagList from './components/CTagList.vue'
import useHomeStore from '@/stores/homeStore'
import CHeader from './components/CHeader.vue'
import CAside from './components/CAside.vue'

const theme = reactive({
  default: {
    bgHeader: 'bg-default-bgHeader',
    bgAside: 'bg-default-bgAside'
  }
})

const homeStore = useHomeStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="homeStore.asideWidth" :class="theme.default.bgAside">
        <c-aside></c-aside>
      </el-aside>
      <el-container class="bg-brand-bgcolor relative min-h-screen">
        <!-- 头部 -->
        <el-header :class="homeStore.asideWidth === '250px' ? 'header-width' : 'header-width-all'" class="fixed top-0 z-10 header-width bg-default-bgHeader">
          <c-header></c-header>
        </el-header>
        <!-- 标签 -->
        <c-tag-list></c-tag-list>
        <el-main class="bg-white m-4 mt-6  relative top-16">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <keep-alive :max="10">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header-width{
  width: calc(100vw - 250px);
}
.header-width-all{
  width: calc(100vw - 64px);
}

.fade-enter-from {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.el-aside {
  transition: all .5s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-active {
  transition-delay: 0.4s;
}

:deep(.el-header) {
  height: 52px !important;
  /* position: fixed; */
}

:deep(.el-main) {
  overflow-y: auto;
}

.aside::-webkit-scrollbar {
  width: 0;
}
</style>
