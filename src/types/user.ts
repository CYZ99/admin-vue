export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: number
  /* 邮箱 */
  email: string
  /** 用户名称 */
  accout: string
  /** 手机号 */
  mobile?: number
  /** 头像 */
  avatar?: string
  /** 邮箱验证码 */
  emailCode?: string
  /** 图形验证码 */
  code?: string
  roleId?: number,
  roleName?: string,
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
  //
  rePassword?: string
}

export interface UserInfo {
  /** 用户ID */
    /** 用户ID */
    id: number
    /* 邮箱 */
    email?: string
    /** 用户名称 */
    accout: string
    /** 手机号 */
    phoneNum?: number
    /** 头像 */
    avatar?: string
    createTime: string
    updateTime: string
    roleName: string
    roleId: number
    roleIntro: string
}