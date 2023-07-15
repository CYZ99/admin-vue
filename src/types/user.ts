export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: number
  /* 邮箱 */
  email?: string
  /** 用户名称 */
  accout: string
  /** 手机号 */
  mobile?: number
  /** 头像 */
  avatar?: string
  /** 验证码 */
  code?: string
}

export interface ILogin {
  // 账号
  accout?: string
  // 手机号码
  mobile?: number
  // 邮箱
  email?: string
  // 密码
  password?: string
  // 短信验证码
  messageCode?: string
  // 验证码
  code?: string
}

export interface IRegister {
  regAccout?: string
  // 手机号码
  mobile?: number
  // 邮箱
  email?: string
  // 密码
  regPassword?: string
  // 验证码
  code?: string
  // 邮箱
  rePassword?: string
}