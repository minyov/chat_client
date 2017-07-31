import { View } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ChatScreen from '../components/ChatScreen';
import ChatsList from '../components/ChatsList';
import UserInfoScreen from '../components/UserInfoScreen';
import SettingsScreen from '../components/SettingsScreen';

const stack = StackNavigator({
  ChatsList: { 
    screen: ChatsList,
    navigationOptions: {
      title: 'Chats'
    }
  },
  ChatScreen: { 
    screen: ChatScreen
  },
  UserInfoScreen: {
    screen: UserInfoScreen
  }
});

export const navigator = TabNavigator({
  MainScreen: {
    screen: stack,
    navigationOptions: {
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => 
        <Icon name='bubbles' size={26} color={ tintColor } backgroundColor={ tintColor }/>
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => 
        <Icon name='settings' size={26} color={ tintColor } backgroundColor={ tintColor }/>
    }
  }
})