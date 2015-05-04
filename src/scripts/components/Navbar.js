'use strict';

var React = require('React');

var Navbar = React.createClass({
  render: function () {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-header">
          Admin Panel
        </div>

        <div className="navbar-links">
        </div>

        <div className="sidebar" role="navigation">
          <ul className="nav side-menu">
            <li className="side-menu-item">
              <a href="/#/Dashboard" className="active">Dashboard</a>
            </li>
            <li className="side-menu-item">
              <a href="/#/Users">Users</a>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
});

module.exports = Navbar;
