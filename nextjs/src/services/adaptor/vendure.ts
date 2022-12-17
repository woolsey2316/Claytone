import { IProductDetail } from "../../components/ProductView";
import { ProductItem } from "../../contracts/products.type";

export const productDetail = (data: ProductItem) => {
  const { _id, title, featuredAsset, price, description, rating } = data;
  const newProduct: IProductDetail = {
    id: _id,
    title: title,
    price,
    featuredImage: featuredAsset,
    description,
    stars: rating,
  };
  return newProduct;
};
