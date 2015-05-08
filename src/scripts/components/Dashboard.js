'use strict';

const React = require('react');

const auth = require('services/auth');
const Authentication = require('mixins/Authentication');

const imageURL = require('images/yeoman.png');

const Dashboard = React.createClass({
  mixins: [ Authentication ],

  render() {
    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <img src={imageURL} />
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    );
  }
});

module.exports = Dashboard;
