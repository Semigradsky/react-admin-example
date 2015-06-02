'use strict';

import React from 'react';
import Griddle from 'griddle-react';

require('./grid.css');

class Grid extends React.Component {
  render() {
    return (
      <Griddle
        useGriddleStyles={false}
        tableClassName={'grid ' + this.props.className}
        nextClassName="next-data"
        previousClassName="prev-data"
        {...this.props}
      />
    );
  }
}

export default Grid;
