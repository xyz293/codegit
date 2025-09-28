const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
   //入口  出口 插件 模式 加载器

 entry: path.resolve(__dirname, 'src/index.js'),    //入口
 output: {   //出口
  path: path.resolve(__dirname, 'dist'),  //出口文件
  filename: 'main.js',
 },
  plugins:[   /*new ESLintPlugin({
                 extensions: ['js', 'jsx'],  // 检查 JS 和 JSX
              context: __dirname,          // 项目根目录
              eslintPath: require.resolve('eslint'),
                 }),*/
    
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'), 
     //以什么为模板  新的html结构与原先一样并且自动引入打包资源
    filename: 'index.html',
  }),
  ],

 mode: 'development',
 module:{
    rules:[
        {
            test:/\.css$/,  //会检测所有的css文件
            use:['style-loader','css-loader']
        },
    ]
 },
 devServer: {
   host: 'localhost',
    open: true,
    port: 3000,
  },
};