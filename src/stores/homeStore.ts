import { defineStore } from 'pinia'
import { getMenuByUserIdApi } from '@/api/index'
import cache from '@/utils/cache'
import { USER_ID, MENU } from '@/global/constent'


export interface IHomeState {
  asideWidth: string
  isCollapse: boolean
  menu: any
}


const useHomeStore = defineStore('home-store', {
  state: (): IHomeState => {
    return {
      asideWidth: '250px',
      isCollapse: false,
      menu: cache.getCache(MENU) || []
    }
  },
  actions: {
    toggleAsideWidthAction() {
      this.asideWidth = this.asideWidth == '250px' ? '64px' : '250px'
      if (this.asideWidth === '250px') {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    },
    async getMenusByIdAction() {
      const id = cache.getCache(USER_ID)
      if (id) {
        const res = await getMenuByUserIdApi(id)
        this.menu = res.data
        if (!cache.getCache(MENU)) {
          cache.setCache(MENU, this.menu)
        }
        return res
      }
    },
  }
})

export default useHomeStore
