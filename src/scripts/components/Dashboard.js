'use strict';

var React = require('React');

var auth = require('services/auth');
var Authentication = require('mixins/Authentication');

var UsersList = require('components/users/List');

var Dashboard = React.createClass({
  mixins: [ Authentication ],

  render: function () {
    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
        <UsersList/>
      </div>
    );
  }
});

module.exports = Dashboard;
