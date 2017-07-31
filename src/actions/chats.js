import * as types from '../types';

export const sendMessage = (companion, name, text) => ({
  type: types.SEND_MESSAGE,
  companion: companion,
  name: name,
  text: text
});

export const recieveMessage = (companion, text) => ({
  type: types.RECIEVE_MESSAGE,
  companion: companion,
  name: companion.name,
  text: text
});

export const addChat = (companion) => ({
  type: types.ADD_CHAT,
  companion: companion
});