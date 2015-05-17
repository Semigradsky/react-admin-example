'use strict';

import request from 'superagent';

const serverUrl = 'http://localhost:3000';

const users = {
  getAll(fn) {
    request.get(serverUrl + '/users').end((err, res) => {
      fn(err ? [] : res.body);
    });
  }
};

export default users;
