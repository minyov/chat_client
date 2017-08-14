import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  innerViewStyle: {
    flex: 1,
    maxWidth: '90%',
    borderWidth: 0.3,
    borderRadius: 15,
    paddingTop: 4,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  viewStyle: {
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'transparent'
  },
  textStyle: {
    fontSize: 18
  },
  innerViewStyleSelf: {
    backgroundColor: '#DEFFDE',
    borderColor: '#6FDA6F'
  },
  innerViewStyleNotSelf: {
    backgroundColor: 'white',
    borderColor: '#66B2FF'
  },
  viewStyleSelf: {
    alignItems: 'flex-end'
  },
  viewStyleNotSelf: {
    alignItems: 'flex-start'
  },
  companionNameStyle: {
    flex: 1,
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 2,
    color: '#66B2FF'
  }
});