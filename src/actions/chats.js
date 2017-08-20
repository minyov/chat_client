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

export const setChats = (friends) => ({
  type: types.SET_CHATS,
  friends: friends
});

export const setChatMessages = (companion, messages) => ({
  type: types.SET_CHAT_MESSAGES,
  messages: messages,
  companion: companion  
});