import { graphql } from '../../../src/__generated__';

export const blogDetailsBySlug = graphql(/* GraphQL */`
  query BLOG_BY_SLUG ($slug: String!) {
    blogPost(slug: $slug) {
      author {
        username
      }
      title
      author
      nLikes
      nComments
      imageUrl
      createdAt
      updatedAt
      slug
      excerpt
      featuredPost
      content
    }
  }
`);
