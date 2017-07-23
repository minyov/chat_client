import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  listStyle: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column-reverse'
  },
  viewStyle: {
    flex: 1,
    width: Dimensions.get('screen').width,
  }
})