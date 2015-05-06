'use strict';

const React = require('react');
const Griddle = require('griddle-react');

const Grid = React.createClass({
  render() {
    return <Griddle
      results={this.props.data}
      columns={this.props.columns}
      columnMetadata={this.props.columnMetadata}
      resultsPerPage={this.props.resultsPerPage}
      initialSort={this.props.initialSort}
      initialSortAscending={this.props.initialSortAscending}

      useGriddleStyles={false}
      tableClassName={'table ' + this.props.className}
      nextClassName="next-data"
      previousClassName="prev-data"
    />
  }
});

module.exports = Grid;
