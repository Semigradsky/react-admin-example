'use strict';

import React from 'react';

import users from 'services/users';
import Authentication from 'mixins/Authentication';
import Grid from 'components/grid/Grid';
import DateDisplay from 'components/grid/DateDisplay';

const metadata = [
  { columnName: 'name', displayName: 'Name' },
  { columnName: 'login', displayName: 'Login' },
  { columnName: 'email', displayName: 'E-mail' },
  { columnName: 'birthday', displayName: 'Birthday', customComponent: DateDisplay, cssClassName: 'birthday' }
];

const UserList = React.createClass({
  mixins: [ Authentication ],

  getInitialState() {
    return {
      users: []
    };
  },

  componentDidMount() {
    users.getAll((data) => {
      if (this.isMounted()) {
        this.setState({
          users: data
        });
      }
    });
  },

  render() {
    return (
      <div>
        <h1>Users</h1>
        <Grid
          results={this.state.users}
          columns={['name', 'login', 'email', 'birthday']}
          columnMetadata={metadata}
          className="users-list"
          resultsPerPage={20}
          initialSort="name"
          initialSortAscending={true}
        />
      </div>
    );
  }

});

export default UserList;
