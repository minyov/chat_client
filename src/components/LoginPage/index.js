import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../../api';
import { setUser } from '../../actions/user';
import TextInputWithHeader from './TextInputWithHeader';
import styles from './styles';

class LoginPage extends Component {
  login = (login, password) => {
    auth(login, (user) => {
      this.props.dispatch(setUser(user));
      
      this.props.navigation.navigate('ChatsList');
    });
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <View style={ styles.innerViewStyle }>  
          <TextInputWithHeader 
            ref={ (ref) => this.loginRef = ref}
            text='Login' 
            style={ styles.textInputStyle }
          />
          <TextInputWithHeader 
            ref={ (ref) => this.passwordRef = ref}
            text='Password' 
            style={ styles.textInputStyle }
          />
          <TouchableHighlight 
            style={ styles.touchableStyle }
            onPress={ () => {
              console.log("press")
              this.login(this.loginRef.getText(), this.passwordRef.getText())
            }}
          >
            <Text style={ styles.touchableTextStyle }>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default connect()(LoginPage);