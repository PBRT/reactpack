/*
  Webpack base config file
*/

var path = require('path');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, './client/app.jsx')]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|otf|jpg)$/, exclude: /node_modules/,
        loader: "url-loader"
      },
      {
        test: /\.css$/, exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/, exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee', '.jsx'],
    modulesDirectories: [
      'web_modules',
      'node_modules'
    ]
  }
}
