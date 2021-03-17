//search模块的小store
import {reqSearchInfo} from '@/api'
const state = {
    goodsListInfo:{}
}
const mutations = {
    RECEIVE_GOODSLISTINFO(state,goodsListInfo){
         state.goodsListInfo=goodsListInfo
    }
}
const actions = {
    async  getGoodsListInfo({commit},searchParams){
        const result=await reqSearchInfo(searchParams)
        if(result.code===200){
            commit('RECEIVE_GOODSLISTINFO',result.data)
        }
    }
}
const getters = {
    attrsList(state){
      return state.goodsListInfo.attrsList
    },
    goodsList(state){
        return state.goodsListInfo.goodsList
    },
    trademarkList(state){
        return state.goodsListInfo.trademarkList
    }
 
}
export default {
  state,
  mutations,
  actions,
  getters
}