import React from 'react';
import { Link } from 'react-router';

import Sidebar from 'components/navbar/Sidebar';

import './navbar.css';

const Navbar = React.createClass({
  render() {
    const header = this.props.auth ?
        <div className="navbar-header">
          Admin Panel
        </div> : '';

    const links = this.props.auth ? (
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

export default Navbar;
