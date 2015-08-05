import React from 'react';

import EditingDisplay from 'components/grid/EditingDisplay';
import RemoveModal from 'components/users/RemoveModal';

const UserEditingDisplay = React.createClass({
  render() {
    return (
      <EditingDisplay editRoute="editUser" className="users" remove={true} {...this.props}>
        <RemoveModal id={this.props.rowData.id} login={this.props.rowData.login} />
      </EditingDisplay>
    );
  }
});

export default UserEditingDisplay;
