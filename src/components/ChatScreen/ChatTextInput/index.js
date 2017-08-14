import { Keyboard } from 'react-native';
import styles from './styles';

export default (props) => (
  <View style={ styles.viewStyle }>
    <TextInput 
      ref={ (ref) => this.inputRef = ref }
      style={ styles.textInputStyle }
      keyboardType='default'
      returnKeyType='send'
      onSubmitEditing={ (event) => {
        Keyboard.dismiss();
        this.inputRef.clear();
        props.chatInputHandler(event);
      }}
      placeholder='Message'
      placeholderTextColor='#F0F0F0'
      underlineColorAndroid='transparent'
    />
  </View>
); 
