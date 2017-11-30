import { extendBaseConfig } from '../webpack.base.babel';
import webpack from 'webpack';

export default extendBaseConfig({
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ],
    plugins: [
      new webpack.ProvidePlugin({
        "React": "react",
      }),
    ],
  },
});
