import { EventEmitter } from 'events';
import faker from 'faker';
import assign from 'react/lib/Object.assign';

import request from 'utils/request';
import Dispatcher from 'utils/Dispatcher';
import UserConstants from 'components/users/Constants';

const CHANGE_EVENT = 'change';

const create = (data, fn) => {
  data.id = faker.random.uuid();
  request('post', 'users/', data, (err, res) => fn(err, res.body));
};

const update = (id, data, fn) => {
  request('put', 'users/' + id, data, (err, res) => fn(err, res.body));
};

const remove = (id, fn) => {
  request('delete', 'users/' + id, (err, res) => fn(err, res.body));
};

const UserStore = assign({}, EventEmitter.prototype, {
  getAll(fn) {
    request('get', 'users', (err, res) => fn(err ? [] : res.body));
  },

  get(id, fn) {
    request('get', 'users/' + id, (err, res) => fn(err ? [] : res.body));
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register((action) => {
  switch (action.actionType) {
    case UserConstants.CREATE:
      create(action.data, (err, data) => {
        action.callback && action.callback(err, data);
        !err && UserStore.emitChange();
      });
      break;

    case UserConstants.UPDATE:
      update(action.id, action.data, (err, data) => {
        action.callback && action.callback(err, data);
        !err && UserStore.emitChange();
      });
      break;

    case UserConstants.REMOVE:
      remove(action.id, (err, data) => {
        action.callback && action.callback(err, data);
        !err && UserStore.emitChange();
      });
      break;

    default:
      // do nothing
  }
});

export default UserStore;
