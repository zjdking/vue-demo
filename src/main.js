import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// 这个地方的顺序要注意
import router from './router'
Vue.use(VueRouter);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // es6的语法，类似lumbda表达式，传入一个h返回一个
  render: h => h(App)
})
