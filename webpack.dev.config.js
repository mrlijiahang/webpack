// 实际是node 需要导出对象

const path =require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry: {
        // 一个或者多个入口
        'main': './main.js'
    },
    output: {
        path:path.resolve('./dist'), //相对转绝对
        // filename: './buildok.js'
        filename: 'buildok.js'
    },
    // watch: true,
    //自动监视
    module: {
        loaders: [ //也可以叫roles
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
             // 因为动态创建script标签插入所以。。。
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader?limit=1000000'
                // 74105  ?limit=7500000
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
           
        ]
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]
    // }
    // plugins:[
    //     // 插件执行顺序跟元素索引有关系
    //     new HtmlWebpackPlugin({
    //         template:'./dist/index.html'//参照物
    //     })
    // ]
}