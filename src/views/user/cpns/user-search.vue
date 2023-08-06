<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="user-search">
    <el-form label="100px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="用户ID" size="normal">
            <el-input placeholder="请输入用户ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="用户名" size="normal">
            <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="用户手机号" size="normal">
            <el-input placeholder="请输入用户手机号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="success" :icon="Search">查询</el-button>
          <el-button>重置</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped>
.user-search{
  background-color: #fff;
  padding: 20px 10px 0 20px;
  box-shadow: 1px 1px 10px 0px #8b8b8b36;
  border-radius: 5px;
}
.el-input{
  height: 38px;
}
.el-button{
  width: 80px;
}
</style>