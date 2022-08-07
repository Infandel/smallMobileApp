import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate, useParams } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const onPressHandler = (repositoryId, navigate) => {
  navigate(`repository/${repositoryId}`, { replace: true });
};

export const RepositoryListContainer = ({ repositories, navigate }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPressHandler(item.id, navigate)}>
            <RepositoryItem
              item={item}
            />
          </Pressable>
        )}
      />
    );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  return <RepositoryListContainer repositories={repositories} navigate={navigate} />;
};

export default RepositoryList;