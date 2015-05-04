'use strict';

require('console-polyfill');
// CSS
require('normalize.css');
require('styles/main.css');

var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler } = Router;

var App = require('components/App');
var Logout = require('components/auth/Logout');
var Login = require('components/auth/Login');
var About = require('components/About');
var Dashboard = require('components/Dashboard');

var content = document.getElementsByTagName('body')[0];

var Routes = (
  <Route handler={App}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
