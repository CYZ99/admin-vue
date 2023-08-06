<script setup lang="ts">
import { ref } from 'vue'
import useSysUserStore from '@/stores/modules/sysUserStore'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format';
import { Delete, Edit } from '@element-plus/icons-vue'

const sysUserStore = useSysUserStore()
const { userTableList, tableTotal } = storeToRefs(sysUserStore)
const page = ref(1)
const pageSize = ref(10)

const fetchUserList = () => {
  sysUserStore.getUserTableList(page.value, pageSize.value)
}
const handleCurrentChange = () => {
  console.log(111)
}
const handleSizeChange = () => {
  console.log(222)
}
fetchUserList()
</script>

<template>
  <div class="content mt-4">
    <div class="header flex flex-items-center flex-justify-between">
      <h3 class="mr-3">用户列表</h3>
      <el-button type="primary">新增用户</el-button>
    </div>
    <div class="table-content">
      <!--  -->
      <el-table  :data="userTableList" border style="width: 100%">
        <el-table-column type="selection" align="center" width="60"></el-table-column>
        <el-table-column prop="id" label="用户ID" width="70"  align="center"></el-table-column>
        <el-table-column prop="accout" label="用户名" width="120" align="center"></el-table-column>
        <el-table-column prop="phoneNum" label="手机号" width="180" align="center"></el-table-column>
        <el-table-column prop="email" label="用户邮箱" width="180" align="center"></el-table-column>
        <el-table-column prop="createAt" label="创建时间" width="220" align="center">
          <template #default="score">
            {{ formatUTC(score.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="edit" label="操作"  align="center">
          <template #default>
            <el-button type="primary" :icon="Edit">编辑</el-button>
            <el-button type="danger" :icon="Delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageniation flex flex-justify-center mt-2 p-2">
      <el-pagination
          v-model:currentPage="page"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="sizes, prev, pager, next"
          :total="tableTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
      </el-pagination>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: #fff;
  padding: 10px 20px 0 20px;
  box-shadow: 1px 1px 10px 0px #8b8b8b36;
  border-radius: 5px;
}
</style>../../../stores/modules/sysUserStore