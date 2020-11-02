import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Form,FormItem,Input} from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
