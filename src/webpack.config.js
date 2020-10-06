const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true }
          }
        ]
      },
      {                
        test: [/.css$/],                
        use:[                    
         'style-loader', 
         MiniCssExtractPlugin.loader,                 
         'css-loader'
        ]            
      },
      {
        test: /\.(png|jpg|gif|svg)$/, use: [
        {
        loader: 'file-loader', options: {
        name: '[name].[ext]',
        outputPath: 'assets/images' }
        } ]
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({ filename: 'style.css'
    }),
    new CopyPlugin({
        patterns: [
          { from:'./src/assets/images', to:'assets/images' }
        ],
      }),
    ]
};