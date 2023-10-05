import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routerConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};
