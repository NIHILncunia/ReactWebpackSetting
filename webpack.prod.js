const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: [ '.js', '.jsx', ],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@css': path.resolve(__dirname, 'src/assets/css/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
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
            plugins: [ '@emotion/babel-plugin', ],
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
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};