import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  //
  if (to.path === '/Login')
    return next()

  if (to.path === '/')
    return next()

  let token = window.sessionStorage.getItem('token')
  console.log(token)
  if (!token) {
    next('/Login')
  }
  next()
})

export default router
