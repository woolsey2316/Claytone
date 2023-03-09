import { useMutation, useQuery } from '@apollo/client';
import Image from 'next/image'
import React, { ChangeEvent, FC, useState } from "react";
import ReactMarkdown from 'react-markdown'

import { displayPrice } from '@/lib/priceDisplay';

import BreadCrumb from '@/components/BreadCrumb';
import { Heading } from '@/components/markdown-components/Heading';
import { li } from '@/components/markdown-components/li';
import { ol } from '@/components/markdown-components/ol';
import { p } from '@/components/markdown-components/p';
import { ul } from '@/components/markdown-components/ul';
import PaneTitle from '@/components/PaneTitle';
import Rating from '@/components/Rating';

import CREATE_REVIEW from '@/graphql/mutation/createReview';
import { REVIEWS } from '@/graphql/query/reviews.query';

import { IProductDetail } from '@/types/Product';


export interface Props {
  product: IProductDetail;
}

export interface IProductAttr {
  key: string;
  values: Array<string>;
}

export const ProductView: FC<Props> = ({ product }) => {
  const review_ = {name: "", description: "", rating: 5, productId: product.id}
  const [qty, setQty] = useState(0)
  const [show, setShow] = useState(0)
  const increment = () => {
    setQty(qty => qty + 1)
  }
   const decrement = () => {
    setQty(qty => {
      if (qty === 0) {
        return qty
      }
      return qty - 1
    })
  }
  const { data: reviewArray } = useQuery(REVIEWS,{
    variables: {
      productId: product.id
    }
  });

  const [review, setReview] = useState<typeof review_>(review_)

  // our mutation's result, data, is typed!
  const [saveReview, { error, data }] = useMutation(CREATE_REVIEW, {
    variables: {
      "reviewInput" : {
        "name": review.name,
        "description": review.description,
        "rating": review.rating,
        "productId": review.productId
      }
    }
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReview((review) => ({
      ...review, 
      [event.target.name]: event.target.value 
    }));
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReview((review) => ({
      ...review, 
      rating: parseInt(event.target.value)
    }));
  }

  const validForm = () => {
    return review.description &&
      review.name &&
      review.productId
  }
  return (
    <section>
      {/* breadcrumb */}
      <div className="bg-nearWhite">
        <BreadCrumb/>
      </div>
      <div className="mx-auto w-full sm:w-3xl md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2">
            <Image className="border-3 border-r-coral border-t-coral border-l-black border-b-black" alt="product image" width="654" height="654" src={product.imageurl}></Image>
          </div>
          <div className="w-1/2">
            <h6 className="text-2xl font-medium mt-2 mb-[15px]">{product.title}</h6>
            <div className="flex border-b border-grey3 pb-4 mb-5">
              <Rating rating={product.rating} size={3} />
              <p className="text-grey2 ml-3 border-1 pr-3 mr-3 border-r border-grey3">{`${reviewArray?.reviews.length} ${reviewArray?.reviews.length === 1 ? "review": "reviews"}`}</p>
              <a className="my-auto" href="#review">
                <svg className="h-3 w-3 mr-1 fill-current hover:text-coral cursor-pointer" viewBox="0 0 512 512"><path d="m410.3 231 11.3-11.3-33.9-33.9-62.1-62.1-33.9-33.9-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l199.2-199.2 22.6-22.7zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9l-78.2 23 23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7l-14.4 14.5-22.6 22.6-11.4 11.3 33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5l-39.3-39.4c-25-25-65.5-25-90.5 0zm-47.4 168-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
              </a>
              <p className="text-grey2 pl-0.5 align-middle">Write a review</p>
            </div>
            <div className="border-b border-grey3 pb-4 mb-5">
              <ul>
                <li>
                  <span className="inline-block min-w-[125px] leading-[27px] text-black2 text-sm font-medium">Brand:</span>
                  <span className="text-grey2 font-medium text-sm">{product.brand}</span>
                </li>
                <li>
                  <span className="inline-block min-w-[125px] leading-[27px] text-black2 text-sm font-medium">Product Code:</span>
                  <span className="text-grey2 font-medium text-sm">{product.productCode}</span>
                </li>
                <li>
                  <span className="inline-block min-w-[125px] leading-[27px] text-black2 text-sm font-medium">Availability:</span>
                  <span className="text-grey2 font-medium text-sm">{product.stock > 0 ? "in Stock" : "Out of stock"}</span>
                </li>
              </ul>
            </div>
            <h3 className="font-jost text-2xl font-medium">${displayPrice(product.price)}</h3>
            <p className="font-jost text-grey2 text-sm">Ex. Tax ${displayPrice(0.9 * product.price)}</p>
            <hr className="text-grey3 mt-5 mb-5"></hr>
            <p className="font-jost font-medium mb-2.5">Qty</p>
            <div className="flex">
              <div className="rounded-md border border-grey3 flex w-[116px]">
                <button className="h-[38px] w-[38px]" onClick={decrement}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-auto" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"/>
                  </svg>
                </button>
                <div className="h-[38px] w-[38px] flex align-center justify-center items-center">
                  <div className="">{qty}</div>
                </div>
                <button className="h-[38px] w-[38px]" onClick={increment}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-auto" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                  </svg>
                </button>
              </div>
              <button className="lg:text-md relative block cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase text-white hover:bg-black before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0 ml-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      {/* Description container and review container */}
      <div className="mx-auto w-full sm:w-3xl md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl">
        <div className="mt-5">
          <ul className="flex justify-center gap-4 bg-coral rounded-t-md">
            <PaneTitle number={0} show={show} onclick={() => setShow(0)} name="description"/>
            <PaneTitle number={1} show={show} onclick={() => setShow(1)} name="reviews"/>
          </ul>
          {/* product description content */}
          <div id="description-pane" className={`p-30px bg-nearWhite ${show === 0 ? "block" : "hidden"}`}>
            <ReactMarkdown components={{
              h1: Heading.H1,
              h2: Heading.H2,
              h3: Heading.H3,
              h4: Heading.H4,
              h5: Heading.H5,
              h6: Heading.H6,
              p: p,
              ol: ol,
              ul: ul,
              li: li
            }}>{product.description}</ReactMarkdown>
          </div>
          {/* reviews content */}
          <div id="review-pane" className={`p-30px bg-nearWhite ${show === 1 ? "block" : "hidden"}`}>
            {reviewArray?.reviews.map((review, index) =>
              <div className="bg-white mb-4" key={index}> 
                <div className="flex">
                  <p className="w-full py-2.5 px-[15px] border border-grey4 border-r-0 font-jost font-bold text-sm">{review.name}</p>
                  <p className="w-full text-right py-2.5 px-[15px] border border-grey4 font-jost text-sm">{new Date(parseInt(review.createdAt)).toLocaleDateString("en-US")}</p>
                </div>
                <div className="py-2.5 px-[15px] border border-grey4 border-t-0">
                  <p className="mb-3 font-jost text-sm">{review.description}</p>
                  <Rating rating={review.rating} size={3}/>
                </div>
              </div>
            )}
            <h3 className="font-jost font-medium text-lg mb-[15px]">Write a Review</h3>
            {/* write a review form */}
            <form
              id="review"
              onSubmit={() => validForm() && saveReview()}
            >
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-2">
                  <label className="mr-4"><span className="text-blood font-bold mr-3">*</span>Your Name</label>
                </div>
                <div className="col-span-10">
                  <input
                    type='text'
                    className='py-[5px] px-[15px] rounded-md border border-grey3 w-full'
                    name='name'
                    value={review.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-2">
                  <label className="mr-4"><span className="text-blood font-bold mr-3">*</span>Your Review</label>
                </div>
                <div className="col-span-10">
                  <input
                    type='text'
                    name='description'
                    className='py-[5px] px-[15px] rounded-md border border-grey3 w-full h-20'
                    value={review.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-2">
                  <label className="mr-4"><span className="text-blood font-bold mr-3">*</span>Your Rating</label>
                </div>
                <div className="col-span-10">
                  <input className="mr-2" onChange={handleRatingChange} checked={review.rating === 1} type="radio" id="1" name="rating" value={1}></input>
                  <input className="mr-2" onChange={handleRatingChange} checked={review.rating === 2} type="radio" id="2" name="rating" value={2}></input>
                  <input className="mr-2" onChange={handleRatingChange} checked={review.rating === 3} type="radio" id="3" name="rating" value={3}></input>
                  <input className="mr-2" onChange={handleRatingChange} checked={review.rating === 4} type="radio" id="4" name="rating" value={4}></input>
                  <input className="mr-2" onChange={handleRatingChange} checked={review.rating === 5} type="radio" id="5" name="rating" value={5}></input>
                </div>
              </div>
              <div>
                <button className="ml-auto lg:text-md relative block cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase text-white hover:bg-black before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0" type='submit'>
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};