import React from 'react';
import { Navigation } from 'react-router';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

import UserActions from 'components/users/Actions';
import UserStore from 'components/users/Store';
import Authentication from 'mixins/Authentication';
import Loading from 'components/Loading';
import Datepicker from 'components/inputs/Datepicker';

import './users.css';

const UserEdit = React.createClass({
  mixins: [ Authentication, Navigation ],

  getInitialState() {
    return {
      dataLoaded: false,
      dataSaved: true,
      user: {}
    };
  },

  componentDidMount() {
    const userId = this.props.params.userId;
    if (!userId) {
      this.setState({ dataLoaded: true, user: {} });
      return;
    }

    UserStore.get(userId, (data) => {
      if (this.isMounted()) {
        this.setState({ dataLoaded: true, user: data });
      }
    });
  },

  onSubmit(data) {
    const id = this.props.params.userId;
    this.setState({ dataSaved: false });

    if (id) {
      UserActions.update(id, data, this.onSave);
    } else {
      UserActions.create(data, this.onSave);
    }
    this.transitionTo('users');
  },

  onSave(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    this.setState({ dataSaved: true, user: data });
  },

  resetForm() {

  },

  render() {
    const userId = this.props.params.userId;
    const user = this.state.user;

    return (
      <div>
        <h1>{userId ? 'Edit' : 'Create'} User</h1>
        <Loading progress={!this.state.dataLoaded}>
          <Formsy.Form onValidSubmit={this.onSubmit} className="form-horizontal form edit-user-form">
            <FRC.Input type="text" name="login" label="Login" value={user.login} required />
            <FRC.Input type="email" name="email" label="Email" value={user.email} required validations="isEmail" />
            <FRC.Input type="text" name="name" label="Name" value={user.name} />
            <Datepicker name="birthday" label="Birthday" value={user.birthday} readOnly />
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
