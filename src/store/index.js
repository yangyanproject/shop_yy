import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home'
import search from './search'
import user from './user'
import detail from './detail'
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
        home,
        user,
        search,
        detail
    }
})
export default store