'use strict';

import React from 'react';

import auth from 'services/auth';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout();
  }

  render() {
    return <p>You are now logged out</p>;
  }
}

export default Logout;
