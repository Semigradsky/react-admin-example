'use strict';

const React = require('react');

const Sidebar = require('components/Sidebar');

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-header">
          Admin Panel
        </div>

        <div className="navbar-links">
        </div>

        <Sidebar />
      </nav>
    );
  }
});

module.exports = Navbar;
