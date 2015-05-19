'use strict';

import React from 'react';

class Loading extends React.Component {
  render() {
    return !this.props.progress ? this.props.children : (
      <i className="fa fa-refresh fa-spin fa-lg"></i>
    );
  }
}

export default Loading;
