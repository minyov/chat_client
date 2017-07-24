import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import { sendMessage, recieveMessage } from '../../actions/chats';
import { connect } from 'react-redux';
import styles from './styles';

class ChatScreen extends Component {

  state = {
    data: [],
    self: true,
    companion: 'tarasov'
  }
  

  chatInputHandler = (event) => {
    // this.setState({
    //   data: [...this.state.data, { self: this.state.self, text: event.nativeEvent.text, name: 'Georgiy Tarasov' }],
    //   self: !this.state.self
    // });
    this.state.self ? this.props.dispatch(sendMessage(event.nativeEvent.text)) : this.props.dispatch(recieveMessage('Georgiy', event.nativeEvent.text));
    this.setState({
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
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.text + item.name + index}
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

function mapStateToProps(state) {
  return {
    data: state.chats
  };
};

export default connect(
  mapStateToProps
)(ChatScreen);