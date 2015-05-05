'use strict';

const React = require('react');
const Griddle = require('griddle-react');

const users = require('services/users');

const UserList = React.createClass({
  getInitialStatefunction() {
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
      <Griddle
        results={this.state.users}
        columns={['name', 'login', 'email', 'birthday']}
      />
    );
  }

});

module.exports = UserList;
