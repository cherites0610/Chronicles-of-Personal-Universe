import { createWebHashHistory, createRouter } from "vue-router";
import home from "../views/home.vue";
import login from '../views/login.vue';
import register from '../views/register.vue';
import account from '../views/account.vue';
import checkList from "../views/checkList.vue";
import diary from '../views/diary.vue';
import wordToUniverse from "../views/wordToUniverse.vue";
import group from '../views/group.vue';
import { message } from 'ant-design-vue';
import Cookies from 'js-cookie'

const routes = [
  { path: '/home', component: home, meta: { needLogin: true } },
  { path: '/account', component: account, meta: { needLogin: true } },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/login', component: login },
  { path: '/checkList', component: checkList, meta: { needLogin: true } },
  { path: '/diary', component: diary, meta: { needLogin: true } },
  { path: '/wordToUniverse', component: wordToUniverse, meta: { needLogin: true } },
  { path: '/group', component: group, meta: { needLogin: true } }

]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.meta.needLogin) {
    //頁面需要登入
    if (Cookies.get('token')) {
      console.log('測試用!該界面需要登入但你登入了')
      next();
    } else {
      //訪問者未登入
      message.error('該頁面需要登入!')
      next('/login')
    }
  } else {
    //頁面不需要登入
    console.log('測試用!該頁面不需要登入')
    next()
  }
})
