import React from 'react';

const Loading = React.createClass({
  render() {
    const spin = <i className="fa fa-refresh fa-spin fa-lg"></i>;
    return !this.props.progress ? (<div>{this.props.children}</div>) : spin;
  }
});

export default Loading;
