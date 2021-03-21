// 第一步：安装vue-router官方插件
// 插件是可以为vue提供很多的资源的（指令  组件 等等）

// 第二步：引入并声明使用vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter) 
//每个自定义插件，必须有一个install方法，这个就是偷摸在调用插件的install方法，称作声明使用插件





//组件当中所写的this.$router.push()  这个push方法是VueRouter原型身上的方法，所以路由器实例化对象可以使用
const originPush =  VueRouter.prototype.push    //把原来的push方法地址，保存起来，免得后面还要使用原来的方法
const originReplace = VueRouter.prototype.replace
//originPush()  //这样写是代表函数的调用，this默认指向window,而我们还要和之前一样，这个方法是由路由器对象去调的
//所以，我们应该让它调用的时候，this指向路由器对象
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








// 第三步：必须往外暴露一个路由器对象
const router = new VueRouter({
  // 配置路由器路由的地方
  routes,
  // 配置路由跳转后滚动的位置为顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router


// 第四步： 在实例化vm对象的时候，需要把这个暴露出去的路由器对象注册到vue身上，在main里面写的