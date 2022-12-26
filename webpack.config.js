const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ]
          },
          {
            test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'/src/index.html')
       }) 
   ],
   resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
   }
}