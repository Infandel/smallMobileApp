import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

const AppBar = ({ text, link }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link to={link}>
          <Text fontWeight="bold" fontSize="subheading" color="buttonPrimary">
            {text}
          </Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBar;