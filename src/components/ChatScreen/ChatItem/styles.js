import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textStyle: {
    flex: 1,
    maxWidth: '90%',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  viewStyle: {
    justifyContent: 'center',
    padding: 5,
  },
  textStyleSelf: {
    textAlign: 'right',
    paddingRight: 10
  },
  textStyleNotSelf: {
    textAlign: 'left',
    paddingLeft: 10
  },
  viewStyleSelf: {
    alignItems: 'flex-end'
  },
  viewStyleNotSelf: {
    alignItems: 'flex-start'
  }
})