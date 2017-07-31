import * as types from '../types';

const initialState = [
  {
    companion: {
      name: 'Georgiy',
      email: 'test@test.ru',
      photo: require('../img/img.jpg')
    },
    messages: []
  },
  {
    companion: {
      name: 'Timmy',
      email: 'test@test.ru',
      photo: require('../img/img.jpg')
    },
    messages: []
  }
]

export const chat = (state, action) => {
  if (action.type == types.RECIEVE_MESSAGE || 
        action.type == types.SEND_MESSAGE) {
    if (action.companion === state.companion) {
      return {
        companion: action.companion,
        messages: [
          ...state.messages,
          { name: action.name, text: action.text }
        ]
      };
    }
  }

  return state;
}

export const chats = (state = initialState, action) => {
  if (action.type == types.RECIEVE_MESSAGE || 
        action.type == types.SEND_MESSAGE) {
    return state.map((state) => {
      return chat(state, action);
    })
  }

  if (action.type == types.ADD_CHAT) {
    return [
      ...state,
      {
        companion: action.companion,
        messages: []
      }
    ];
  }

  return state;
}