'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var { RouteHandler, Link } = Router;

var auth = require('services/auth');

var imageURL = require('images/yeoman.png');

var ReactAdminExampleApp = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function() {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;

    return (
      <div className='main'>
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
    );
  }
});

module.exports = ReactAdminExampleApp;
