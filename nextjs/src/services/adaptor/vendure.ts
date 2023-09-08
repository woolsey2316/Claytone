
import { IProduct } from "../../../../backend/server/models/product";

import { IProductDetail } from "@/types/Product";

export const productDetail = (data: IProduct) => {
  const { _id, title, slug, price, description, rating, imageurl, brand, productCode, stock } = data;
  const newProduct: IProductDetail = {
    id: _id,
    title,
    slug,
    price,
    description,
    rating,
    imageurl,
    brand,
    productCode,
    stock
  };
  return newProduct;
};
