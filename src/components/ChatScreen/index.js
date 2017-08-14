import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, Platform } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import { sendMessage, recieveMessage, addChat } from '../../actions/chats';
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
    console.log('mount')
    api.onMessage((e) => {
      const message = JSON.parse(e.data);
      console.log(message);
      this.props.dispatch(recieveMessage(message.sender, message.text, message.date));
    })
  }

  chatInputHandler = (event) => {
    api.sendMessage(event.nativeEvent.text);
    this.props.dispatch(sendMessage(this.props.currentCompanion, this.props.userLogin, event.nativeEvent.text, new Date())) 
  }
  
  renderItem = ({ item }) => (
    <ChatItem
      name={ item.name }
      self={ this.props.userLogin === item.name }
      text={ item.text }
    />
  );

  getData = (props) => {
    const data = props.chats.find((chat) => chat.companion.name === this.props.currentCompanion.name);
    
    if (data != undefined) {
      return data.messages;
    } else {
      return [];
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={{ uri: this.props.chatWallpaper }} style={ styles.backgroundImage }>
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
    userLogin: state.user.login,
    currentCompanion: state.user.currentCompanion,
    chatWallpaper: state.user.chatWallpaper
  };
};

export default connect(
  mapStateToProps
)(ChatScreen);