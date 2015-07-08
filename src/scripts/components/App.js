'use strict';

import React from 'react';
import { Navigation, RouteHandler } from 'react-router';
import Helmet from 'react-helmet';

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
    this.setState({ loggedIn });
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
        <Helmet title="React Admin Example"
                meta={[
                        {'name': 'description', 'content': 'React Admin Example application'}
                      ]}
        />
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
