import { View, StyleSheet, Pressable } from 'react-native';
import ItemHeader from './Item/ItemHeader';
import ItemFooter from './Item/ItemFooter';
import PrimaryButton from './PrimaryButton';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
  },

  goGithubButton: {
    width:"100%",
    borderRadius:5,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor:"blue",
  }
});

const onSubmit = (url) => {
  Linking.openURL(`${url}`);
}

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.item}>
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
      {item.url &&
        <PrimaryButton text={'Open In GitHub'} onSubmit={() => onSubmit(item.url)} customStyle={styles.goGithubButton} />
      }
    </View>
  );

};

export default RepositoryItem;