'use strict';

const React = require('react');

const auth = require('services/auth');
const Authentication = require('mixins/Authentication');

const UsersList = require('components/users/List');

const Dashboard = React.createClass({
  mixins: [ Authentication ],

  render() {
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
