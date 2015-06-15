'use strict';

import faker from 'faker';

import request from 'utils/request';

const users = {
  getAll(fn) {
    request('get', 'users', (err, res) => fn(err ? [] : res.body));
  },
  get(id, fn) {
    request('get', 'users/' + id, (err, res) => fn(err ? [] : res.body));
  },
  save(id, data, fn) {
    if (id) {
      request('put', 'users/' + id, data, (err, res) => fn(err, res.body));
    } else {
      data.id = faker.random.uuid();
      request('post', 'users/', data, (err, res) => fn(err, res.body));
    }
  },
  remove(id, fn) {
    request('delete', 'users/' + id, (err, res) => fn(err, res.body));
  }
};

export default users;
