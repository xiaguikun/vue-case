import Vue from 'vue'
import App from './App.vue'

import VueBus from './utils/vue-bus'

Vue.config.productionTip = false

Vue.use(VueBus)

// Vue.prototype.$msg = 'hello world';

new Vue({
  render: h => h(App),
}).$mount('#app')
