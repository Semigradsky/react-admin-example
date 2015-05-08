'use strict';

const React = require('react');
const { Navigation, RouteHandler } = require('react-router');

const Navbar = require('components/navbar/Navbar');
const PageFooter = require('components/PageFooter');

const auth = require('services/auth');

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

module.exports = App;
