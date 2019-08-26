import * as types from '../actions/actionTypes';

const userAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER_DETAILS:
      return {
        ...state,
        accountDetails: action.payload
      };
    default:
      return state;
  }
};

export default userAccountReducer;
