const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  'mode': 'development',
  'devtool': 'eval',
  'entry': {
    'app': path.resolve(__dirname, 'src', 'index'),
  },
  'resolve': {
    'extensions': [ '.js', '.jsx', ],
  },
  'module': {
    'rules': [
      {
        'test': /\.jsx?/,
        'exclude': /node_modules/,
        'use': {
          'loader': 'babel-loader',
          'options': {
            'presets': [ [
              '@babel/preset-env', {
                'targets': {
                  'esmodules': true,
                },
              }, ],
              '@babel/preset-react',
            ],
            'plugins': [ 'react-refresh/babel', ],
          },
        },
      },
      {
        'test': [ /\.s[ac]ss$/i, /\.css$/i, ],
        'use': [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  'plugins': [
    new ReactRefreshWebpackPlugin(),
  ],
  'output': {
    'filename': '[name].js',
    'path': path.resolve(__dirname, 'build'),
  },
  'devServer': {
    'contentBase': path.join(__dirname, '/'),
    'publicPath': '/build/',
    'overlay': true,
    'port': 3000,
    'hot': true,
    'open': true,
  },
};