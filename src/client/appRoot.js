import { renderRoutes } from 'react-router-config';
import React from 'react';
import Header from './components/shared/header';
import AuthorizationGuard from './components/shared/authorizationGuard';

require('../scss/index.css');

export const AppRoot = ({ route }) => (
  <AuthorizationGuard>
    <Header />
    <main className="page-content">{renderRoutes(route.routes)}</main>
  </AuthorizationGuard>
);
