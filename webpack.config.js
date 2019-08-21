const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "@app": path.resolve(__dirname, 'src/app/'),
      "@model": path.resolve(__dirname, 'src/app/_models/'),
      "@helper": path.resolve(__dirname, 'src/app/_helper'),
      "@service": path.resolve(__dirname, 'src/app/_services/'),
      "@component": path.resolve(__dirname, 'src/app/_components/'),
      "@partial": path.resolve(__dirname, 'src/app/_partial/')
      // '@': path.resolve(__dirname, 'src/app/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },

      // workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
      {
        test: /[\/\\]@angular[\/\\].+\.js$/,
        parser: { system: true }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html')}),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:4000'
      })
    }),

    // workaround for warning: Critical dependency: the request of a dependency is an expression
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, 'src')
    )
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  devServer: {
    historyApiFallback: true
  }
}
