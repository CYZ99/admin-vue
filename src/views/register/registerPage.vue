<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User } from '@element-plus/icons-vue'
import { ElForm, ElMessage } from 'element-plus';
import type { IRegister }  from '@/types'
let active = ref(1)

const registerForm = reactive<IRegister>({
  regAccout: '',
  regPassword: '',
  rePassword: '',
  email: '',
  code: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const handleNext = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      if(active.value++ > 2) active.value = 0
    } else {
      ElMessage.error('请输入正确格式的账号和密码')
    }
  })

}

const handlePrev = () => {
  if (active.value-- <= 0) {
    active.value = 0
    ElMessage.success('已经是第一步了')
  }
}

const validatePass = (rule: any, value: string, callback: any) => {
  if (value == undefined) {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerForm.regPassword) {
    callback(new Error('两次密码输入不一致'))
  } else callback()
}
const registerRules = reactive({
  regAccout: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      min: 3,
      max: 8,
      message: '帐号由3-8位的数字或者字母组成',
      trigger: 'blur'
    }
  ],
  regPassword: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '必须是6位以上的数字或字母组成',
      trigger: 'blur'
    }
  ],
  rePassword: [
    { required: true, message: '二次密码不能为空', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ],
})

const emailRules = reactive({
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    {
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '邮箱格式不正确',
      trigger: 'blur'
    }
  ],
  code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
})


</script>

<template>
  <div class="rg-container flex flex-col justify-center flex-items-center out-container">
    <div class="w-4xl ma mt-20">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="账号注册" />
        <el-step title="邮箱验证" />
        <el-step title="注册成功" />
      </el-steps>
      <div class="wxl mt-10 ml-30">
        <template v-if="active == 0">
          <el-form :model="registerForm" size="large" label-width="120px" :rules="registerRules" ref="formRef">
            <el-form-item size="large" label="账号" prop="regAccout">
              <el-input placeholder="请输入账号" :suffix-icon="User" v-model="registerForm.regAccout"></el-input>
            </el-form-item>
            <el-form-item password size="large" label="密码" prop="regPassword">
              <el-input placeholder="请输入密码" show-password  v-model="registerForm.regPassword"></el-input>
            </el-form-item>
            <el-form-item password size="large" label="二次密码" prop="rePassword">
              <el-input placeholder="请再次输入密码" show-password  v-model="registerForm.rePassword"></el-input>
            </el-form-item>
          </el-form>
        </template>
        <template v-else-if="active == 1">
          <el-form :model="registerForm" size="large" label-width="120px" :rules="emailRules">
            <el-form-item size="large" label="邮箱" prop="email">
              <el-input placeholder="请输入邮箱" :suffix-icon="User" v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item class="code"  size="large" label="验证码" prop="code">
              <el-input placeholder="请输入验证码"  v-model="registerForm.code"></el-input>
              <a class="text-primary cursor-pointer ml-6">发送验证码</a>
            </el-form-item>
          </el-form>
        </template>
      </div>
      <div class="w-3xl flex ml-60 mt-10">
        <el-button @click="handlePrev" type="primary" class="mr-75">上一步</el-button>
        <el-button @click="handleNext" type="primary">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.out-container{
  background-image: radial-gradient(rgba(255,0,0,.3),rgba(255,0,0,0) 40vw),
  radial-gradient(rgba(64,158,255,.43),
  rgba(0,128,0,0) 40vw),
  radial-gradient(rgba(1, 1, 190, 0.3),
  rgba(0,0,255,0) 40vw),
  radial-gradient(rgba(132, 255, 0, 0.3),
  rgba(255,255,0,0) 40vw),
  radial-gradient(rgba(255,0,0,.3),
  rgba(255,0,0,0) 40vw);
  background-position: -40vw 14rem,80% 10rem,60vw 14rem,-10vw calc(14rem + 20vw),80vw calc(14rem + 40vw);
  background-size: 80vw 80vw;
  background-repeat: no-repeat;
  height: 100vh;
}
.code :deep(.el-input){
  width: 360px;
}
</style>