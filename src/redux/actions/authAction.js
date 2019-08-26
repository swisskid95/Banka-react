import { SET_CURRENT_USER } from './actionTypes';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => {
  // remove token
  /* istanbul ignore next */
  localStorage.removeItem('user');
  /* istanbul ignore next */
  setCurrentUser({});
};
