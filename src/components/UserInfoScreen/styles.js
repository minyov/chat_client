import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  imageViewStyle: {
    flex: 0.17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerImageViewStyle: {
    flex: 0.2,
    padding: 20,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  nameTextStyle: {
    flex: 0.8,
    fontSize: 20,
    fontWeight: '600'
  },
  infoViewStyle: {
    flex: 0.83,
    paddingLeft: 35
  }
})