<script setup lang="ts">
import { reactive } from 'vue'
import type { Login } from '@/types/index'

const form = reactive<Login>({
  account: '',
  password: '',
  code: ''
})
const rules = reactive({
  account: [
    { require: true, message: '账号不能为空', trigger: 'blur' },
    {
      min: 3,
      max: 8,
      message: '帐号由3-8位的数字或者字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    { require: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '必须是6位以上的数字或字母组成',
      trigger: 'blur'
    }
  ]
})
</script>

<template>
  <div class="accout-panle" m4>
    <el-form :model="form" size="large" :rules="rules">
      <el-form-item prop="account" size="large">
        <el-input placeholder="请输入账号" v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item prop="password" password size="large">
        <el-input placeholder="请输入密码" show-password v-model="form.password"></el-input>
      </el-form-item>
      <div relative>
        <el-form-item prop="messageCode" password>
          <el-input placeholder="请输入验证码" show-password v-model="form.code"></el-input>
        </el-form-item>
        <span class="code text-primary">1123</span>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
:deep(.el-input__inner){
  height: 50px;
  font-size: large;
}

.code{
  position: absolute;
  top:18px;
  cursor: pointer;
  right: 10px;
}
</style>