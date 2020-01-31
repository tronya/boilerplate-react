import React from 'react';
import { AppRoot } from './appRoot';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <div>Hello</div>,
      },
    ],
  },
];

export default routes;
