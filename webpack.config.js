const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
              'postcss-loader'
            ],
        },
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif|woff2|woff)$/,
          loader: 'file-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ]
    },
    plugins: [
      // настроили плагин
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),

      new MiniCssExtractPlugin()
    ],
    
}