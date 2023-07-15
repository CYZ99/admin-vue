import { defineStore } from 'pinia'

const useHomeStore = defineStore('home-store', {
  state: () => {
    return {
      asideWidth: '250px'
    }
  },
  actions:{
    toggleAsideWidthAction() {
      this.asideWidth = this.asideWidth == '250px' ? '64px' : '250px'
    }
  }
})

export default useHomeStore
