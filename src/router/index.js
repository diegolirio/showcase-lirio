import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../v1/views/HomeView.vue'
import ContactView from '../v1/boundedcontext/contact/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/p/:_id',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../v1/boundedcontext/product/ProductView.vue')
  },
  {
    path: '/contato',
    name: 'contact',
    component: ContactView
  },    
]

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes
})

export default router
