import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import BlogView from "@/components/BlogView";
import Layout from "@/components/layout/Layout";

import { VendureService } from "../../services/vendure.service";
import { IBlogpost } from "../../../../common/blogpost.type";
import { IComment } from "../../../../common/comment.type";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  blogpost: IBlogpost;
  comments: IComment[];
}

const BlogDetailsPage: NextPage<Props> = ({ blogpost, comments }) => {
  if (blogpost === undefined) return null
  return (
    <Layout pageTitle={blogpost.title}>
      <BlogView
        blogpost={blogpost}
        comments={comments}
      />
    </Layout>
  );
};

export default BlogDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const vendureService = new VendureService();
  const resp = await vendureService.fetchBlogSlugs();
  if (!resp?.data?.blogPosts) {
    return { paths: [], fallback: false }
  }
  const paths = resp.data.blogPosts.map((blogPost) => ({
    params: { id: blogPost._id, slug: blogPost.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  
  const { slug } = context.params as IParams;
  const vendureService = new VendureService();
  const response = await vendureService.fetchBlogBySlugs(slug);

  const comments = await vendureService.fetchCommentsByBlogPostId(response.data.blogPost._id);
  
  return {
    props: {
      slug: context.params?.slug,
      blogpost: response.data.blogPost,
      comments: comments.data.comments
    },
  };
};