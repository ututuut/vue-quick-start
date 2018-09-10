// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueWebsocket from 'vue-websocket'
import webSocketUrl from './store/config'
import {error} from './assets/plus/error/error'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueWebsocket, webSocketUrl)

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err)
  console.log(vm)
  console.log(info)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
