//trade模块的小store
import {reqTradeInfo,reqUserAddress} from '@/api'

const state = {
  tradeInfo:{},
  userAddressList:[]
}
const mutations = {
    RECEIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo=tradeInfo
    },
    RECEIVE_ADDRESS(state,userAddressList){
        state.userAddressList=userAddressList
    }
}
const actions = {
 async getTradeInfo({commit}){
     const result=await reqTradeInfo()
     if(result.code===200){
         commit('RECEIVE_TRADEINFO',result.data)
     }
 },
 async getUserAddress({commit}){
     const result =await reqUserAddress()
     if(result.code===200){
         commit('RECEIVE_ADDRESS',result.data)
     }
 }
}
const getters = {
    detailArrayList(){
        return state.tradeInfo.detailArrayList ||{}
    }
}
export default {
  state,
  mutations,
  actions,
  getters
}