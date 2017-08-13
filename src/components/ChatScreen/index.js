import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, Platform } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import { sendMessage, recieveMessage, addChat } from '../../actions/chats';
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
          source={(`${navigation.state.params.companion.photo}`)} 
          style={{ width: 36, height: 36, borderRadius: 18, margin: 5}}
        />
      </TouchableHighlight>
    )
  });




  ///////////////////
  state = {
    self: true //REMOVE WHEN BACKEND WILL BE READY
  };

  chatInputHandler = (event) => {
    this.state.self ? this.props.dispatch(sendMessage(this.props.currentCompanion, this.props.userLogin, event.nativeEvent.text)) 
                    : this.props.dispatch(recieveMessage(this.props.currentCompanion, event.nativeEvent.text));
    this.setState({
      self: !this.state.self
    });
  }
  ////////////////////
  
  renderItem = ({ item }) => (
    <ChatItem
      name={ item.name }
      self={ this.props.userLogin === item.name }
      text={ item.text }
    />
  );

  getData = (props) => {
    const data = props.chats.find((chat) => chat.companion === this.props.currentCompanion);

    if (data != undefined) {
      return data.messages;
    } else {
      return [];
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={ this.props.chatWallpaper } style={ styles.backgroundImage }>
          <ReversedFlatList
            style={styles.listStyle}
            data={this.getData(this.props)}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.text + item.name + index}
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