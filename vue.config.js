//该文件专门用于定制脚手架
module.exports = {
  lintOnSave:false,
  devServer:{
    proxy:{
      "/api":{
        target:'http://39.98.123.211',
      // pathRewrite: {"^/api" : ""}  //重写路径，是去掉路径中的/api，看情况写还是不写
      }
    }
 
  }
}