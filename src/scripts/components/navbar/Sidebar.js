'use strict';

const React = require('react');
const { Link } = require('react-router');

const Sidebar = React.createClass({
  render() {
    return (
      <div className="sidebar" role="navigation">
        <ul className="nav side-menu">
          <li className="side-menu-item">
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li className="side-menu-item">
            <Link to="users">Users</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
