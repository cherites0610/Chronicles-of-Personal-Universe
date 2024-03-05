export const useUserStore = defineStore('userStroe', () => {
    const uId = ref(0)
    const userName = ref('')
  
    return { uId, userName }
  })