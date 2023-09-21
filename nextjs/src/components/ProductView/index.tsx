import { useQuery } from "@apollo/client";
import React, { FC, useState } from "react";

import BreadCrumb from '@/components/BreadCrumb';
import ProductDescriptionAndReviewContainer from "@/components/ProductView/ProductDescriptionAndReviewContainer";
import ProductItem from '@/components/ProductView/ProductItem';

import { REVIEWS } from "@/graphql/query/reviews.query";

import { IProductDetail } from '@/types/Product';


export interface Props {
  product: IProductDetail;
}

export interface IProductAttr {
  key: string;
  values: Array<string>;
}

export const ProductView: FC<Props> = ({ product }) => {
  const { data: reviewArray } = useQuery(REVIEWS,{
    variables: {
      productId: product.id
    }
  });

  const [show, setShow] = useState(0)
  
  return (
    <section>
      <div className="bg-nearWhite">
        <BreadCrumb/>
      </div>
      <ProductItem product={product} reviewArray={reviewArray} setShow={setShow}/>
      <ProductDescriptionAndReviewContainer product={product} reviewArray={reviewArray} show={show} setShow={setShow}/>
    </section>
  );
};