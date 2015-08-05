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

  componentWillMount() {
    auth.onChange = this.onAuthChange;
    auth.login();
  },

  onAuthChange(loggedIn) {
    this.setState({ loggedIn });
    !loggedIn && this.transitionTo('login');
  },

  render() {
    const authState = this.state.loggedIn;
    const meta = [
      {
        'name': 'description',
        'content': 'React Admin Example application'
      }
    ];

    return (
      <div id="content">
        <Helmet title="React Admin Example" meta={meta} />
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
