'use strict';

require('console-polyfill');
// CSS
require('normalize.css');
require('styles/main.css');

var ReactAdminExampleApp = require('./ReactAdminExampleApp');
var Logout = require('./auth/Logout');
var Login = require('./auth/Login');
var About = require('./About');
var Dashboard = require('./Dashboard');

var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler } = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactAdminExampleApp}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
