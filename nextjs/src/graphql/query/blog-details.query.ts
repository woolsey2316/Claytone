import { graphql } from '../../../src/__generated__';

export const blogDetailsBySlug = graphql(/* GraphQL */`
  query BLOG_BY_SLUG ($slug: String!) {
    postsConnection(slug: $slug) {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`);
