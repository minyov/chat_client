import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import styles from './styles';

class ChatScreen extends Component {

  state = {
    data: [],
    self: true
  }

  chatInputHandler = (event) => {
    this.setState({
      data: [...this.state.data, { self: this.state.self, text: event.nativeEvent.text, name: 'Georgiy Tarasov' }],
      self: !this.state.self
    });
  }
  
  renderItem = ({ item }) => (
    <ChatItem
      name={ item.name }
      self={ item.self }
      text={ item.text }
    />
  );

  render() {
    return (
      <View style={styles.viewStyle}>
        <KeyboardAvoidingView
          behavior='padding'
          style={{ flex: 1 }}
        >  
          <ReversedFlatList
            style={styles.listStyle}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.text}
          />
          <ChatTextInput 
            style={ styles.textInputStyle }
            chatInputHandler={ this.chatInputHandler }
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default ChatScreen;