import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

const AuthorizationForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Please Sign In</h1>
      <div className="row">
        <div className="col-xs-12">
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
        </div>
        <div className="col-xs-12">
          <label>Password</label>
          <div>
            <Field name="password" component="input" type="password" placeholder="Password" />
          </div>
        </div>
        <div className="col-xs-12">
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'signIn', // a unique identifier for this form
})(AuthorizationForm);
