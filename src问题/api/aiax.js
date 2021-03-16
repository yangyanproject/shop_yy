import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建axios实例
const service=axios.create({
    baseURL:'/api',
    timeout:20000
})

service.interceptors.request.use(
     (config)=> {
         Nprogress.start()
       return config;
          },
          ()=>{}
  );


service.interceptors.response.use(
     (response)=>{
      //函数体
      Nprogress.done()
      return response.data
    },
    (error)=> {
        Nprogress.done();
        alert('发送ajax请求失败'+error.message||'未知错误')
        return Promise.reject(error);
    }
);
export default service