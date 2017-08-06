import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setCurrentCompanion } from '../../actions/user';
import { TabNavigator } from 'react-navigation';
import ChatScreen from '../ChatScreen';
import ChatListItem from './ChatListItem';

class ChatsList extends Component {
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
    chats: state.chats
  }
}

export default connect(
  mapStateToProps
)(ChatsList); 