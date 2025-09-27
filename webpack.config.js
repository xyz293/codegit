const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: path.resolve(__dirname, 'src/index.js'),    //入口
 output: {   //出口
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.js',
 },
 mode: 'development',
 plugins: [
  new HtmlWebpackPlugin({   //自动将打包好的js代码引入

   template: path.resolve(__dirname, 'src/public/index.html'),  //告诉我以谁为基础
   filename: path.resolve(__dirname,'dist/index.html'),   //告诉我以谁为基础，生成的html文件名为index.html
  }),
 ],
 module: {   //加载器让webpack识别更多文件
  rules: [
   {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
   },
  ],
 },
};