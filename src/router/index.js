import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.push =function(loaction,resolved,rejected){
    if(!rejected && !resolved) VueRouterPush.call(this,loaction).catch(()=>{})
    else VueRouterPush.call(this,loaction,resolved,rejected)
}

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
export default router