import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: () => import(/* webpackChunkName: "about" */ '../components/TutorialsList.vue')
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: () => import(/* webpackChunkName: "about" */ '../components/Tutorial.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddTutorial.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
