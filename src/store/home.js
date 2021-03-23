import {CategoryList,reqBannerList,reqFloorList} from '@/api'
const state = {
    CategoryListdata:[],
    bannerList:[],
    floorList:[]
}

const mutations = {
    RESOVE_CATEGROY(state,CategoryListdata){
        state.CategoryListdata = CategoryListdata
    },
    RECEIVE_BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    RECEIVE_FloorList(state,floorList){
        state.floorList=floorList
    }
}

const actions = {
    async getCategroyList({commit}){
        const result = await CategoryList()
        console.log(result)
        if (result.code === 200) {
            commit('RESOVE_CATEGROY',result.data)
        }
    },

    async getBannerList({commit}){
        const result=await reqBannerList()
        if(result.code===200){
            commit('RECEIVE_BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        const result=await reqFloorList()
        if(result.code===200){
            commit('RECEIVE_FloorList',result.data)
        }
    },

}
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}