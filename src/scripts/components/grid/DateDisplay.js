'use strict';

import React from 'react';
import fecha from 'fecha';

class DateDisplay extends React.Component {
    render() {
        return <span>
          {this.props.data ? fecha.format(new Date(this.props.data), 'D MMM YYYY') : ''}
        </span>;
    }
}

export default DateDisplay;
