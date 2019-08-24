import * as types from './actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';
import { setCurrentUser } from './authAction';

export const logInUser = user => {
  return { type: types.LOGIN_USER, payload: user };
};

export const logInUserError = error => {
  return { type: types.LOGIN_USER_ERROR, payload: error };
};

export const loginUserRequest = (user, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('auth/signin', user);
      if (response.status === 201) {
        const data = response.data.data;
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Log In Successful');
        dispatch(setCurrentUser(data));
        setTimeout(() => {
          /* istanbul ignore next */
          history.push('/summary');
        }, 3000);
        dispatch(logInUser(data));
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
      /* istanbul ignore next */
      const message = error.response.data.error;
      /* istanbul ignore next */
      toast.error(message);
      /* istanbul ignore next */
      dispatch(logInUserError(message));
    }
  };
};
