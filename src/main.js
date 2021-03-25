import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import '@/mock/mockServe'
import SlideLoop from '@/components/SlideLoop'
import 'swiper/css/swiper.css'
import Pagination from '@/components/Pagination'
import * as API from '@/api'

import { Button, Select,MessageBox,Message} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('Pagination',Pagination)


new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
