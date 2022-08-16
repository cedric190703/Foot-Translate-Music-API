import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutFoot.vue'

const routes = [
  {
    path: '/',
    name: 'foot',
    component: HomeView
  },
  {
    path: '/translate',
    name: 'translate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutTranslate.vue')
  },
  {
    path: '/music',
    name: 'music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMusic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
