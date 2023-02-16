import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import BlogView from "@/components/BlogView";
import Layout from "@/components/layout/Layout";

import { BlogItem } from "@/contracts/blog.type";

import { VendureService } from "../../services/vendure.service";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  blog: BlogItem;
}

const BlogDetailsPage: NextPage<Props> = ({ blog }) => {
  if (blog === undefined) return null
  return (
    <Layout pageTitle={blog.title}>
      <BlogView
        blog={blog}
      />
    </Layout>
  );
};

export default BlogDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const vendureService = new VendureService();
  const resp = await vendureService.fetchBlogSlugs();
  const paths = resp.data.blogs.map((blog: any) => ({
    params: { id: blog.id, slug: blog.slug },
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
      product: response.data.product,
    },
  };
};