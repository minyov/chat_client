import { View } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ChatScreen from '../components/ChatScreen';
import ChatsList from '../components/ChatsList';
import UserInfoScreen from '../components/UserInfoScreen';
import SettingsScreen from '../components/SettingsScreen';
import LoginPage from '../components/LoginPage';

const navigator = TabNavigator({
  MainScreen: {
    screen: ChatsList,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => 
        <Icon name='bubbles' size={26} color={ tintColor } backgroundColor={ tintColor }/>,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 0.5
      }
    }),
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings',
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => 
        <Icon name='settings' size={26} color={ tintColor } backgroundColor={ tintColor }/>,
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 0.5
      }
    },
  }
})

class Stack extends Component {
  render() {
    const Navigator = StackNavigator({
      LoginPage: {
        screen: LoginPage,
        navigationOptions: {
          header: null
        }
      },
      ChatsList: { 
        screen: navigator,
        navigationOptions: {
          title: 'Chats',
          headerLeft: null
        }
      },
      ChatScreen: { 
        screen: ChatScreen,
        navigationOptions: {
          headerStyle: {
            backgroundColor: 'white'
          }
        }
      },
      UserInfoScreen: {
        screen: UserInfoScreen,
        navigationOptions: {
          title: 'Info',
          headerStyle: {
            backgroundColor: 'white',
            borderBottomColor: '#E0E0E0',
            borderBottomWidth: 0.3
          }
        }
      }
    }, { initialRouteName: this.props.user.name != undefined ? 'ChatsList' : 'LoginPage' })

    return <Navigator />;
  }
}

export default connect()(Stack);

