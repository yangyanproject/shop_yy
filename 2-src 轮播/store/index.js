import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home'
Vue.use(Vuex)
const state = {}
const actions = {}
const mutations = {}
const getters = {}
const store =new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        home
    }
})
export default store