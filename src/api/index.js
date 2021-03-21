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

export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
}
