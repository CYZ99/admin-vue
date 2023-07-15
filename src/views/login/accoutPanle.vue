<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { ILogin } from '@/types/index'
import type {  ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useUserStore from '@/stores/userStore'
import cache from '@/utils/cache'
import { REMEMBER_PASWWORD } from '@/global/constent'
import { loginRules } from '@/utils/rules'

const storageForm = cache.getCache(REMEMBER_PASWWORD)

const form = reactive<ILogin>({
  accout: storageForm?.accout || '',
  password: storageForm?.password || '',
  code: ''
})

const captcha = ref('')
const toLowCaptcha = ref('')



const rules = loginRules

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useUserStore()
const isRemPwd = ref(false)
const router = useRouter()
// 登录方法
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      loginStore.loginAccoutAction(form)
      if (isRemPwd.value) {
        cache.setCache(REMEMBER_PASWWORD, form)
      }
    } else {
      ElMessage.error('请输入正确格式的账号和密码,验证码小写字母即可')
    }
  })
}
const refreshCaptcha = async () => {
  const data = await loginStore.getCaptchaAction()
  captcha.value = data.img
  toLowCaptcha.value = data.text
}
onMounted(async () => {
  refreshCaptcha()
})

defineExpose({
  loginAction
})
</script>

<template>
  <div class="accout-panle" m8>
    <el-form :model="form" size="large" :rules="rules" ref="formRef">
      <el-form-item prop="accout" >
        <el-input placeholder="请输入账号" v-model="form.accout"></el-input>
      </el-form-item>
      <el-form-item prop="password" password size="large">
        <el-input placeholder="请输入密码" show-password v-model="form.password"></el-input>
      </el-form-item>
      <div flex flex-items-center>
        <el-form-item prop="code" class="verfrtiy-code" size="large">
          <el-input placeholder="请输入验证码"  v-model="form.code"></el-input>
        </el-form-item>
        <div class="ml-2 -mt-5" @click="refreshCaptcha" v-html="captcha"></div>
      </div>

      <div flex flex-justify-between flex-items-center>
        <div>
          <el-checkbox v-model="isRemPwd">记住密码</el-checkbox>
        </div>
        <div>
          <span style="margin-right:10px; color:burlywood; cursor: pointer;">找回密码</span>
          <span style="color:cadetblue; cursor: pointer;" @click="router.push('/register')">注册账号</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
:deep(.el-input__inner){
  height: 44px;
  font-size: large;
}

.verfrtiy-code :deep(.el-input){
  width: 255px;
}

</style>