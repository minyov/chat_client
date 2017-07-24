import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as api from './api';
import ChatScreen from './components/ChatScreen';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

if (__DEV__) {
  console.disableYellowBox = true;
}

export default App = () => (
  <Provider store={ configureStore() } >
      <ChatScreen />
  </Provider>
);