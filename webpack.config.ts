import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildOptions, IBuildPaths } from './config/build/types/config';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode ?? 'development';

  const options: IBuildOptions = {
    mode,
    paths,
    isDev: mode === 'development',
    port: env.port ?? 3005,
  };

  return buildWebpackConfig(options);
};
