import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Shop = () => import('@/views/Shop')
const LiveShow = () => import('@/views/LiveShow')
const Profile = () => import('@/views/Profile')
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/live',
    name: 'live',
    component: LiveShow
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
