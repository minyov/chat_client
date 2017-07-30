import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: 70,
    borderWidth: 1,
    flexDirection: 'row'
  },
  innerViewStyle: {
    flex: 0.83,
    padding: 5
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