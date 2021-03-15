//home模块的小store
import {reqCategoryList} from '@/api'

const state={
    categoryList:[]
}


 const mutations={
     RECEIVE_CATEGROYLIST(state,categoryList){
         state.categoryList=categoryList
     }
 }

 const actions={
    async getCategroyList({commit}){
     const result=await reqCategoryList()
     if(result.code===200){
         commit('RECEIVE_CATEGROYLIST',result.data)
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