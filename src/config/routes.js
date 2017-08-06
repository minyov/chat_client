import { View } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ChatScreen from '../components/ChatScreen';
import ChatsList from '../components/ChatsList';
import UserInfoScreen from '../components/UserInfoScreen';
import SettingsScreen from '../components/SettingsScreen';

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

export const stack = StackNavigator({
  ChatsList: { 
    screen: navigator,
    navigationOptions: {
      title: 'Chats'
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
});

