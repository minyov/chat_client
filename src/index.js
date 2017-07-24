import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as api from './api';
import ChatScreen from './components/ChatScreen';

if (__DEV__) {
  console.disableYellowBox = true;
}

export default App = () => (
  <View style={{ flex: 1 }}>
    <ChatScreen />
  </View>
);