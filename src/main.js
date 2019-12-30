//入口文件
//导入Vue模板
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入Mint-ui组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入本地的router.js模块
import router from './router.js'
//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import app from './App.vue'
var vm = new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router //挂载路由到Vue实例中
})