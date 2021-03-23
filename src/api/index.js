import Ajax from './Ajax'
import mockAjax from './mockAjax'
//三级菜单 get /api/product/getBaseCategoryList
export const CategoryList=()=>{
  return Ajax({
      url:'/product/getBaseCategoryList',
      method:'get'
  })
}

export const reqBannerList=()=>{
  return  mockAjax({
     url:'/banner',
     method:'get'
  })
}
export const reqFloorList=()=>{
  return  mockAjax({
     url:'/floor',
     method:'get'
  })
}

export const reqSearchInfo=(searchParams)=>{
  return Ajax({
    url:"/list",
    method:'post',
    data:searchParams
  })
}

export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url:`/item/${skuId}`,
    method:'get'
  })
}
//请求添加购物车
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
}
//获取购物车列表
// /api/cart/cartList
export const reqShopCartList=()=>{
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}

//切换商品选择状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqChangeChecked=(skuID,isChecked)=>{
   return Ajax({
     url:`/cart/checkCart/${skuID}/${isChecked}`,
     method:'get'
   })
}

//批量选择购物车状态
// /api/cart/batchCheckCart/{isChecked}、
export const reqChangeCheckedAll=(isChecked,skuIds)=>{
    return Ajax({
      url:`/cart/batchCheckCart/${isChecked}`,
      method:'post',
      data:skuIds
    })
}
//删除购物车商品
// /api/cart/deleteCart/{skuId}
export const reqDeleteOne=(skuId)=>{
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

//批量删除购物车
// /api/cart/batchDeleteCart
// delete
//skuIds      要删除的购物车商品的id组成的数组      body参数
export const reqDeleteAll=(skuIds)=>{
   return Ajax({
     url:'/cart/batchDeleteCart',
     method:'delete',
     data:skuIds
   })
}



// /api/user/passport/sendCode/{phone}

// 获取验证码
// get
export const reqGetCode=(phone)=>{
  return Ajax({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
  })
}

//注册用户
// /api/user/passport/register
export const reqRegister=(userInfo)=>{
  return Ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}

//登录
// /api/user/passport/login
// post
// userInfo
export const reqUserLogin=(userInfo)=>{
   return Ajax({
     url:'/user/passport/login',
     method:'post',
     data:userInfo
   })
}

// 添加了token校验获取用户登录信息，用户登录只保存用户的token
// token校验
// api/user/passport/auth/getUserInfo
export const reqUserInfo=()=>{
   return Ajax({
     url:'/user/passport/auth/getUserInfo',
     method:'get'
   })
}