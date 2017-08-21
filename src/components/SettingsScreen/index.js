import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { logout } from '../../actions/user';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableHighlight 
          onPress={ () => this.props.dispatch(logout())}
        >
          <Text>Log Out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect()(SettingsScreen);