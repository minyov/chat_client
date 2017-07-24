import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import styles from './styles';

export default (props) => (
  <View>
    <TextInput 
      ref={ (ref) => this.inputRef = ref }
      style={ styles.textInputStyle }
      keyboardType='default'
      returnKeyType='send'
      onSubmitEditing={ (event) => {
        Keyboard.dismiss();
        this.inputRef.clear();
        props.chatInputHandler(event);
      }}
      placeholder='Input text...'
      placeholderTextColor='grey'
    />
  </View>
); 
