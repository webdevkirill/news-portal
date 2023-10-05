import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: 'bundle.[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
};
