import path from 'path';
import { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';

export const buildWebpackConfig = (options: IBuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: {
      bundle: paths.entry,
    },
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options)
  }
}