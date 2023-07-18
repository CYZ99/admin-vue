<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const removeTab = () => {
  console.log(11)
}
</script>

<template>
  <div class="tagList">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane label="User" name="first"></el-tab-pane>
      <el-tab-pane label="User" name="first"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.tagList :deep(.el-tabs__item) {
  top: 0px;
  left: 10px;
  width: 90px;
  height: 32px;
  margin-right: 8px;
  /* border: 1px solid #999; */
  border-radius: 6px;
  background-color: #fff;
}

.tagList :deep(.el-tabs--card>.el-tabs__header){
  border:none;
}
.tagList :deep(.el-tabs){
  margin-top: 8px;
  height: 32px;
}
.tagList :deep(.el-tabs--card>.el-tabs__header .el-tab__nav){
  border: none;
}
</style>