<script setup lang="ts">
import { useTabList } from '@/hooks/useTabList'

const { activeTab, tabList, removeTabItem, clickTabItem  } = useTabList()
</script>

<template>
  <div class="tagList">
    <el-tabs
      v-model="activeTab"
      type="card"
      class="demo-tabs"
      @tab-change="clickTabItem"
      @tab-remove="removeTabItem"
    >
      <template v-for="item in tabList" :key="item.name">
        <el-tab-pane :closable="item.path !== '/'" :label="item.title" :name="item.path"></el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<style scoped>
.tagList :deep(.el-tabs__item) {
  top: 0px;
  left: 12px;
  /* width: 90px; */
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
.tagList :deep(.el-tabs--card>.el-tabs__header .el-tabs__nav){
  border: none;
}

</style>