import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default (props) => (
  <View style={ [styles.viewStyle, props.self ? styles.viewStyleSelf : styles.viewStyleNotSelf] }>
      <Text style={ [styles.textStyle, props.self ? styles.textStyleSelf : styles.textStyleNotSelf] } >
        {props.text}
      </Text>
  </View>
);