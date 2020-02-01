import React from 'react';
import { AppRoot } from './appRoot';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <div className="page__container">Hello</div>,
      },
      {
        path: '/admin/project_tasks',
        component: () => <div className="page__container">Project Tasks</div>,
      },
      {
        path: '/admin/tasks/invoices',
        component: () => <div>and i am invoises</div>,
      },
    ],
  },
];

export default routes;
