'use strict';

import React from 'react';
import { Link } from 'react-router';

class EditingDisplay extends React.Component {
    render() {
        return (
          <Link to="editUser" params={{userId: this.props.rowData.id}} className="fa fa-pencil fa-lg"/>
        );
    }
}

export default EditingDisplay;
