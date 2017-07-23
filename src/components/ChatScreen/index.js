import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ChatItem from './ChatItem';
import styles from './styles';

const fakeData = [
  { self: false, text: 'text1 выа лоывлао ыдвлоа дфова джфылвоа джлыфвоа лрывлдао рыфвдлоар фывра длфыовра длыоврад '},
  { self: false, text: 'textext1 выа лоывлао ыдвлоа дфова джфылвt2'},
  { self: true, text: 'text3'},
  { self: false, text: 'tetext1 выа лоывлао ыдвлоа дфова джфылвxt4'},
  { self: true, text: 'text15'},
  { self: false, text: 'textext1 выа лоывлао ыдвлоа дфова джфылвt6'},
]

class ChatScreen extends Component {
  
  renderItem = ({ item }) => (
    <ChatItem
      self={item.self}
      text={item.text}
    />
  );

  render() {
    return (
      <View style={styles.viewStyle}>
        <FlatList
          style={styles.listStyle}
          data={fakeData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.text}
        />
      </View>
    );
  }
}

export default ChatScreen;