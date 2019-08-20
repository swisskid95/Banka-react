import * as types from '../actions/actionTypes';

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT_DETAILS:
      return { ...state, newAccount: action.payload };
    default:
      return state;
  }
};

export default accountReducer;
