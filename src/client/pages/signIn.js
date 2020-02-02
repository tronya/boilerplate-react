import React from 'react';
import { connect } from 'react-redux';
import AuthorizationForm from '../components/forms/authorizationForm';
import { userSignIn } from '../redux/actions/userActions';

const SignIn = ({ signUp }) => {
  const customerFormSubmit = val => signUp(val); // handle error
  return (
    <div>
      <AuthorizationForm onSubmit={customerFormSubmit} />
    </div>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    signUp: data => dispatch(userSignIn(data)),
  }),
)(SignIn);
