import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

class TextInputWithHeader extends Component {

  state = {
    text: ''
  }

  getText = () => {
    return this.state.text;
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text 
          style={ styles.textStyle }>{ this.props.text }
        </Text>
        <TextInput 
          onChange={ (e) => this.setState({ text: e.nativeEvent.text })}
          style={ styles.textInputStyle }
        />
      </View>
    );
  }
}

export default TextInputWithHeader;