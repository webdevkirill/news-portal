import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildOptions, IBuildPaths } from './config/build/types/config';

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';

const options: IBuildOptions = {
  mode,
  paths,
  isDev: mode === 'development',
}

const config = buildWebpackConfig(options);

export default config;
