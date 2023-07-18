import { defineStore } from 'pinia'

const useHomeStore = defineStore('home-store', {
  state: () => {
    return {
      asideWidth: '250px',
      isCollapse: false
    }
  },
  actions:{
    toggleAsideWidthAction() {
      this.asideWidth = this.asideWidth == '250px' ? '64px' : '250px'
      if (this.asideWidth === '250px') {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  }
})

export default useHomeStore
