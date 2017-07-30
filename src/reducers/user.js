import * as types from '../types';

const initialState = {
  login: 'minyov',
  currentCompanion: null
};


export const user = (state = initialState, action) => {
  if (action.type == types.SET_USER_CREDENTIALS) {
    return {
      ...state,
      login: action.login
    };
  }
  if (action.type == types.SET_CURRENT_COMPANION) {
    return {
      ...state,
      currentCompanion: action.currentCompanion
    };
  }

  return state;
}