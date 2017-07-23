import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default (props) => (
  <View style={ props.self ? styles.viewStyleSelf : styles.viewStyle }>
    <View style= { props.self ? styles.viewStyleSelf : styles.viewStyle }>
      <Text style={ styles.textStyle } numberOfLines={5}>
        {props.text}
      </Text>
    </View>
  </View>
);