import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
Vue.use(VueRouter)
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
const VueRouterPush = VueRouter.prototype.push
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.push =function(loaction,resolved,rejected){
    if(!rejected && !resolved) VueRouterPush.call(this,loaction).catch(()=>{})
    else VueRouterPush.call(this,loaction,resolved,rejected)
}
export default router