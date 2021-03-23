//user模块的小store
import {getUsertempId} from '@/utils/userabout'
import {reqGetCode,reqRegister,reqUserLogin,reqUserInfo} from '@/api'


const state = {
   userTempId:getUsertempId(),
   code:'',
   userInfo:{},
   token:''
}
const mutations = {
  RECEIVE_CODE(state,code){
    state.code=code
  },
  RECEIVE_TOKEN(state,token){
    state.token=token
  },
  RECEIVE_USERINFO(state,userInfo){
    state.userInfo=userInfo
  },
  RESET_TOKEN(state){
    state.token=''
  }
}
const actions = {
  // 获取验证码
  async getCode({commit},phone){
    const result=await reqGetCode(phone)
    if(result.code===200){
      commit('RECEIVE_CODE',result.data)
      return result.data
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  //注册
  async userRegister({commit},userInfo){
     const result=await reqRegister(userInfo)
     if(result.code===200){
       return 'ok'
     }else{
      return Promise.reject(new Error('failed'))
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
  // 获取用户登录数据
  async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.code===200){
      commit('RECEIVE_USERINFO',result.data)
       return result.data.name
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // token过期，删除token
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