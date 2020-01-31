import { AppRoot } from './appRoot';
import React from 'react';

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
