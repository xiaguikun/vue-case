import Vue from 'vue'
import App from './App.vue'
// 引入定义好的路由路由
import router from './router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
