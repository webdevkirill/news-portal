import { Navbar } from 'widgets/Nabvar';

import { classNames } from 'shared/lib/classNames';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};
