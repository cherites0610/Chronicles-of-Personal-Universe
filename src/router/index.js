import { createWebHashHistory, createRouter } from "vue-router";
import home from "../views/home.vue";
import login from '../views/login.vue';
import register from '../views/register.vue';
import account from '../views/account.vue'

const routes = [
  { path: '/home', component: home, meta: { needLogin: true } },
  { path: '/account', component: account, meta: { needLogin: true } },
  { path: '/login', component: login },
  { path: '/register', component: register },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.meta.needLogin) {
    //頁面需要登入
    if (localStorage.getItem('token')) {
      //驗證使用者登入狀態
      // auth(localStorage.getItem('token')).then((result) => {
      //   if (result.data.status) {
      //     //狀態正常，放行並核發新token
      //     localStorage.setItem('token', result.data.token);
      //     next()
      //   } else {
      //     //狀態異常，重定向至登入並且刪除token
      //     localStorage.clear();
      //     showNotify({ type: 'danger', message: '登錄狀態異常，請重新登錄' });
      //     next('/login')
      //   }
      // })
      console.log('測試用!該界面需要登入')
      next();
    } else {
      //訪問者未登入
      showNotify({ type: 'danger', message: '該頁面需要登入' });
      next('/login')
    }
  } else {
    //頁面不需要登入
    next()
  }
})
