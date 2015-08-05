import Dispatcher from 'Dispatcher';
import UserConstants from 'constants/UserConstants';

const UserActions = {
  create(data, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE,
      data,
      callback
    });
  },

  update(id, data, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.UPDATE,
      id,
      data,
      callback
    });
  },

  remove(id, callback) {
    Dispatcher.dispatch({
      actionType: UserConstants.REMOVE,
      id,
      callback
    });
  }

};

export default UserActions;
