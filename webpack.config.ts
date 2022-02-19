import path from 'path'
import { Configuration } from 'webpack'

export default function webpackConfig(_: any, env: any): Configuration {
  return {
    entry: path.resolve(__dirname, 'src'),
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  }
}
