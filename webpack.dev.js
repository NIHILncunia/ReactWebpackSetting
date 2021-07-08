const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: [ '.js', '.jsx', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/store': path.resolve(__dirname, 'src/store/'),
      '@/images': path.resolve(__dirname, 'src/images/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/reducers': path.resolve(__dirname, 'src/reducers/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/data': path.resolve(__dirname, 'src/data/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ [
              '@babel/preset-env', {
                targets: { browsers: [ 'last 2 chrome versions', ], },
              }, ],
              '@babel/preset-react',
              '@emotion/babel-preset-css-prop',
            ],
            plugins: [
              [ '@emotion/babel-plugin', { sourceMap: true, }, ], require.resolve('react-refresh/babel'),
            ],
          },
        },
      },
      {
        test: [ /\.s[ac]ss$/i, /\.css$/i, ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/'),
    publicPath: '/build/',
    overlay: true,
    port: 3000,
    hot: true,
    open: true,
  },
};