import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import { format } from 'date-fns'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    marginBottom: 10,
  },
  reviewContainer: {
    backgroundColor: theme.colors.buttonPrimary,
    flexDirection: 'row',
  },
  ratingContainer: {
    margin: 20,
    marginRight: 15,
    marginTop: 10,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: theme.colors.textAlternative,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    paddingRight: 10,
    flexShrink: 1,
    paddingVertical: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem item={repository} />
  )
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text fontWeight="bold" color="textAlternative">
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold" fontSize= 'subheading'>
          {review.user.username}
        </Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>
        <Text>
          {review.text}
        </Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  const { repositoryId } = useParams();

  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {repositoryId}
  });
  if (loading) return null;

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <RepositoryInfo repository={data.repository} />
        </View>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;