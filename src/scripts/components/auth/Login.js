import React from 'react';
import Router from 'react-router';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

import auth from 'services/auth';

import './login.css';

const Login = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    attemptedTransition: null
  },

  getInitialState() {
    return {
      error: false
    };
  },

  onSubmit(data) {
    auth.login(data.email, data.pass, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }

      if (Login.attemptedTransition) {
        const transition = Login.attemptedTransition;
        Login.attemptedTransition = null;
        transition.retry();
      } else {
        this.transitionTo('dashboard');
      }
    });
  },

  render() {
    const errors = this.state.error ? <p>Bad login information</p> : '';
    return (
      <Formsy.Form onSubmit={this.onSubmit} className="form-horizontal form login-form">
        <FRC.Input name="email" label="Email" placeholder="email" value="joe@example.com" />
        <FRC.Input name="pass" label="Password" type="password" placeholder="password" help="(hint: password1)" />
        <FRC.Row layout="horizontal">
          <input className="btn btn-primary" formNoValidate={true} type="submit" value="Login" />
        </FRC.Row>
        {errors}
      </Formsy.Form>
    );
  }
});

export default Login;
