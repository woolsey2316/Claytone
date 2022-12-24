/**
 * Create Review Mutation
 *
 */

import { gql } from '@apollo/client';

const CREATE_REVIEW = gql(/* GraphQL */ `
  mutation createReview($ReviewInput: ReviewInput) {
    createReview(ReviewInput: $ReviewInput) {
      token
      ReviewId
    }
  }
`);

export default CREATE_REVIEW;