'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var ReactAdminExampleApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = ReactAdminExampleApp;
