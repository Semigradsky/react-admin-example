'use strict';

import request from 'utils/request';

const users = {
  getAll(fn) {
    request('get', 'users', (err, res) => {
      fn(err ? [] : res.body);
    });
  }
};

export default users;
