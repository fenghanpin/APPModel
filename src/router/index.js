import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index')
const login = () => import('@/pages/login')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let token = window.localStorage.getItem('userToken')
//   if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })

export default router
