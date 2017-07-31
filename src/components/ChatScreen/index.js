import React, { Component } from 'react';
import { Text, Image, View, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
import ChatItem from './ChatItem';
import ChatTextInput from './ChatTextInput';
import { sendMessage, recieveMessage, addChat } from '../../actions/chats';
import { connect } from 'react-redux';
import styles from './styles';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (`${navigation.state.params.companion.name}`),
    headerStyle: {
      backgroundColor: 'white'
    },
    cardStyle: {
      style: {
        backgroundColor: 'white'
      }
    },
    headerRight: (
      <TouchableHighlight
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

    console.log(data);
    if (data != undefined) {
      return data.messages;
    } else {
      return [];
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <KeyboardAvoidingView
          behavior='padding'
          style={{ flex: 1 }}
        >  
          <Image source={ require('../../img/wall2.jpg') } style={ styles.backgroundImage }>
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
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chats,
    userLogin: state.user.login,
    currentCompanion: state.user.currentCompanion
  };
};

export default connect(
  mapStateToProps
)(ChatScreen);