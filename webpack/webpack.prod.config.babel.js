import webpack from 'webpack';
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const ROOT_DIR = path.resolve(__dirname, '..');
const config = {
  entry: [
    // 'whatwg-fetch',
    // 'promise-polyfill',
    path.join(__dirname, '../src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: 'build/',
    filename: 'build.js',
    sourceMapFilename: 'build.map'
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
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin()
  ]
};

export default config
