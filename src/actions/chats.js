import * as types from '../types';

export const sendMessage = (companion, name, text, date) => ({
  type: types.SEND_MESSAGE,
  companion: companion,
  name: name,
  text: text,
  date: date
});

export const recieveMessage = (companion, text, date) => ({
  type: types.RECIEVE_MESSAGE,
  companion: companion,
  name: companion.name,
  text: text,
  date: date
});

export const addChat = (companion) => ({
  type: types.ADD_CHAT,
  companion: companion
});