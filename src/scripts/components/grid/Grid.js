import React from 'react';
import Griddle from 'griddle-react';

import './grid.css';

const Grid = React.createClass({
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
});

export default Grid;
