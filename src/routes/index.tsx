
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = [
  { path: '/', component: lazy(() => import('pages/Dashboard')) },
  { path: '/account', component: lazy(() => import('pages/Account')) },
  { path: '/calculator', component: lazy(() => import('pages/Calculator')) },
  { path: '/doge', component: lazy(() => import('pages/Doge')) },
];

function ComposeRoutes() {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        {routes.map(({ component, path }, i) => {
          const PageComponent = component;
          return <Route key={i} path={path} element={<PageComponent />} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default ComposeRoutes;
export { ComposeRoutes };
