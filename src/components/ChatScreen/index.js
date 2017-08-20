import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, Platform } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import dateFormat from 'dateformat';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import { sendMessage, recieveMessage, setChatMessages } from '../../actions/chats';
import * as api from '../../api';
import { connect } from 'react-redux';
import styles from './styles';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (`${navigation.state.params.companion.name}`),
    headerRight: (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={() => navigation.navigate('UserInfoScreen', { companion: navigation.state.params.companion })}>  
        <Image 
          source={{ uri: `${navigation.state.params.companion.photo}` }} 
          style={{ width: 36, height: 36, borderRadius: 18, margin: 5}}
        />
      </TouchableHighlight>
    )
  });

  componentWillMount() {
    api.getChatMessages(this.props.user.name, this.props.user.currentCompanion.name, (messages) => {
      console.log(messages);
      this.props.dispatch(setChatMessages(this.props.user.currentCompanion, messages));
    })
  }

  chatInputHandler = (event) => {
    api.sendMessage(JSON.stringify({
      sender: this.props.user,
      receiver: this.props.user.currentCompanion,
      text: event.nativeEvent.text,
      date: dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss:l")
    }));

    this.props.dispatch(sendMessage(this.props.user.currentCompanion, this.props.user.name, event.nativeEvent.text, new Date())) 
  }
  
  renderItem = ({ item }) => (
    <ChatItem
      name={ item.name }
      self={ this.props.user.name === item.name }
      text={ item.text }
    />
  );

  getData = (props) => {
    const data = props.chats.find((chat) => chat.companion.name === this.props.user.currentCompanion.name);
    
    if (data != undefined) {
      return data.messages;
    } else {
      return [];
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={{ uri: this.props.user.chatWallpaper }} style={ styles.backgroundImage }>
          <ReversedFlatList
            style={styles.listStyle}
            data={this.getData(this.props)}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.text + item.name + item.date }
          />
          <ChatTextInput 
            style={ styles.textInputStyle }
            chatInputHandler={ this.chatInputHandler }
          />
        </Image>

        {
          Platform.OS === 'ios' && <KeyboardSpacer />
        }
        
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    user: state.user
  };
};

export default connect(
  mapStateToProps
)(ChatScreen);