//user模块的小store
import {getUsertempId} from '@/utils/userabout'
import {reqGetUserInfo, reqPhoneCode, reqUserLogin, reqUserLogout, reqUserRegister,reqLogout} from '@/api'
const state = {
  userTempId:getUsertempId(),
  code:'',
  token:localStorage.getItem('TOKEN_KEY'), //或去不到拿到null
  userInfo:{}
}
const mutations = {
  RECEIVE_CODE(state,code){
    state.code = code
  },
  RECEIVE_TOKEN(state,token){
    state.token = token
  },
  RECEIVE_USERINFO(state,userInfo){
    state.userInfo = userInfo
  },

  RESET_TOKEN(state){
    state.token = ''
  },
  RESET_UESRINFO(state){
    state.userInfo={},
    state.token=''
  }




}
const actions = {
  // 获取验证码
  async getPhondeCode({commit},phone){
    const result = await reqPhoneCode(phone)
    if(result.code === 200){
      commit('RECEIVE_CODE',result.data)
      return result.data
    }else{
      return Promise.reject('failed')
    }
  },
  // 注册
  async userRegister({commit},userInfo){
    const result = await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  //登录
  async userLogin({commit},userInfo){
    const result = await reqUserLogin(userInfo)
    if(result.code === 200){
      commit('RECEIVE_TOKEN',result.data.token)
      // 登录完成后，不但要把token保存在state（第一次），
      // 还要把token保存在localStorage
      localStorage.setItem('TOKEN_KEY',result.data.token)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  //根据token获取用户信息
  async getUserInfo({commit}){
    const result = await reqGetUserInfo()
    if(result.code === 200){
      console.log(result)
      commit('RECEIVE_USERINFO',result.data)
      return result.data.name
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

  //用户信息获取失败
  async resetToken({commit}){
    commit('RESET_TOKEN')
    localStorage.removeItem('TOKEN_KEY')
  },
 
  //退出登录
  async logout({commit}){
    const result=await reqLogout()
    if(result.code===200){
      commit('RESET_UESRINFO')
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
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