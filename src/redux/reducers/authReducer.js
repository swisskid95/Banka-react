import * as types from '../actions/actionTypes';
import { isObjEmpty } from '../../utils/validation';

const authReducers = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, user: action.payload };
    case types.LOGIN_USER_ERROR:
      return { ...state, user: action.payload };
    case types.SIGN_UP_USER:
      return { ...state, user: action.payload };
    case types.SIGN_UP_USER_ERROR:
      return { ...state, user: action.payload };
    case types.SET_CURRENT_USER:
      /* istanbul ignore next */
      return {
        ...state,
        isAuthenticated: !isObjEmpty(action.payload),
        userAuthDetails: action.payload
      };
    default:
      return state;
  }
};

export default authReducers;
