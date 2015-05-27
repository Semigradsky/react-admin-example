'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./footer.css');

class PageFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <span>Semigradsky, 2015</span>
        <span className="about"><Link to="about">About</Link></span>
      </footer>
    );
  }
}

export default PageFooter;
