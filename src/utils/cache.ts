interface ICache {
  setCache(key: string, value: any): void,
  getCache(key: string): void,
  removeItemCache(key: string): void,
  clearCache():void
}

class Cache implements ICache {
  setCache(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key:string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  removeItemCache(key:string) {
    localStorage.removeItem(key)
  }
  clearCache() {
    localStorage.clear()
  }
}

export default new Cache()