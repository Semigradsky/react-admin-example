import auth from 'services/auth';
import Login from 'components/auth/Login';

const Authentication = {
  statics: {
    willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/login');
      }
    }
  }
};

export default Authentication;
