module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: './client/compiled',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};