import { GetStaticProps, NextPage } from "next";

import Layout from "../../components/layout/Layout";
import { VendureService } from "../../services/vendure.service";
import { ShopView } from "@/pages/shop/ShopView";
import { ProductsQuery } from '@/__generated__/graphql'

import 'react-tooltip/dist/react-tooltip.css'

interface Props {
  products: ProductsQuery["products"];
}

const ShopPage: NextPage<Props> = ({ products }) => {
  if (products === undefined) return null
  return (
    <Layout pageTitle="Shop">
      <ShopView
        products={products}
      />
    </Layout>
  );
};

export default ShopPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const vendureService = new VendureService();
  const response = await vendureService.fetchProducts();
  return {
    props: {
      products: response.data.products,
    },
  };
};