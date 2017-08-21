import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { auth } from '../../api';
import { setUser } from '../../actions/user';
import TextInputWithHeader from './TextInputWithHeader';
import styles from './styles';

class LoginPage extends Component {
  login = (login, password) => {
    auth(login, (user) => {
      if (user != null) {
        this.props.dispatch(setUser(user));
        
        this.props.navigation.navigate('ChatsList');
      } else {
        this.popupRef.show();
      }
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
              this.login(this.loginRef.getText(), this.passwordRef.getText())
            }}
          >
            <Text style={ styles.touchableTextStyle }>Sign In</Text>
          </TouchableHighlight>
        </View>

        <PopupDialog 
          dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
          ref={ (ref) => this.popupRef = ref}
          height={ 30 }
          width={ 200 }
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <Text>Invalid login or password</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }
}

export default connect()(LoginPage);