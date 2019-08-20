import * as types from './actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

export const addAccountDetails = user => {
  return { type: types.ADD_ACCOUNT_DETAILS, payload: user };
};

export const createAccountRequest = (token, data) => {
  return async dispatch => {
    try {
      const response = await axios.post('/accounts', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 201) {
        const data = response.data.data;
        const toastResponse = `A ${data.type} account with account number ${data.accountNumber} has been created`;
        toast.success(toastResponse);

        dispatch(addAccountDetails(data));
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
    }
  };
};
