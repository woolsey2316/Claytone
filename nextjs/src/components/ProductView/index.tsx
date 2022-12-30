import { useMutation } from '@apollo/client';
import Image from 'next/image'
import React, { ChangeEvent, FC, useState } from "react";

import BreadCrumb from '@/components/BreadCrumb';
import Rating from '@/components/Rating';

import CREATE_REVIEW from '@/graphql/mutation/createReview';


export interface Props {
  product: IProductDetail;
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

export const ProductView: FC<Props> = ({ product }) => {
  const review_ = {name: "", description: "", rating: "", productId: ""}
  const [review, setReview] = useState<typeof review_>(review_)

  // our mutation's result, data, is typed!
  const [saveReview, { error, data }] = useMutation(CREATE_REVIEW, {
    // variables are also typed!
     variables: {
      name: review.name,
      description: review.description,
      rating: review.rating,
      productId: review.productId 
     }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReview((review) => ({
      ...review, 
      [event.target.name]: event.target.value 
    }));
  };
  return (
    <section>
      {/* breadcrumb */}
      <div className="bg-nearWhite">
        <BreadCrumb/>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2">
            <Image className="border-3 border-r-coral border-t-coral border-l-black border-b-black" alt="product image" width="654" height="654" src={product.imageurl}></Image>
          </div>
          <div className="w-1/2">
            <h6 className="text-2xl font-medium mt-2 mb-[15px]">{product.title}</h6>
            <Rating rating={product.rating} size={3} />
          </div>
        </div>
      </div>
        <form
          className='update-form'
        >
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={review.name}
            onChange={handleChange}
            className='update-input-box'
            required
          />
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={review.description}
            onChange={handleChange}
            className='update-input-box'
            required
          />
          <input
            type='text'
            placeholder='Rating'
            name='rating'
            value={review.rating}
            onChange={handleChange}
            className='update-input-box'
            required
          />
          <input type='submit' value='Submit' className='update-button' />
        </form>
    </section>
  );
};