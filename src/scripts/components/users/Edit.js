'use strict';

import React from 'react';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

import users from 'services/users';
import Authentication from 'mixins/Authentication';
import Loading from 'components/Loading';

require('./users.css');

const UserEdit = React.createClass({
  mixins: [ Authentication ],

  getInitialState() {
    return {
      dataLoaded: false,
      dataSaved: true,
      user: {}
    };
  },

  componentDidMount() {
    const userId = this.props.params.userId;
    users.get(userId, (data) => {
      if (this.isMounted()) {
        this.setState({ dataLoaded: true, user: data });
      }
    });
  },

  handleSubmit(data) {
    const userId = this.props.params.userId;
    this.setState({ dataSaved: false });

    users.save(userId, data, (err, savedData) => {
      if (err) {
        console.error(err);
        return;
      }
      this.setState({ dataSaved: true, user: savedData });
    });
  },

  resetForm() {

  },

  render() {
    const user = this.state.user;

    return (
      <div>
        <h1>Edit User</h1>
        <Loading progress={!this.state.dataLoaded}>
          <Formsy.Form onValidSubmit={this.handleSubmit} className="form-horizontal form edit-user-form">
            <FRC.Input type="text" name="login" label="Login" value={user.login} required />
            <FRC.Input type="email" name="email" label="Email" value={user.email} required validations="isEmail" />
            <FRC.Input type="text" name="name" label="Name" value={user.name} />
            <FRC.Input type="text" name="birthday" label="Birthday" value={user.birthday} />
            <FRC.Input type="text" name="city" label="City" value={user.city} />
            <FRC.Input type="text" name="country" label="Country" value={user.country} />
            <FRC.Row layout="horizontal">
              <Loading progress={!this.state.dataSaved}>
                <input className="btn btn-default" onClick={this.resetForm} type="reset" value="Reset" />
                <span> </span>
                <input className="btn btn-primary" formNoValidate={true} type="submit" value="Save" />
              </Loading>
            </FRC.Row>
          </Formsy.Form>
        </Loading>
      </div>
    );
  }

});

export default UserEdit;
