import { combineReducers } from 'redux';
import users from './authReducer';
import accounts from './accountReducer';

const rootReducer = combineReducers({
  users,
  accounts
});

export default rootReducer;
