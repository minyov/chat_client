import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import ChatsList from './ChatsList';

export default StackNavigator({
  ChatsList: { 
    screen: ChatsList,
    navigationOptions: {
      title: 'Chats'
    }
  },
  ChatScreen: { 
    screen: ChatScreen
  }
});