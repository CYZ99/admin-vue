import useUserStore from '@/stores/userStore'
const userStore = useUserStore()

const validatePass = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value !== userStore.code) {
    callback(new Error('验证码不正确'))
  } else callback()
}

export const loginRules = {
  accout: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      min: 3,
      max: 8,
      message: '帐号由3-8位的数字或者字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '必须是6位以上的数字或字母组成',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ]
}

