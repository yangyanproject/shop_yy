import {reqAddOrUpdateShopCart,reqShopCartList,reqChangeShopOne,reqCheckedAll,reqDeleteOne,reqDeleteAll}  from '@/api'
const state = {
    shopCartList:[]
}
const mutations = {
    RECEIVE_ShopCartList(state,shopCartList){
        state.shopCartList=shopCartList
    }
}
const actions = {
   async addOrUpdateShopCart({commit},{skuId,skuNum}){
       const  result=await reqAddOrUpdateShopCart(skuId,skuNum)
       if(result.code===200){
           return 'ok'
       }else{
        return Promise.reject(new Error('failed'))
       }
    },
    async getShopCartList({commit}){
         const result=await reqShopCartList()
         if(result.code===200){
             commit('RECEIVE_ShopCartList',result.data)
         }
    },
    async changeShopOne({commit},{skuId,isChecked}){
        const result =await reqChangeShopOne(skuId,isChecked)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async checkedAll({commit},{isChecked,skuIds}){
        const result=await reqCheckedAll(isChecked,skuIds)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async deleteShopOne({commit},skuId){
        const result=await reqDeleteOne(skuId)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
        },

     async deleteCheckedAll({commit},skuIds){
            const result=await reqDeleteAll(skuIds)
            if(result.code===200){
                return 'ok'
            }else{
                return Promise.reject(new Error('failed'))
            }
        }
    
}



const getters = {
    checkedShop(state){
      return state.shopCartList.reduce((prev,item)=>{
        prev += item.cartInfoList.reduce((prev1,item1)=>{
           if(item1.isChecked){
               prev1+=item1.skuNum
           }
           return prev1
        },0)
        
        return prev
       },0)
    },
    allPrice(state){
        return state.shopCartList.reduce((prev,item)=>{
           prev+= item.cartInfoList.reduce((prev1,item1)=>{
                if(item1.isChecked){
                    prev1+=item1.skuNum*item1.skuPrice
                }
                return prev1
            },0)
            return prev
        },0)
    }
}
export default {
  state,
  mutations,
  actions,
  getters
}