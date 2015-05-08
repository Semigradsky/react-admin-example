'use strict';

const React = require('react');
const { Link } = require('react-router');

const PageFooter = React.createClass({
  render() {
    return <footer className="page-footer">
      <span>Semigradsky, 2015</span>
      <span className="about"><Link to="about">About</Link></span>
    </footer>;
  }
});

module.exports = PageFooter;
