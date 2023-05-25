const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // 要解析的代码的位置
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|s[cs]ss)$/,
        use: ['style-loader','css-loader'],// 从右往左的执行顺序
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25* 1024 // 25kb
          }
        },
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      }
    ]
  }
}