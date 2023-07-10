<script setup lang="ts">
import { reactive } from 'vue'
import type { Login } from '@/types/index'

const form = reactive<Login>({
  mobile: undefined,
  messageCode: ''
})

const rules = reactive({
  mobile: [
    { required: true, message: '必须要输入手机号', trigger: 'blur' },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  messageCode:[
      {
      required: true,
      message: '必须要输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
    ]
  }
)

</script>

<template>
  <div class="accout-panle" m8>
    <el-form :model="form" size="large" :rules="rules">
      <el-form-item prop="mobile" size="large">
        <el-input placeholder="请输入手机号码" v-model="form.mobile"></el-input>
      </el-form-item>
      <div relative>
        <el-form-item prop="messageCode" size="large">
          <el-input placeholder="请输入验证码" v-model="form.messageCode"></el-input>
        </el-form-item>
        <span class="code text-primary">获取短信验证码</span>
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