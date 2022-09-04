import { useMutation } from '@apollo/client';
import { CREATEREVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW, {
    onError: (error) => {
      throw Error(`${error}`)
    }
  });

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const review = {
      ownerName,
      repositoryName,
      rating: parseInt(rating),
      text
    }
    const { data } = await mutate({ variables: { review } });

    return data;
  };

  return [createReview, result];
};

export default useCreateReview