export type IProduct = {
  title: string;
  price: number;
  oldPrice?: number | null;
  rating: number;
  imageurl: string;
};

export interface IProductDetail {
  id: string;
  title: string;
  price: number;
  slug: string;
  description: string;
  rating: number;
  imageurl: string;
  attributes?: Array<IProductAttr>;
  brand: string;
  productCode: string;
  stock: number;
}
