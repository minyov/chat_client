import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class ChatListItem extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor='#D2D2D2'
        onPress={ this.props.onPress }>  
        <View style={ styles.viewStyle }>
          <View style={ styles.imageViewStyle } >
            <Image style={ styles.imageStyle } source={{ uri: this.props.companion.photo }} />
          </View>
          <View style={ styles.innerViewStyle }>
            <Text style={ styles.textStyle }>{ this.props.companion.name }</Text>
            <Text style={ styles.messageTextStyle } numberOfLines={2}>{ this.props.lastMessage }</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default connect()(ChatListItem);