import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import Layout from "../../../components/layout/Layout";
import { ProductView } from "../../../components/ProductView";
import { IProduct } from "../../../../../backend/server/models/product";
import { productDetail } from "../../../services/adaptor/vendure";
import { VendureService } from "../../../services/vendure.service";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  product: IProduct;
}

const ProductDetailsPage: NextPage<Props> = ({ product }) => {
  if (product === undefined) return null
  return (
    <Layout pageTitle={product.title}>
      <ProductView
        product={productDetail(product)}
      />
    </Layout>
  );
};

export default ProductDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const vendureService = new VendureService();
  const resp = await vendureService.fetchProductSlugs();
  const paths = resp.data.products.map((product: any) => ({
    params: { id: product.id, slug: product.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  
  const { slug } = context.params as IParams;
  const vendureService = new VendureService();
  const response = await vendureService.fetchProductBySlugs(slug);
  return {
    props: {
      slug: context.params?.slug,
      product: response.data.product,
    },
  };
};