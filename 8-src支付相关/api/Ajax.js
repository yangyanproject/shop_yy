import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const Ajax =new axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器
Ajax.interceptors.request.use((config)=>{
     nprogress.start()
    let userTempId=store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId=userTempId
    }
    let token=store.state.user.token
    if(token){
        config.headers.token=token
    }
     return config
})
//响应拦截器
Ajax.interceptors.response.use((response)=>{
    nprogress.done()
    return response.data
},(error)=>{
    nprogress.done()
    alert('请求失败',error.message)
    return new Promise(()=>{})//中断promise链
})
export default Ajax