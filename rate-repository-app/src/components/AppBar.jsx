import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    paddingLeft: 5,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const tabs = {
    repos: {
      name: 'Repositories',
      link: '/'
    },
    signIn: {
      name: 'Sign in',
      link: '/signIn'
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={tabs.repos.name} link={tabs.repos.link}/>
        <AppBarTab text={tabs.signIn.name} link={tabs.signIn.link}/>
      </ScrollView>
    </View>
  )
};

export default AppBar;