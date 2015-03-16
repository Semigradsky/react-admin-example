'use strict';

var auth = require('../services/auth');
var Login = require('../components/auth/Login');

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};

module.exports = Authentication;
