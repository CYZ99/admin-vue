<script setup lang="ts">
import { ref } from 'vue'
import { UserFilled  } from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'
const  { isFullscreen, toggle } = useFullscreen()
import useHomeStore from '@/stores/homeStore'
import useUserStore from '@/stores/userStore';
import { useLogout } from '@/hooks/useModefiyUserInfo'
import FromDrawer from '@/components/FromDrawer.vue';
const homeStore = useHomeStore()
const userStore = useUserStore()

const handleRefresh = () => location.reload()
const drawerRef = ref<InstanceType<typeof FromDrawer>>()
const handleInfo = () => {
  drawerRef.value?.open()
}
const handleSubmit = () => {
  drawerRef.value?.close()
  console.log(111)
}
</script>

<template>
  <div class="flex justify-between flex-items-center mt-4 ">
    <!-- 左侧 -->
    <div  @click="homeStore.toggleAsideWidthAction()">
      <el-icon>
        <Expand v-if="homeStore.asideWidth === '64px'"></Expand>
        <Fold v-else></Fold>
      </el-icon>
    </div>
    <!-- 右侧 -->
    <div>
      <span m2>
        <el-tooltip effect="dark" content="刷新" placement="bottom">
          <el-icon @click="handleRefresh">
            <Refresh />
          </el-icon>
        </el-tooltip>
      </span>
      <span m2>
        <el-tooltip effect="dark" content="主题设置" placement="bottom">
          <el-icon>
            <Setting />
          </el-icon>
        </el-tooltip>
      </span>
      <span m2 mr-4>
        <el-tooltip effect="dark" content="全屏" placement="bottom">
          <el-icon @click="toggle">
            <FullScreen v-if="!isFullscreen" />
            <Aim v-else></Aim>
          </el-icon>
        </el-tooltip>
      </span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar shape="circle" :size="25" class="mr-1" :icon="UserFilled" />
          {{ userStore.accout }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleInfo">用户信息</el-dropdown-item>
            <el-dropdown-item @click="useLogout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <from-drawer :size="550" title="用户信息" ref="drawerRef" confirm-text="提交" @submit="handleSubmit">

      </from-drawer>
    </div>
  </div>
</template>

<style scoped>
.el-dropdown-link {
  margin-top: -3px;
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>