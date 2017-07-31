import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class AdditionalInfoPanel extends Component {
  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text style={ styles.infoNameStyle }>{ this.props.name }</Text>
        <Text style={ styles.infoTextStyle }>{ this.props.text }</Text>
      </View>
    );
  }
}

export default AdditionalInfoPanel; 