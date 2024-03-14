export const useUserStore = defineStore('userStroe', () => {
    const uId = ref(0)
    const userName = ref('未登錄')
    const userEmail=ref('@com.tw')
    return { uId, userName,userEmail }
  })