'use strict';

const React = require('react/addons');
const ReactTransitionGroup = React.addons.TransitionGroup;
const Router = require('react-router');
const { RouteHandler, Link } = Router;

const Navbar = require('components/Navbar');

const auth = require('services/auth');

const imageURL = require('images/yeoman.png');

const ReactAdminExampleApp = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount() {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render() {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;

    return (
      <div id="content">
        <Navbar />
        <div id="page-content">
          <ReactTransitionGroup transitionName="fade">
            <img src={imageURL} />
          </ReactTransitionGroup>
          <div>
            <ul>
              <li>{loginOrOut}</li>
              <li><Link to="about">About</Link></li>
              <li><Link to="dashboard">Dashboard</Link> (authenticated)</li>
            </ul>
          </div>
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = ReactAdminExampleApp;
