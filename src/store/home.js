//home模块的小store
import {reqCategoryList} from '@/api'
const actions={
    async getCategroyList({commit}){
     const result=await reqCategoryList()
     if(result.code===200){
         commit('RECEIVE_CATEGROYLIST',result.data)
     }
     }
 }
 
 const mutations={
     RECEIVE_CATEGROYLIST(state,categoryList){
         state.categoryList=categoryList
     }
 }
 const state={
     categoryList:[]
 }
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}