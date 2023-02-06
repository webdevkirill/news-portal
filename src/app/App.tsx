import { Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Renders
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Home Page</Link>
      <Link to={'/about'}>About Page</Link>

      <button onClick={toggleTheme}>сменить тему</button>

      <AppRouter />
    </div>
  );
};
