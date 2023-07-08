import { defineStore } from 'pinia'

import type { User } from '@/types/user'
export const useUserStore = defineStore('user-store', {
  state: ():User => {
    return {
      token: '',
      id: '',
      account: '',
      mobile: '',
      avatar: ''
    }
  }
})
