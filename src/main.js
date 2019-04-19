// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入资源请求插件
import VueResource from 'vue-resource'
// 状态管理
import store from './store/index'
// 引入utils文件(观察者模式),将utils绑定全局
import utils from './utils/index.js'

Vue.use(VueResource)
Vue.prototype.$utils = utils
Vue.config.productionTip = false

// Vue.http.interceptors.push((request, next) => {
//   if (window.localStorage.getItem('fyf_token')) {
//     Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('fyf_token')
//   }
//   next((response) => {
//     if (response.status === 401) {
//       window.localStorage.removeItem('fyf_token')
//       window.location.pathname = '/login'
//     }
//   })
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
