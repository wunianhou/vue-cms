const path = require('path');
//启动热更新导入webpack
const webpack = require('webpack');
//导入html-webpack-plugin--生成html页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: "development", // 开发模式
    entry:path.join(__dirname,'src/main.js'),
    devServer:{ //配置dev-server命令参数
        contentBase: 'src',
        open:true,//自动打开浏览器
        port:3000,//设置启动时候的端口
        hot:true //启用热更新
        
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[ //配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //这是热更新的模块对象
        new htmlWebpackPlugin({ //创建一个在内存中生成的html插件
            template:path.join(__dirname,'./src/index.html'),//指定的模块页面
            filename:'index.html'//指定生成的页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2|otf)$/,
                use:'url-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    resolve:{
        alias:{//设置Vue 被导入时候的路径
            //'vue$':'vue/dist/vue.js'
        }
    }
}