import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './scss/style.scss'
import * as bootstrap from 'bootstrap'
import {router} from './router/index'

const app = createApp(App);

app.use(router);

app.mount('#app')
