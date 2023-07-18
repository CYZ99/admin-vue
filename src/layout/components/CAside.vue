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
      <el-icon><setting /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/role">
      <el-icon><Avatar /></el-icon>
      <template #title>角色管理</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><User /></el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="/menu">
      <el-icon><Menu /></el-icon>
      <template #title>菜单管理</template>
    </el-menu-item>
    <el-sub-menu index="/menu">
      <template #title>
        <el-icon><location /></el-icon>
        <span>二级菜单</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.el-menu{
  border: none;
}

</style>