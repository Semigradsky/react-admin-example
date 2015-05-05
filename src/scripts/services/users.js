'use strict';

const request = require('superagent');

const serverUrl = 'http://localhost:3000';

const users = {
  getAll(fn) {
    request.get(serverUrl + '/users').end((err, res) => {
      fn(res.body);
    });
  }
};

module.exports = users;
