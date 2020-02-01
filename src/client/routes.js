import React from 'react';
import { AppRoot } from './appRoot';
import Home from './pages/home';
import Projects from './pages/projects/projects';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Home someParams={{ userSomething: 'some parameters' }} />,
      },
      {
        path: '/admin/project_tasks',
        component: Projects,
      },
      {
        path: '/admin/tasks/invoices',
        component: () => <div>and i am Invoices</div>,
      },
    ],
  },
];

export default routes;
