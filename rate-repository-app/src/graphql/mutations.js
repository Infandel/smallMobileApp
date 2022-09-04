import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(
      credentials: {
        username: $username,
        password: $password
      }
    ) {
      accessToken
    }
  }
`;

export const CREATEREVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`