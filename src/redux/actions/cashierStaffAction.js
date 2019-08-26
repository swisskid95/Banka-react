import * as types from './actionTypes';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

export const getCustomerDetails = user => {
  return { type: types.GET_USER_DETAILS, payload: user };
};

export const fetchAccountDetails = (token, accountNumber) => {
  return async dispatch => {
    try {
      const response = await axios.get(`/accounts/${accountNumber}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 200) {
        const data = response.data.data;

        dispatch(getCustomerDetails(data));
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

export const performDeposit = (token, accountNumber, depositData) => {
  return async () => {
    try {
      const response = await axios.post(
        `/accounts/${accountNumber}/credit`,
        depositData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.status === 201) {
        const data = response.data.data;
        const message = `Successfully credited account with ${data.amount}`;
        toast.success(message);
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
      /* istanbul ignore next */
      let message;
      /* istanbul ignore next */
      if (typeof error.response.data.error === 'object') {
        Object.values(error.response.data.error).join(', ');
      } else {
        /* istanbul ignore next */
        message = error.response.data.error;
      }
      /* istanbul ignore next */
      toast.error(message);
    }
  };
};
export const performWithdrawal = (token, accountNumber, depositData) => {
  return async () => {
    try {
      const response = await axios.post(
        `/accounts/${accountNumber}/debit`,
        depositData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.status === 201) {
        const data = response.data.data;
        const message = `Successfully debited account with ${data.amount}`;
        toast.success(message);
      }
    } catch (error) {
      /* istanbul ignore next */
      if (error.message === 'Network Error') {
        return toast.error('Something went wrong. Please try Again');
      }
      /* istanbul ignore next */
      let message;
      /* istanbul ignore next */
      if (typeof error.response.data.error === 'object') {
        Object.values(error.response.data.error).join(', ');
      } else {
        /* istanbul ignore next */
        message = error.response.data.error;
      }
      /* istanbul ignore next */
      toast.error(message);
    }
  };
};
