'use strict';

import React from 'react';

import auth from 'services/auth';
import Authentication from 'mixins/Authentication';

import imageURL from 'images/yeoman.png';

const Dashboard = React.createClass({
  mixins: [ Authentication ],

  render() {
    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <img alt="logo" src={imageURL} />
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    );
  }
});

export default Dashboard;
