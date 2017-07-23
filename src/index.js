import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as api from './api';
import ChatScreen from './components/ChatScreen';

api.connect();
api.onMessage((message) => {
  console.log(message.data);
});

export default App = () => (
  <View style={{ flex: 1 }}>
    <ChatScreen />
  </View>
);