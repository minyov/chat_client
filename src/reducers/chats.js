import * as types from '../types';

export const chats = (state = [], action) => {
  if (action.type == types.RECIEVE_MESSAGE) {
    return [...state, { self: false, name: action.name, text: action.text }]
  }

  if (action.type == types.SEND_MESSAGE) {
    return [...state, { self: true, name: null, text: action.text }]
  }

  return state;
}