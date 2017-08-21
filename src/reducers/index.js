import { combineReducers } from 'redux';
import { chats } from './chats';
import { user } from './user';
import * as types from '../types';

const appReducer = combineReducers({
  chats,
  user
});

export default rootReducer = (state, action) => {
  if (action.type == types.USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action);
}
