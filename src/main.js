import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './scss/style.scss'
import * as bootstrap from 'bootstrap'
import {router} from './router/index'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app')
