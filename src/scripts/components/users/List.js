'use strict';

const React = require('react');

const users = require('services/users');
const Authentication = require('mixins/Authentication');
const Grid = require('components/grid/Grid');
const DateDisplay = require('components/grid/DateDisplay');

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
          data={this.state.users}
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

module.exports = UserList;
