import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AdditionalInfoPanel from './AdditionalInfoPanel';
import styles from './styles';

class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'Info',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 0.3
    }
  }
  render() {
    const { companion } = this.props.navigation.state.params;
    return (
      <View style={ styles.viewStyle }>
        <View style={ styles.imageViewStyle }>  
          <View style={ styles.innerImageViewStyle }>
            <Image 
              style={ styles.imageStyle }
              source={ companion.photo }
            />
          </View>
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