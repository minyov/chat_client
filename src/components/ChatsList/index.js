import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setCurrentCompanion } from '../../actions/user';
import * as api from '../../api';
import { setUser } from '../../actions/user';
import { setChats, recieveMessage } from '../../actions/chats';
import { TabNavigator } from 'react-navigation';
import ChatScreen from '../ChatScreen';
import ChatListItem from './ChatListItem';

class ChatsList extends Component {
  componentWillMount() {
    api.getFriendsOfUser(this.props.user.name, (friends) => {
      this.props.dispatch(setChats(friends));    
      
      api.connect(this.props.user.name);

      api.onMessage((e) => {
        const message = JSON.parse(e.data);
  
        this.props.dispatch(recieveMessage(message.sender, message.text, message.date));
      })
    });
  }

  onChatListItemPress = (companion) => {
    this.props.dispatch(setCurrentCompanion(companion));
    this.props.navigation.navigate('ChatScreen', { companion: companion })
  };

  renderItem = ({ item }) => (
    <ChatListItem 
      companion={ item.companion } 
      lastMessage={ item.messages.length != 0 && item.messages[item.messages.length - 1].text } 
      onPress={() => this.onChatListItemPress(item.companion)}
    />
  );

  render() {
    return (
      <FlatList
        data={ this.props.chats }
        renderItem={ this.renderItem }
        keyExtractor={ (item, index) => item.companion.name }
        style={{ backgroundColor: 'white' }}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(ChatsList); 