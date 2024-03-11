import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/fashion',
    name: 'fashion', 
    component: () => import('../views/AfricaFashion.vue')
  },
  {
    path: '/jewelry',
    name: 'jewelry', 
    component: () => import('../views/AfricaJewelry.vue')
  },
  {
    path: '/art',
    name: 'Art', 
    component: () => import('../views/AfricaArt.vue')
  },
  {
    path: '/decor',
    name: 'decor', 
    component: () => import('../views/AfricaDecor.vue')
  },
  {
    path: '/handcraft',
    name: 'craft', 
    component: () => import('../views/HandCraft.vue')
  },
  {
    path: '/fashion',
    name: 'fashion', 
    component: () => import('../views/AfricaFashion.vue')
  },
  {
    path: '/contact',
    name: 'Contact', 
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/terms',
    name: 'ts and cs', 
    component: () => import('../views/T&Cees.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
