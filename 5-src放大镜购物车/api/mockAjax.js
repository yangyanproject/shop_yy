import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const Ajax =new axios.create({
    baseURL:'/mock',
    timeout:5000
})
//请求拦截器
Ajax.interceptors.request.use((config)=>{
     nprogress.start()
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