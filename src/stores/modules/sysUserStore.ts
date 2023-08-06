import { defineStore } from 'pinia'
import { getUserApi } from '@/api/sysuser'
interface ISysUserData {
  userTableList: any
  tableTotal: number
}

const useSysUserStore = defineStore('sys-user-store', {
  state: (): ISysUserData => {
    return {
      userTableList: [],
      tableTotal: 0
    }
  },
  actions: {
    async getUserTableList(page: number, pageSize: number) {
      const res = await getUserApi(page, pageSize)
      this.userTableList = res.data.values
      this.tableTotal = res.data.total
    }
  }
})

export default useSysUserStore