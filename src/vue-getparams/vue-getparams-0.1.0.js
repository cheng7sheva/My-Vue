var VueGPFURL={}
VueGPFURL.install=function (Vue) {
  Vue.mixin({
    created: function () {
      if(!this.$route) return false;
      //FIXME $route的match暂时没发现如何会出现多个匹配，如果出问题随时修改
      var m = this.$route.path.match(this.$route.matched[0].regex);
      console.log(m);
      // var params=m[1];
      // params=params.split("/");
      // var __get={};
      // for(var i=0;i<params.length;i+=2){
      //   __get[params[i]]=decodeURIComponent(params[i+1]);
      // }
      // this.$_GET=__get;
    }
  });
};
Vue.use(VueGPFURL);