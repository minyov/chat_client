import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: 70,
    flexDirection: 'row'
  },
  innerViewStyle: {
    flex: 0.83,
    padding: 5,
    borderBottomWidth: 0.5,
    // borderStyle: 0.65
    borderColor: '#E0E0E0',
  },
  textStyle: {
    fontWeight: '600',
    marginBottom: 2
  },
  messageTextStyle: {
    opacity: 0.65
  },
  imageViewStyle: {
    flex: 0.17,
    padding: 5
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 30
  }
});