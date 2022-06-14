import { useState, useEffect } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    paddingLeft: 10,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });

  const tabs = {
    repos: {
      name: 'Repositories',
      link: '/'
    },
    signIn: {
      name: 'Sign in',
      link: '/signIn'
    },
    signOut: {
      name: 'Sign out'
    }
  }

  useEffect(() => {
    if (data?.me && data?.me.username) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [data?.me])

  const logOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={tabs.repos.name} link={tabs.repos.link}/>
        {!loggedIn && <AppBarTab text={tabs.signIn.name} link={tabs.signIn.link}/>}
        {loggedIn &&
          <Pressable onPress={() => logOut()}>
            <Text fontWeight="bold" fontSize="subheading" color="buttonPrimary">
              {tabs.signOut.name}
            </Text>
          </Pressable>
        }
      </ScrollView>
    </View>
  )
};

export default AppBar;