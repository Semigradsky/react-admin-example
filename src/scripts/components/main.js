'use strict';

require('console-polyfill');
// CSS
require('normalize.css/normalize.css');
require('../../styles/main.css');

var ReactAdminExampleApp = require('./ReactAdminExampleApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactAdminExampleApp}>
    <Route name="/" handler={ReactAdminExampleApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
