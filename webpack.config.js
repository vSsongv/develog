const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const ENVIRONMENT = process.env.NODE_ENV || DEVELOPMENT;

// const urls = ['index', 'mypage', 'mypageEdit', 'signin', 'signup', 'findUser', 'uploadPost', 'editPost', 'detail'];
const urls = ['index', 'header', 'mypage'];
const htmlWebpackPlugins = () =>
  urls.map(
    url =>
      new HtmlWebpackPlugin({
        title: 'develog',
        filename: `${url}.html`,
        template: `src/${url}.html`,
        chunks: [url === 'index' ? 'main' : url],
      })
  );

module.exports = {
  mode: ENVIRONMENT,
  plugins: [...htmlWebpackPlugins(), new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  entry: {
    main: ['@babel/polyfill', './src/js/index.js', './src/scss/index.scss'],
    header: ['@babel/polyfill', './src/js/index.js', './src/scss/index.scss'],
    mypage: ['@babel/polyfill', './src/js/mypage.js', './src/scss/index.scss'],
    // mypageEdit: ['@babel/polyfill', './src/js/mypageEdit.js'],
    // signin: ['@babel/polyfill', './src/js/signin.js'],
    // signup: ['@babel/polyfill', './src/js/signup.js'],
    // findUser: ['@babel/polyfill', './src/js/findUser.js'],
    // uploadPost: ['@babel/polyfill', './src/js/uploadPost.js'],
    // detail: ['@babel/polyfill', './src/js/detail.js'],
  },
  output: {
    path: path.resolve(__dirname, `${ENVIRONMENT === DEVELOPMENT ? 'build' : 'dist'}`),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.s(a|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      stage: 3,
                      features: {
                        'nesting-rules': true,
                      },
                      autoprefixer: { grid: true },
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  // devtool: 'source-map',
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'public'),
  //   },
  // },
};
