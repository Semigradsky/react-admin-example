import React from 'react';
import fecha from 'fecha';

const DateDisplay = React.createClass({
  render() {
    return (
      <span>
        {this.props.data ? fecha.format(new Date(this.props.data), 'D MMM YYYY') : ''}
      </span>
    );
  }
});

export default DateDisplay;
