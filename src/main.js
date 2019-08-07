import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import App from '@/App'
import Header from '@/components/header'

Vue.use(Header)

// Vue.use(ElementUI)

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
