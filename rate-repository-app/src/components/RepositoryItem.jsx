import { View, StyleSheet } from 'react-native';
import ItemHeader from './Item/ItemHeader';
import ItemFooter from './Item/ItemFooter';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15
  },
});



const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ItemHeader
        avatar={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <ItemFooter
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;