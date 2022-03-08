import { View, Image, StyleSheet, Button } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  language: {
    paddingVertical: 10,
    flexDirection: 'row',
  }
});

const ItemHeader = ({ avatar, fullName, description, language}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.tinyLogo}
          source={{uri: avatar}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <View style={styles.language}>
          <Button
            title={language}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemHeader;