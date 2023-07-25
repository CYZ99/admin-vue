<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import useHomeStore from '@/stores/homeStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const homeStore = useHomeStore()
const router = useRouter()

const { isCollapse } = storeToRefs(homeStore)
const defaultActive = ref<string>('/')

let menu:any = ref([])

watchEffect(() => {
  menu.value = homeStore.menu
})

const handleSelect = (e: any) => {
  router.push(e)
}
</script>

<template>
  <div class="aside" :style="{width: homeStore.asideWidth}">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      @select="handleSelect"
      :collapse-transition="false"
      :unique-opened="true"
    >
    <!-- 二级菜单 -->
      <template v-for="item in menu" :key="item.id">
        <el-sub-menu v-if="item.children" :index="item.url">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.url">{{ subItem.name }}</el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <el-menu-item v-else :index="item.url">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>

</template>

<style scoped>
.aside {
  position: fixed;
  transition: all .4s;
  height: 100vh;
  color: #fff;
  overflow-y: hidden;
}

.el-menu{
  border: none;
}

</style>