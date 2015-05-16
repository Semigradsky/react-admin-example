'use strict';

import React from 'react';
import { Navigation, RouteHandler } from 'react-router';

import Navbar from 'components/navbar/Navbar';
import PageFooter from 'components/PageFooter';

import auth from 'services/auth';

const App = React.createClass({
  mixins: [Navigation],

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
    this.transitionTo(loggedIn ? 'dashboard' : 'login');
  },

  componentWillMount() {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render() {
    var auth = this.state.loggedIn;

    return (
      <div id="content">
        <Navbar auth={auth} />
        <div id="page-content" className={auth ? 'auth' : ''}>
          <RouteHandler />
        </div>
        <PageFooter />
      </div>
    );
  }
});

export default App;
