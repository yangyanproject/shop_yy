//这个文件是所有的接口请求函数
//每个函数，里面都是通过axios往对应的接口发请求的
//以后，你想要哪个数据，就调用对应的这个接口请求函数就ok
//一共是多少个接口，就对应有多少个接口请求函数
import  Ajax  from './ajax'
import mockAjax from '@/api/mockAjax'

// axios是第三方插件，是原生XHR和promise封装的发送ajax的工具
// axios现在是市面上使用最频繁最火爆的发送ajax请求工具
// axios本身是一个函数，那么也就是函数对象。所以有两种用法（函数用法和对象用法）
// axios()和axios.get
// 使用的时候需要特别注意的就是axios发请求的三种参数
//先说函数用法
// 请求参数：params,query,body
// params:路径的一部分，只能在路径里面写
// query：不属于路径的部分，但是有两种写法：
//  1、可以在路径后面？分割 key=value&key=value
//  2、可以在配置项 params里面配置query参数
// body:这个请求体参数，一般只出现在post和put里面，需要在配置项data当中去配置（都是对象）
// axios({
//   // url:'http://localhost:8080/userinfo/1?username=zhaoliying'
//   url:'http://localhost:8080/userinfo/1',
//   method:'post',
//   params:{
//     //代表query参数
//     username:'zhaoliying'
//   },
//   data:{
//     //代表是body参数
//   }
// })

//请求获取三级分类列表数据
///api/product/getBaseCategoryList
//get
export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    // url:'',
    method:'get'
  })
}
//第一种测试，需要把文件在main引入
// reqCategoryList()


//请求获取模拟的banner数据

export const reqBannerList = () => {
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}


//请求获取模拟的floor数据

export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}