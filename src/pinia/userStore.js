export const useUserStore = defineStore('userStroe', () => {
    const uId = ref(0)
    const userName = ref('未登錄')
    const userEmail=ref('未讀取')
    return { uId, userName,userEmail }
  })