import 'console-polyfill';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/main.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import Router from 'react-router';
const { Route, DefaultRoute, NotFoundRoute } = Router;

import App from 'components/App';
import Logout from 'components/auth/Logout';
import Login from 'components/auth/Login';
import About from 'components/static/About';
import Dashboard from 'components/Dashboard';
import Users from 'components/users/List';
import UserEdit from 'components/users/Edit';
import NotFound from 'components/static/NotFound';

const content = document.getElementsByTagName('body')[0];

const Routes = (
  <Route handler={App}>
    <DefaultRoute name="dashboard" handler={Dashboard}/>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="users" handler={Users}/>
    <Route name="editUser" path="users/:userId?" handler={UserEdit}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(Routes, Router.HashLocation, (Handler) => {
  React.render(<Handler/>, content);
});
