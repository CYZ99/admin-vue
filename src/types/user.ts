export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: number
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: number
  /** 头像 */
  avatar: string
}

export type Login = {
  // 账号
  account?: string
  // 手机号码
  mobile?: number
  // 密码
  password?: string
  // 短信验证码
  messageCode?: string
  // 验证码
  code?: string
}