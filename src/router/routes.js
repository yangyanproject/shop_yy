import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
    {
        path:'/detail/:goodsId?',
        component:Detail
    },
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