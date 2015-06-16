'use strict';

import Dispatcher from 'Dispatcher';
import UserConstants from 'constants/UserConstants';

const UserActions = {
  create(data, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE,
      data: data,
      callback: callback
    });
  },

  update(id, data, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.UPDATE,
      id: id,
      data: data,
      callback: callback
    });
  },

  remove(id, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.REMOVE,
      id: id,
      callback: callback
    });
  }

};

export default UserActions;
