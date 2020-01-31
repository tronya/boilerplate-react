import { renderRoutes } from 'react-router-config';
import React from 'react';
import Header from './components/shared/header/header';

require('../scss/index.css');


export const AppRoot = ({ route }) => {
  return (
    <div>
      <Header/>
      {renderRoutes(route.routes)}
    </div>
  );
};
