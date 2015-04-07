'use strict';

var React = require('React');

var UsersList = require('components/users/List');

var auth = require('services/auth');
var Authentication = require('mixins/Authentication');

var users = [
  {
    id: 1,
    firstName: 'Allah',
    lastName: 'Akbar',
    ageBirth: new Date(Date.parse('1/1/1990')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  },
  {
    id: 2,
    firstName: 'Dmitry',
    lastName: 'Semigradsky',
    ageBirth: new Date(Date.parse('9/3/1990')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  },
  {
    id: 3,
    firstName: 'B',
    lastName: 'C',
    ageBirth: new Date(Date.parse('3/10/1995')).toISOString(),
    img: 'https://avatars1.githubusercontent.com/u/1198848?v=3&s=460'
  }
];

var Dashboard = React.createClass({
  mixins: [ Authentication ],

  render: function () {
    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
        <UsersList users={users} />
      </div>
    );
  }
});

module.exports = Dashboard;
