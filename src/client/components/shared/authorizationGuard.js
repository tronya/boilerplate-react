import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../../pages/signIn';

const AuthorizationGuard = ({ children }) => {
  const { access_token: accessToken } = useSelector(state => state.user || {});

  if (accessToken) {
    return children;
  }
  return <SignIn />;
};

export default AuthorizationGuard;
