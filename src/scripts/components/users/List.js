'use strict';

const React = require('react');
const Griddle = require('griddle-react');

const Authentication = require('mixins/Authentication');
const users = require('services/users');

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
        <Griddle
          results={this.state.users}
          columns={['name', 'login', 'email', 'birthday']}
        />
      </div>
    );
  }

});

module.exports = UserList;
