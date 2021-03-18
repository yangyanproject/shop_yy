import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServe'
import SlideLoop from '@/components/SlideLoop'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component('SlideLoop',SlideLoop)

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
