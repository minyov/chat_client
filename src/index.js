import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as api from './api';
import Navigator from './components/index';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

if (__DEV__) {
  console.disableYellowBox = true;
}

api.connect();


export default App = () => (
  <Provider store={ configureStore() } >
      <Navigator />
  </Provider>
);