module.exports = {
  entry: "./source/app.jsx",
  output: {
    path: __dirname + '/dist/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
         test: /.jsx?$/,
	 exclude: /node_modules/,
	 loader: 'babel-loader',
	 query: {
           presets: ['react', 'es2015']
         }
      }
    ]
  }
};
