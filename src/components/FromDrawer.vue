<script setup lang="ts">
import { ref } from 'vue'

const isShower = ref(false)

interface Props{
  title: string
  size: number
  confirmText: string
}
const props = defineProps<Props>()


const open = () => isShower.value = true
const close = () => isShower.value = false


defineExpose({
  open,
  close
})
</script>

<template>
  <div class="from-drawer">
    <el-drawer
      class="relative"
      v-model="isShower"
      :title="props.title"
      :size="props.size"
    >
      <slot></slot>
    </el-drawer>
  </div>
</template>

<style scoped>
.footer{
  position: absolute;
  bottom: 30px;
}
</style>