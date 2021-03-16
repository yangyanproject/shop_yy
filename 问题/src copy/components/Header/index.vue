<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <router-link to="/login">登录</router-link>
            <!-- <a href="###" class="register">免费注册</a> -->
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <!-- 声明式导航和编程式导航（router.push/replace） 
          最大的区别 就是声明式导航跳转的时候没办法去做额外的逻辑
          编程式导航，我们是在跳转之前可以自己添加额外的逻辑

          声明式导航一般是组件标签比较少的时候使用，多的话，效率就不高了
          编程式导航，比声明式导航效率高，组件对象比较多，不适合使用router-link，就可以换成编程式导航
          -->
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a> -->
        <router-link to="/home" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toSearch() {
      // console.log('我爱你赵丽颖')
      // push括号里面写的和声明式导航写的是一样的
      // 路由跳转可以携带的两种参数  params和query参数
      // params参数是属于路径的一部分，直接写在路径当中，匹配路由的时候是要匹配这个params参数
      // query参数不属于路径的一部分，拼接在路径的后面
      //          以？分割后面的key=value&key=value,匹配路由的时候不匹配query参数

      //路径传参的三种写法：
      // 1、字符串拼接 :to="'/search/'+this.keyword + '?keyword1=' + this.keyword.toUpperCase()"
      // this.$router.push('/search/'+this.keyword + '?keyword1=' + this.keyword.toUpperCase())
      // 2、模板字符串
      // this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`)
      // 3、对象写法
      // this.$router.push({name:'search',params:{keyword:this.keyword},query:{keyword1:this.keyword.toUpperCase()}})

      // 5)面试问题3: 指定params参数时可不可以用path和params配置的组合?（对象写法）
      //   不可以用path和params配置的组合,
      //   只能用name和params配置的组合
      //   query配置可以与path或name进行组合使用
      // 总而言之，以后不要用path 用name就万事大吉
      // this.$router.push({name:'search',params:{keyword:this.keyword},query:{keyword1:this.keyword.toUpperCase()}})

      // 4)面试问题2: 如何指定params参数可传可不传?
      //   path: '/search/:keyword?'

      // 6)面试问题4: 如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
      //   前提是路由params参数要可传可不传
      //   解决1: 不指定params
      //   解决2: 指定params参数值为undefined
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},//如果传递的是空串，就换成undefined
      //   query: { keyword1: this.keyword.toUpperCase() },
      // });

      // 7)面试问题5: 路由组件能不能传递props数据?
      //       可以: 可以将query或且params参数映射/转换成props传递给路由组件对象
      //   实现: props: (route)=>({keyword1:route.params.keyword, keyword2: route.query.keyword })

      //NavigationDuplicated: Avoided redundant navigation to current location: "/search?keyword1=".
      // 如果没有通过参数指定成功或者失败回调函数就返回一个promise且内部会判断如果要跳转的路径和参数都没有变化,
 			//会抛出一个失败的promise
      //解决办法1： 调用push的时候传递成功和失败的回调给内部，让promise可以正常处理
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},//如果传递的是空串，就换成undefined
      //   query: { keyword1: this.keyword.toUpperCase() },
      // },()=>{},()=>{});

      // 也可以只传成功的回调函数
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},//如果传递的是空串，就换成undefined
      //   query: { keyword1: this.keyword.toUpperCase() },
      // },()=>{}); 
      //也可以只传失败的回调去处理
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},//如果传递的是空串，就换成undefined
      //   query: { keyword1: this.keyword.toUpperCase() },
      // }).catch(() => {});


      //解决方法2：修改push方法
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},//如果传递的是空串，就换成undefined
      //   query: { keyword1: this.keyword.toUpperCase() },
      // });

      //    let location = {
      //   name: "search",
      //   params: { keyword: this.keyword || undefined},
      // }

      // //跳转之前，看看之前有没有给带query参数过来，如果有，那么把query参数也带上
      // if(this.$route.query){
      //   location.query = this.$route.query
      // }

      // this.$router.push(location);


      let location={
        name:'search',
        params:{keyword:this.keyword||undefined}
      }
       if(this.$route.query){
         location.query=this.$route.query
       }
      this.$router.push(location)
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
