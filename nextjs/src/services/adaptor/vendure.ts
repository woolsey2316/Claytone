import { IProductDetail } from "../../components/ProductView";
import { ProductItem } from "../../contracts/products.type";

export const productDetail = (data: ProductItem) => {
  const { _id, title, price, description, rating, imageurl } = data;
  const newProduct: IProductDetail = {
    id: _id,
    title: title,
    price,
    description,
    rating: rating,
    imageurl
  };
  return newProduct;
};
