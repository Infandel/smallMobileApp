import { useApolloClient, useMutation } from '@apollo/client';
import { SIGNIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.error(error?.networkError?.result?.errors[0].message, error)
    }
  });

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { username, password } });
    if (data) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    }
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn