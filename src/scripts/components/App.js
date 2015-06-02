'use strict';

import React from 'react';
import { Navigation, RouteHandler } from 'react-router';

import Navbar from 'components/navbar/Navbar';
import PageFooter from 'components/footer/PageFooter';

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
    !loggedIn && this.transitionTo('login');
  },

  componentWillMount() {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render() {
    const authState = this.state.loggedIn;

    return (
      <div id="content">
        <Navbar auth={authState} />
        <div id="page-content" className={authState ? 'auth' : ''}>
          <RouteHandler />
        </div>
        <PageFooter />
      </div>
    );
  }
});

export default App;
