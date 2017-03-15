import webpack from 'webpack';
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const config = {
  devtool: 'source-map',
  entry: {
    index: path.join(__dirname, '../src/index.jsx')
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: 'build/',
    filename: 'build.js',
    sourceMapFilename: 'build.map'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};

export default config
