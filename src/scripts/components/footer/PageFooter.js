import React from 'react';
import { Link } from 'react-router';

import './footer.css';

const PageFooter = React.createClass({
  render() {
    return (
      <footer className="page-footer">
        <span>Semigradsky, 2015</span>
        <span className="about"><Link to="about">About</Link></span>
      </footer>
    );
  }
});

export default PageFooter;
