import styles from './styles';

export default (props) => (
  <View style={ [styles.viewStyle, props.self ? styles.viewStyleSelf : styles.viewStyleNotSelf] }>
    <View style={ [styles.innerViewStyle, props.self ? styles.innerViewStyleSelf : styles.innerViewStyleNotSelf] }>
      {
        !props.self && <Text style={ styles.companionNameStyle }>{ props.name }</Text>
      }
      <Text style={ styles.textStyle }>
        { props.text }
      </Text>
    </View>
  </View>
);