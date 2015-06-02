'use strict';

import React from 'react';

import users from 'services/users';
import Authentication from 'mixins/Authentication';
import Loading from 'components/Loading';

require('./users.css');

const UserEdit = React.createClass({
  mixins: [ Authentication ],

  getInitialState() {
    return {
      dataLoaded: false,
      user: null
    };
  },

  componentDidMount() {
    const userId = this.props.params.userId;
    users.get(userId, (data) => {
      if (this.isMounted()) {
        this.setState({
          dataLoaded: true,
          user: data
        });
      }
    });
  },

  render() {
    const obj = JSON.stringify(this.state.user, null, 4);
    return (
      <div>
        <h1>Edit User</h1>
        <Loading progress={!this.state.dataLoaded}>
          <pre>{{obj}}</pre>
        </Loading>
      </div>
    );
  }

});

export default UserEdit;
