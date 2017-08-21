import * as types from '../types';

export const setUser = (credentials) => ({
  type: types.SET_USER_CREDENTIALS,
  credentials: credentials
});

export const setCurrentCompanion = (currentCompanion) => ({
  type: types.SET_CURRENT_COMPANION,
  currentCompanion: currentCompanion
});

export const logout = () => ({
  type: types.USER_LOGOUT
});
