'use strict';

import request from 'utils/request';

const users = {
  getAll(fn) {
    request('get', 'users', (err, res) => {
      fn(err ? [] : res.body);
    });
  },
  get(id, fn) {
    request('get', 'users/' + id, (err, res) => {
      fn(err ? [] : res.body);
    });
  }
};

export default users;
