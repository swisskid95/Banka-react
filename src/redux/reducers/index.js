import { combineReducers } from 'redux';
import users from './authReducer';
import accounts from './accountReducer';
import customerDetails from './customerDetailsReducer';

const rootReducer = combineReducers({
  users,
  accounts,
  customerDetails
});

export default rootReducer;
