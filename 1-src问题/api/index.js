import Ajax from './aiax'

export const reqCategoryList=()=>{
   return Ajax({
       url:'/product/getBaseCategoryList',
       method:'get'
   })
}
