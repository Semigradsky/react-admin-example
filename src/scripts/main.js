'use strict';

const request = require('superagent');

require('console-polyfill');
// CSS
require('normalize.css');
require('styles/main.css');

const React = require('react');
const Router = require('react-router');
const { Route, RouteHandler } = Router;

const App = require('components/App');
const Logout = require('components/auth/Logout');
const Login = require('components/auth/Login');
const About = require('components/About');
const Dashboard = require('components/Dashboard');
const Users = require('components/users/List');

const content = document.getElementsByTagName('body')[0];

const Routes = (
  <Route handler={App}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="users" handler={Users}/>
  </Route>
);

Router.run(Routes, (Handler) => {
  React.render(<Handler/>, content);
});
