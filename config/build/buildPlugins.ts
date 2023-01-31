import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtract from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export const buildPlugins = ({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtract({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
};
