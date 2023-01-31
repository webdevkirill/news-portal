import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Renders
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Home Page</Link>
      <Link to={'/about'}>About Page</Link>

      <button onClick={toggleTheme}>сменить тему</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
