import { ElMessage,ElMessageBox } from "element-plus";
import useUserStore from '@/stores/modules/userStore'
const userStore = useUserStore()
// 退出登录
export function useLogout() {
  ElMessageBox.confirm('确认退出登录吗？', '退出登录', {
    confirmButtonText: 'OK',
    cancelButtonText: '取消',
    type: 'warning'
  })
  .then(() => {
    userStore.logoutAction()
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: '取消'
    })
  })
}