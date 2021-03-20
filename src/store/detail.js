import {reqDetailInfo} from '@/api'

const state = {
    goodsDetailInfo:{}
}
const mutations = {
    RECEIVE_GOODSDETAILINFO(state,goodsDetailInfo){
      state.goodsDetailInfo=goodsDetailInfo
    }
}
const actions = {
   async getGoodsDetailInfo({commit},skuId){
      const result= await reqDetailInfo(skuId)
    if(result.code===200){
        commit('RECEIVE_GOODSDETAILINFO',result.data)
    }
      
    }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}