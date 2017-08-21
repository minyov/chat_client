import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import * as api from './api';
import Navigator from './components/index';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from './configureStore';

if (__DEV__) {
  console.disableYellowBox = true;
}

const store = configureStore();

class App extends Component {
  state = { 
    rehydrated: false
  }

  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true })
    });
  }

  render() {
    if (this.state.rehydrated) {
      return (
        <Provider store={ store } >
          <Navigator />
        </Provider>
      );
    } else {
      console.log("hhh")
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}

export default App;