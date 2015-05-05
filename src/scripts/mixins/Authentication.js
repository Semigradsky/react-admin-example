'use strict';

const auth = require('services/auth');
const Login = require('components/auth/Login');

const Authentication = {
  statics: {
    willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};

module.exports = Authentication;
