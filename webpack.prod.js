const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true,
                },
              }],
              '@babel/preset-react'
            ],
            plugins: [],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};