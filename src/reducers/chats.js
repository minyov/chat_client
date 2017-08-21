import * as types from '../types';

const initialState = []

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

export const message = (message, action) => {
  return { 
    name: message.sender.name, 
    text: message.text,
    date: message.date
  };
}

export const chats = (state = initialState, action) => {
  if (action.type == types.RECIEVE_MESSAGE || 
        action.type == types.SEND_MESSAGE) {
    return state.map((state) => {
      return chat(state, action);
    })
  }

  if (action.type == types.SET_CHAT_MESSAGES) {
    return state.map((state) => {
      if (state.companion.name == action.companion.name) {
        return {
          ...state,
          messages: action.messages.map((mes) => {
            return message(mes, action); 
          })
        }
      }
      
      return state;
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

  if (action.type == types.SET_CHATS) {    
    return action.friends.map((friend) => {
      if (state.chats != undefined) {
        return {
          companion: friend,
          messages: [
            ...state.chats.find((elem) => {
              return elem.companion.name == friend.name;
            }).messages
          ]
        }
      } else {
        return {
          companion: friend,
          messages: []
        }
      }
    });
  }

  return state;
}