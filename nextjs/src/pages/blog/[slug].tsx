import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import BlogView from "@/components/BlogView";
import Layout from "@/components/layout/Layout";

import { VendureService } from "../../services/vendure.service";
import { IBlogpost } from "../../../../backend/server/models/blogPost";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  blogpost: IBlogpost;
}

const BlogDetailsPage: NextPage<Props> = ({ blogpost }) => {
  if (blogpost === undefined) return null
  return (
    <Layout pageTitle={blogpost.title}>
      <BlogView
        blogpost={blogpost}
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
  const paths = resp.data.blogPosts.map((blogPost: IBlogpost) => ({
    params: { id: blogPost._id, slug: blogPost.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  
  const { slug } = context.params as IParams;
  const vendureService = new VendureService();
  const response = await vendureService.fetchBlogBySlugs(slug);
  
  return {
    props: {
      slug: context.params?.slug,
      blogPost: response.data.blogPost,
    },
  };
};