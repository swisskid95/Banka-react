import * as types from './actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

export const signUpUser = user => {
  return { type: types.SIGN_UP_USER, payload: user };
};

export const signUpUserError = error => {
  return { type: types.SIGN_UP_USER_ERROR, payload: error };
};

export const signUpUserRequest = (user, history) => {
  return async dispatch => {
    try {
      const response = await axios.post('auth/signup', user);
      if (response.status === 201) {
        const data = response.data.data;
        localStorage.setItem('user', JSON.stringify(data));
        toast.success('Sign up Successful');
        setTimeout(() => {
          /* istanbul ignore next */
          history.push('/summary');
        }, 3000);
        dispatch(signUpUser(data));
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
      dispatch(signUpUserError(message));
    }
  };
};
