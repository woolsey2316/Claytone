import { Asset } from "./common/asset.type";

export interface ProductItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  featuredAsset: Asset;
  imageurl: string;
  rating: number;
  price: number;
  brand: string;
  productCode: string;
  stock: number;
}

export interface ProductVariant {
  sku: string;
  name: string;
  productId: number;
  price: number;
  id: number;
  product: ProductItem;
}

export interface IFacetValues {
  id: string;
  code: string;
  name: string;
  facet: { name: string };
}
