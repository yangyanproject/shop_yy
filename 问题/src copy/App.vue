<template>
  <div>
    <Header></Header>

    <!-- 路由组件切换的位置 -->
    <router-view></router-view>


    <!-- Login和Register页面 是没有底部的，而Home和search页面是有底部
    Footer这个组件不是任何时候都要渲染出来 -->

    <!-- 这个写法不好，现在只有两个页面是隐藏footer,如果有很多组件都要隐藏
    那么这个写法就不太容易，模板当中看起来很乱 -->
    <!-- <Footer v-show="$route.path!=='/login' && $route.path!=='/register'"></Footer> -->

    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted(){
     this.$store.dispatch('getCategoryList') 
  }
}
</script>

<style lang="less" scoped>

</style>
