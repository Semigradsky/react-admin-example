'use strict';

import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Ooops... Page not found!</h1>
        <p>
          Go back to <Link to="dashboard">dashboard</Link>
          &nbsp;or onward to <a href="https://github.com/Semigradsky/react-admin-example">source</a>
        </p>
      </div>
    );
  }
}

export default NotFound;
