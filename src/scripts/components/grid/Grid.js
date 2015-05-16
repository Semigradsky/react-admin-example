'use strict';

import React from 'react';
import Griddle from 'griddle-react';

class Grid extends React.Component {
  render() {
    return <Griddle

      useGriddleStyles={false}
      tableClassName={'table ' + this.props.className}
      nextClassName="next-data"
      previousClassName="prev-data"

      {...this.props}
    />
  }
}

export default Grid;
