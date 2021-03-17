import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(VueRouter)
const originPush =  VueRouter.prototype.push    //把原来的push方法地址，保存起来，免得后面还要使用原来的方法
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolved,rejected){
    //后面假设再去使用this.$router.push(),调的就是我们改过来的这个push
    if(resolved === undefined && rejected === undefined){
      //代表调用push没有传递成功和失败的回调
      return originPush.call(this,location).catch(() => {})
    }else{
      //代表传递了回调函数（成功和失败至少传递了一个）
      return originPush.call(this,location,resolved,rejected)
    }
  }
  
  VueRouter.prototype.replace = function(location,resolved,rejected){
    //后面假设再去使用this.$router.replace(),调的就是我们改过来的这个replace
    if(resolved === undefined && rejected === undefined){
      //代表调用replace没有传递成功和失败的回调
      return originReplace.call(this,location).catch(() => {})
    }else{
      //代表传递了回调函数（成功和失败至少传递了一个）
      return originReplace.call(this,location,resolved,rejected)
    }
  }
const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isDis:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isDis:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router