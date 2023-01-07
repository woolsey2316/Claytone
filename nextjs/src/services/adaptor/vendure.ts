
import { ProductItem } from "../../contracts/products.type";

import { IProductDetail } from "@/types/Product";

export const productDetail = (data: ProductItem) => {
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
