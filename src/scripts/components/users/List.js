import React from 'react';
import { Link } from 'react-router';

import UserStore from 'components/users/Store';
import Authentication from 'mixins/Authentication';
import Grid from 'components/grid/Grid';
import DateDisplay from 'components/grid/DateDisplay';
import UserEditingDisplay from 'components/users/EditingDisplay';
import Loading from 'components/Loading';

import './users.css';

const metadata = [
  { columnName: 'name', displayName: 'Name' },
  { columnName: 'login', displayName: 'Login' },
  { columnName: 'email', displayName: 'E-mail' },
  { columnName: 'birthday', displayName: 'Birthday', customComponent: DateDisplay, cssClassName: 'birthday' },
  { columnName: 'options', displayName: '', customComponent: UserEditingDisplay, cssClassName: 'options' }
];

const UserList = React.createClass({
  mixins: [ Authentication ],

  update() {
    UserStore.getAll((data) => {
      this.setState({
        dataLoaded: true,
        users: data
      });
    });
  },

  getInitialState() {
    return {
      dataLoaded: false,
      users: []
    };
  },

  componentDidMount() {
    this.update();
    UserStore.addChangeListener(this.update);
  },

  componentWillUnmount() {
    UserStore.removeChangeListener(this.update);
  },

  render() {
    return (
      <div>
        <h1>Users
          <Link to="editUser" className="fa fa-plus create-user-link" />
        </h1>
        <Loading progress={!this.state.dataLoaded}>
          <Grid
            results={this.state.users}
            columns={['name', 'login', 'email', 'birthday', 'options']}
            columnMetadata={metadata}
            className="users-list"
            resultsPerPage={20}
            initialSort="name"
            initialSortAscending={true}
          />
        </Loading>
      </div>
    );
  }

});

export default UserList;
