import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

const origiPush=VueRouter.prototype.push
const originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve===undefined&&reject===undefined){
    return origiPush.call(this,lpcation).catch(()=>{})
    }else{
     return origiPush.call(this,location,resolve,reject)
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
Vue.use(VueRouter)

const router= new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHide:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHide:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:"search"
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
export default router