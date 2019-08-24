import * as types from './actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

export const addAllAccounts = accounts => {
  return { type: types.ADD_ALL_ACCOUNTS, payload: accounts };
};

export const fetchAllAccountRequest = (token, emailAddress) => {
  return async dispatch => {
    try {
      const response = await axios.get(`users/${emailAddress}/accounts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        const data = response.data.data;
        dispatch(addAllAccounts(data));
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
    }
  };
};
