import { reqAddOrUpdateShopCart, reqShopCartList,reqChangeChecked,reqChangeCheckedAll,reqDeleteOne,reqDeleteAll} from '@/api'
const state = {
    shopCartList: []
}
const mutations = {
    RECEIVE_SHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}
const actions = {
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    async getShopCartList({ commit }) {
        const result = await reqShopCartList()
        if (result.code === 200) {
            commit('RECEIVE_SHOPCARTLIST', result.data)
        }
    },
    // 商品选择状态切换
    async ChangeChecked({commit},{skuId,isChecked}){
        const result=await reqChangeChecked(skuId,isChecked)
        if(result.code===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    // 、、批量选择商品状态
    async ChangeCheckedAll({commit},{isChecked,skuIds}){
       const result=await reqChangeCheckedAll(isChecked,skuIds)
       if(result.code===200){
           return 'ok'
       }else{
           return Promise.reject(new Error('failed'))
       }
    },
 //删除单个商品
 async DeleteOne({commit},skuId){
     const result=await reqDeleteOne(skuId)
     if(result.code===200){
         return 'ok'
     }else{
         return Promise.reject(new Error('failed'))
     }
 },
 //删除所有选中商品
 async deleteAll({commit},skuIds){
     const result =await reqDeleteAll(skuIds)
     if(result.code===200){
         return 'ok'
     }else{
        return Promise.reject(new Error('failed')) 
     }
 }


}
const getters = {
    checkedShop(state) {
        return state.shopCartList.reduce((prev, item) => {
            prev += item.cartInfoList.reduce((prev1, item1) => {
                if (item1.isChecked) {
                    prev1 += item1.skuNum
                }
                return prev1
            }, 0)
            return prev
        }, 0)
    },
    allMoney(state){
        return state.shopCartList.reduce((prev,item)=>{
           prev+=  item.cartInfoList.reduce((prev1,item1)=>{
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