import * as types from '../types';

export const sendMessage = (text) => ({
  type: types.SEND_MESSAGE,
  text: text
});

export const recieveMessage = (name, text) => ({
  type: types.RECIEVE_MESSAGE,
  name: name,
  text: text
});