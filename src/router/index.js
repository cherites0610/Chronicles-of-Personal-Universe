import { createWebHashHistory,createRouter } from "vue-router";
import home from "../views/home.vue";
import login from '../views/login.vue';
import register from '../views/register.vue';

const routes = [
    { path: '/home', component: home },
    { path: '/login', component: login },
    { path: '/register', component: register},
  ]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  