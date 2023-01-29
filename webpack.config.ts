import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackCOnfig';
import { IBuildPaths } from './config/build/types/config';

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development'

const config: Configuration = buildWebpackConfig({
  mode: mode,
  paths,
  isDev,
})

export default config;