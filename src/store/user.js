
import {getUsertempId} from '@/utils/userabout'
import {reqPhoneCode,reqUserRegister,reqUserLogin,reqGetUserInfo} from '@/api'
//user模块的小store
const state = {
  userTempId:getUsertempId(),
  code:'',
  userInfo:{},
  token:''
  // localStorage.getItem('TOKEN_KEY')
}
const mutations = {
  RECEIVE_CODE(state,code){
    state.code=code
  },
  //获取登录信息
  RECEIVE_TOKEN(state,token){
    state.token=token
  },
  // 获取用户信息
  RECEIVE_USERINFO(state,userInfo){
       state.userInfo=userInfo
  },
  // 清空token
  RESET_TOKEN(state){
    state.token=''
  }
}
const actions = {
  async getPhondeCode({commit},phone){
    const result=await reqPhoneCode(phone)
    if(result.code===200){
      commit('RECEIVE_CODE',result.data)
      return result.data
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 注册
  async userRegister({commit},userInfo){
    const result=await reqUserRegister(userInfo)
    if(result.code===200){
        return 'ok'
    }else{
      return Promise.reject(new Error('注册失败'))
    }
  },

  //登录
  async userLogin({commit},userInfo){
     const result=await reqUserLogin(userInfo)
     if(result.code===200){
       commit('RECEIVE_TOKEN',result.data.token)
       return 'ok'
     }else{
       return Promise.reject(new Error('failed'))
     }
  },
  //根据token获取用户信息
  async getUserInfo({commit}){
    const result=await reqGetUserInfo()
    if(result.code===200){
      commit('RECEIVE_USERINFO',result.data)
      return result.data.name
    }else{
      return Promise.reject(new Error('获取用户信息失败'))
    }
  },

  async resetToken({commit}){
    commit('RESET_TOKEN')
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}