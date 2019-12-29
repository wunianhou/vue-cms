//入口文件
//导入Vue模板
import Vue from 'vue'
//导入Mint-ui组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import app from './App.vue'
var vm = new Vue({
    el:"#app",
    data:{},
    render:c=>c(app)
})