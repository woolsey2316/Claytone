import { Asset } from "./common/asset.type";

export interface BlogItem {
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