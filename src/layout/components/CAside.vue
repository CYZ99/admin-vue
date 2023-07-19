<script setup lang="ts">
import { ref } from 'vue'
import useHomeStore from '@/stores/homeStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const router = useRouter()

const { isCollapse } = storeToRefs(homeStore)
const defaultActive = ref('/')

const handlerSelect = (e: any) => {
  router.push(e)
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :collapse-transition="false"
    :unique-opened="true"
    @select="handlerSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="/">
      <el-icon><Monitor /></el-icon>
      <template #title>数据统计</template>
    </el-menu-item>
    <el-sub-menu index="/system">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/role">角色管理</el-menu-item>
      <el-menu-item index="/user">用户管理</el-menu-item>
      <el-menu-item index="/menu">菜单管理</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/gpt">
      <el-icon><DataAnalysis /></el-icon>
      <template #title>CharGpt</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu{
  border: none;
}

</style>