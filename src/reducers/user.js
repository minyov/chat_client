import * as types from '../types';

const initialState = {};


export const user = (state = initialState, action) => {
  if (action.type == types.SET_USER_CREDENTIALS) {
    return {
      ...state,
      id: action.credentials.id,
      name: action.credentials.name,
      email: action.credentials.email,
      photo: action.credentials.photo
    };
  }
  if (action.type == types.SET_CURRENT_COMPANION) {
    return {
      ...state,
      currentCompanion: action.currentCompanion
    };
  }

  return state;
};