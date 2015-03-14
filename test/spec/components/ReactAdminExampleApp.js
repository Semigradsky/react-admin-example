'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactAdminExampleApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactAdminExampleApp = require('components/ReactAdminExampleApp.js');
    component = React.createElement(ReactAdminExampleApp);
  });

  it('should create a new instance of ReactAdminExampleApp', function () {
    expect(component).toBeDefined();
  });
});
