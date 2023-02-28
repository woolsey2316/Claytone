import { graphql } from '../../../src/__generated__';

export const blogDetailsBySlug = graphql(/* GraphQL */`
  query BLOG_BY_SLUG ($slug: String!) {
    blogPost(slug: $slug) {
      author {
        username
      }
      title
      imageurl
      createdAt
      updatedAt
      slug
      excerpt
      featuredPost
      content
    }
  }
`);
