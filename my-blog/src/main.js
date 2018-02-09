// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from "vue-resource"
import VueRouter from "vue-router"
import App from './App'
import Routes from './routes'
import axios from 'axios'

// 全局配置axios
axios.defaults.baseURL = 'https://vuedemo-2c3a0.firebaseio.com'
// axios.defaults.headers.common["Authorization"] = "Token"
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)
// 自定义指令
// Vue.directive("rainbow",{
//   bind(el,binding,vnode){
//     el.style.color = "#"+ Math.random().toString(16).slice(2,8);
//   }
// })

// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
// Vue.filter("snippet",function(value){
//   return value.slice(0,100) + "...";
// })

const router = new VueRouter({
  routes:Routes,
  mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
