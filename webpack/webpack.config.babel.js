import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
// import devConfig from './webpack.dev.config.babel';
// import prodConfig from './webpack.prod.config.babel';

// const CONFIG = process.env.npm_lifecycle_event === 'build' ? prodConfig : devConfig;
const ROOT_DIR = path.resolve(__dirname, '..');

export default {
  entry: [
    'whatwg-fetch',
    'promise-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    path.join(ROOT_DIR, 'src/index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [ path.join(ROOT_DIR, 'src') ],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  context: path.resolve(__dirname, 'src'),
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: ROOT_DIR,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 8888,
    publicPath: '/static/',
    stats: 'normal' // customize terminal console info
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  performance: {
    hints: false
  }
};
