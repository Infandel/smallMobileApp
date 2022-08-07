import { Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  signInButton: {
    width:"90%",
    borderRadius:5,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor:"blue",
  }
});

const PrimaryButton = ({ text, onSubmit, customStyle }) => {
  return (
    <View style={customStyle ? customStyle : styles.signInButton}>
      <Pressable onPress={onSubmit}>
        <Text fontWeight="bold" fontSize="subheading" color="buttonPrimary">{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;