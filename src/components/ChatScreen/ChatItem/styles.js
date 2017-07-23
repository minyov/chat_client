import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textStyle: {
    flex: 1,
    width: '65%',
    fontSize: 18,
    borderWidth: 1,
    padding: 3,
  },
  viewStyle: {
    justifyContent: 'center',
    padding: 3,
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