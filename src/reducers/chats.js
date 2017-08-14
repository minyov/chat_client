import * as types from '../types';

const initialState = [
  {
    companion: {
      name: 'server',
      email: 'test@test.ru',
      photo: '/Users/minyov/Documents/workspace/chat_client/src/img/img.jpg'
    },
    messages: []
  }
]

export const chat = (state, action) => {
  if (action.type == types.RECIEVE_MESSAGE || 
        action.type == types.SEND_MESSAGE) {
    if (action.companion.name === state.companion.name) {
      return {
        companion: action.companion,
        messages: [
          ...state.messages,
          { 
            name: action.name, 
            text: action.text,
            date: action.date
          }
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