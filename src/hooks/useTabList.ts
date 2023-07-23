import { ref } from 'vue'
import cache from '@/utils/cache'
import { TAB_LIST } from '@/global/constent'
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router'

interface TabItem {
  title: string
  path: string
}
type ITab = TabItem[]

export function useTabList() {
  const router = useRouter()
  const route = useRoute()
  // 绑定 activeTab
  const activeTab = ref(route.path)
  // 定义初始化 tab 数据
  const tabList= ref<ITab>([
    {
      title: '后台首页',
      path: '/'
    }
  ])

  // 添加 tabList
  const addTabItem = (tab: TabItem) => {
    const noPan = tabList.value.findIndex(t => t.path === tab.path) === -1
    if (noPan) {
      tabList.value.push(tab)
    }
    // 数据更新到 storage 中
    cache.setCache(TAB_LIST, tabList.value)
  }

  // 初始化标签导航
  const initialTabList = () => {
    const tabs = cache.getCache(TAB_LIST)
    if (tabs) {
      tabList.value = tabs
    }
  }
  initialTabList()

  // 监听路由变化，将路由元信息添加到 tabList 中
  onBeforeRouteUpdate((to) => {
    // 显示激活状态
    activeTab.value = to.path
    // 添加标签路由
    addTabItem({
      path: to.path,
      title: to.meta.title as string,
    })
  })

  // 点击标签跳转
  const clickTabItem = (e: any) => {
    router.push(e)
  }
  // 删除 tabList
  const removeTabItem = (tab: any) => {
    const tabs = tabList.value
    let a = activeTab.value
    console.log(tab)
    console.log(a)
    if (a == tab) {
      tabs.forEach((tabItem, index) => {
        if (tabItem.path == tab) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          // 如果有上一个或者下一个 直接将这一个赋值给当前，值发生变化后就会自动跳转
          if (nextTab) {
            a = nextTab.path
          }
        }
      })
    }
    activeTab.value = a
    tabList.value = tabList.value.filter((item) => {
      return item.path != tab
    })

    cache.setCache(TAB_LIST, tabList.value)
  }
  return {
    tabList,
    addTabItem,
    clickTabItem,
    removeTabItem,
    activeTab
  }
}