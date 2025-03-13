import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import { createPinia } from 'pinia'
import {routes} from './router.js'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(router)

app.use(createPinia())

app.mount('#app')
