import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  column: {
    textAlign: 'center'
  }
});

const ItemFooter = ({ stars, forks, reviews, rating }) => {
  const convertedCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).toString() + 'k'
    } else return count
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text fontWeight="bold">{convertedCount(stars)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.column}>
        <Text fontWeight="bold">{convertedCount(forks)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.column}>
        <Text fontWeight="bold">{reviews}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.column}>
        <Text fontWeight="bold">{rating}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  );
};

export default ItemFooter;