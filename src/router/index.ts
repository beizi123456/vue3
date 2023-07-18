import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: async () => await import('@/views/axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
