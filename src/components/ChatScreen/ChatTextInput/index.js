import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';

export default (props) => (
  <View>
    <TextInput 
      ref={ (ref) => this.inputRef = ref }
      style={{ borderWidth: 1 }}
      keyboardType='default'
      returnKeyType='send'
      onEndEditing={ props.chatInputHandler }
      onSubmitEditing={ (event) => {
        Keyboard.dismiss();
        this.inputRef.clear();
      }}
    />
  </View>
); 
