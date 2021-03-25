import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'



export default [
  {
    path:'/center',
    component:Center //本质就是在注册路由组件
  },
  {
    path:'/paysuccess',
    component:PaySuccess //本质就是在注册路由组件
  },
  {
    path:'/pay',
    component:Pay //本质就是在注册路由组件
  },
  {
    path:'/trade',
    component:Trade //本质就是在注册路由组件
  },
  {
    path:'/shopcart',
    component:ShopCart //本质就是在注册路由组件
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess //本质就是在注册路由组件
  },

  {
    path:'/detail/:goodsId?',
    component:Detail //本质就是在注册路由组件
  },
  {
    path:'/home',
    component:Home //本质就是在注册路由组件
  },
  {
    path:'/search/:keyword?', //?就代表params参数传不传都行
    component:Search, //本质就是在注册路由组件
    name:'search',
    // 如果比写props我们仍然可以传参，正常使用，只不过我们在search组件内部获取参数，写法复杂
    // props可以简化组件中获取参数
    // props由路由映射到组件内的属性
    // props:true,//可以把匹配到的params参数作为属性映射到组件
    // props:{username:'赵丽颖'},//对象写法几乎不用,映射组件当中额外需要的一些静态数据
    // props(route){
    //   return {keyword:route.params.keyword,keyword1:route.query.keyword1}
    // },
    //匹配路由成功后，当前路由对象就会多了这样一个params对象
    // params:{
    //   keyword:'aa'
    // }
    //匹配路由成功后，当前路由对象就会多了这样一个query对象
    // query:{
    //   keyword1:'AA'
    // }

  },
  {
    path:'/login',
    component: Login,//本质就是在注册路由组件
    meta:{
      //路由的元配置，我们可以在这个对象当中配置一些数据，在this.$route路由对象里面可以获取到
      isHide:true
    }
  },
  {
    path:'/register',
    component: Register,//本质就是在注册路由组件
    meta:{
      //路由的元配置，我们可以在这个对象当中配置一些数据，在this.$route路由对象里面可以获取到
      isHide:true
    }
  },
  // 重定向路由
  {
    path:'/',
    redirect:'/home'
  }
]