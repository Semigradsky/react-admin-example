'use strict';

const React = require('react');
const { Link } = require('react-router');

const Sidebar = require('components/navbar/Sidebar');

const Navbar = React.createClass({
  render() {
    var header = this.props.auth ?
        <div className="navbar-header">
          Admin Panel
        </div> : '';

    var links = this.props.auth ? (
          <Link to="logout" className="fa fa-sign-out fa-lg">
            <span className="link-text">Log out</span>
          </Link>
        ) : (
          <Link to="login" className="fa fa-sign-in fa-lg">
            <span className="link-text">Log in</span>
          </Link>
        );

    return (
      <nav className="navbar">
        {header}
        <div className="navbar-links">
          {links}
        </div>
        {this.props.auth && <Sidebar />}
      </nav>
    );
  }
});

module.exports = Navbar;
