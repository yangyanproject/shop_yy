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
//请求获取search商品列表数据
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
//添加到购物车
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
}
// 请求购物车列表
// /api/cart/cartList
export const reqShopCartList=()=>{
 return Ajax({
   url:'/cart/cartList',
   method:'get'
 })
}

//修改单件商品状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqChangeShopOne=(skuId,isChecked)=>{
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}

//批量更改购物车选中状态
// /api/cart/batchCheckCart/{isChecked}
//post
// isChecked   1或者0                               params参数
// skuIds       要修改的购物车商品的id组成的数组      body参数

export const reqCheckedAll=(isChecked,skuIds)=>{
   return Ajax({
     url:`/cart/batchCheckCart/${isChecked}`,
     method:'post',
     data:skuIds
   })
}
//删除单个商品
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

export const reqPhoneCode=(phone)=>{
  return Ajax({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
  })
}
//注册用户
// /api/user/passport/register
export const reqUserRegister=(userInfo)=>{
  //函数体
  return Ajax({
    url:`/user/passport/register`,
    method:'post',
    data:userInfo
  })
}

//登录
// /api/user/passport/login
// post
export const reqUserLogin=(userInfo)=>{
  return Ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}

// 添加了token校验获取用户登录信息，用户登录只保存用户的token
// token校验
// http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqGetUserInfo=()=>{
  return Ajax({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
  })
}

// 退出登录
// /api/user/passport/logout
export const reqLogout=()=>{
  return Ajax({
    url:'/user/passport/logout',
    method:'get'
  })
}

//获取订单交易页信息
// /api/order/auth/trade
export const reqTradeInfo=()=>{
  return Ajax({
    url:'/order/auth/trade',
    method:'get'
})
}

// /api/user/userAddress/auth/findUserAddressList
// 获取用户地址信息
// get
export const reqUserAddressList=()=>{
   return Ajax({
     url:'/user/userAddress/auth/findUserAddressList',
     method:'get'
   })
}

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
export const reqSubmitOrder=(tradeNo,tradeInfo)=>{
  return Ajax({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data:tradeInfo
  })
}
//获取支付信息
// /api/payment/weixin/createNative/{orderId}
export const reqPayInfo=(orderId)=>{
   return Ajax({
     url:`/payment/weixin/createNative/${orderId}`,
     method:'get'
   })
}

//查询支付状态
// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus=(orderId)=>{
   return Ajax({
     url:`/payment/weixin/queryPayStatus/${orderId}`,
     method:'get'
   })
}