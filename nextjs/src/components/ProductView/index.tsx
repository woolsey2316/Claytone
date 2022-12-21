import Image from 'next/image'
import React, { FC } from "react";

export interface Props {
  product: IProductDetail;
  addedToCart: (id: string, qty: string) => void;
}

export interface IProductDetail {
  id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  imageurl: string;
  attributes?: Array<IProductAttr>;
}

export interface IProductAttr {
  key: string;
  values: Array<string>;
}

export const ProductView: FC<Props> = ({ product, addedToCart }) => {
  return (
    <section>
      <div className="container">
        <div className="flex">
          <div className="w-1/2">
            <Image alt="product image" width={549} height={549} src={product.imageurl}></Image>
          </div>
          <div className="w-1/2">

          </div>
        </div>
      </div>
    </section>
  );
};

const renderStars = (product: IProductDetail) => {
  const countStars = product.rating || 0;
  const starMarkup = [];
  for (let i = 0; i < 5; i++) {
    starMarkup.push(
      <svg
        key={`start-${i}`}
        className={`w-5 h-5 ${
          i < countStars ? "text-yellow-400" : "text-gray-400"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return starMarkup;
};