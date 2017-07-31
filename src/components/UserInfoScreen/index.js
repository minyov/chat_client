import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AdditionalInfoPanel from './AdditionalInfoPanel';
import styles from './styles';

class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'Info',
    headerStyle: {
      backgroundColor: 'white'
    }
  }
  render() {
    const { companion } = this.props.navigation.state.params;
    return (
      <View style={ styles.viewStyle }>
        <View style={ styles.imageViewStyle }>  
          <Image 
            style={ styles.imageStyle }
            source={ companion.photo }
          />
          <Text style={ styles.nameTextStyle }>{ companion.name }</Text>
        </View>
        <View style={ styles.infoViewStyle }>
          <AdditionalInfoPanel 
            name='email'
            text={ companion.email }
          />
          <AdditionalInfoPanel 
            name='username'
            text={ '@' + companion.name }
          />
        </View>
      </View>
    );
  }
}

export default UserInfoScreen;  