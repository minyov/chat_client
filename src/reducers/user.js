import * as types from '../types';

const initialState = {
  id: null,
  name: 'minyov',
  email: 'test@',
  photo: 'nophoto',
  currentCompanion: null,
  chatWallpaper: 'https://s-media-cache-ak0.pinimg.com/originals/51/ed/c0/51edc046eb80046ee4755ee71d0f19ca.jpg'
};


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