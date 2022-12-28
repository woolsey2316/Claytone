/**
 * Create Review Mutation
 *
 */

import { graphql } from '../../../src/__generated__';

const CREATE_REVIEW = graphql(/* GraphQL */ `
  mutation createReview($reviewInput: InputReview) {
    createReview(reviewInput: $reviewInput) {
      token
    }
  }
`);

export default CREATE_REVIEW;