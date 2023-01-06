import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lustres',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/p/:_id',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory(),
  routes
})

export default router
