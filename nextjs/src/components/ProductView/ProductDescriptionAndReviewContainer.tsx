import { useMutation } from '@apollo/client';
import React, { ChangeEvent, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { Heading } from '@/components/markdown-components/Heading';
import { li } from '@/components/markdown-components/li';
import { ol } from '@/components/markdown-components/ol';
import { p } from '@/components/markdown-components/p';
import { ul } from '@/components/markdown-components/ul';
import PaneTitle from '@/components/PaneTitle';
import Rating from '@/components/Rating';

import { ReviewsQuery } from '@/__generated__/graphql';
import CREATE_REVIEW from '@/graphql/mutation/createReview';

import { IProductDetail } from '@/types/Product';

interface Props {
  product: IProductDetail
  reviewArray: ReviewsQuery | undefined
  setShow: React.Dispatch<React.SetStateAction<number>>
  show: number
}
function ProductDescriptionAndReviewContainer({product, reviewArray, setShow, show}: Props) {
  const review_ = {name: "", description: "", rating: 5, productId: product.id}

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
                <div>
                  <input
                    className="mr-2"
                    onChange={handleRatingChange}
                    checked={review.rating === 1}
                    type="radio"
                    id="1"
                    name="rating"
                    value={1}/>
                  <label className="inline-block mt-1">1</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    onChange={handleRatingChange}
                    checked={review.rating === 2}
                    type="radio"
                    id="2"
                    name="rating"
                    value={2}/>
                  <label className="inline-block mt-1">2</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    onChange={handleRatingChange}
                    checked={review.rating === 3}
                    type="radio"
                    id="3"
                    name="rating"
                    value={3}/>
                  <label className="inline-block mt-1">3</label>
                </div>
                <div>
                  <input
                    className="mr-2"
                    onChange={handleRatingChange}
                    checked={review.rating === 4}
                    type="radio"
                    id="4"
                    name="rating"
                    value={4}/>
                    <label className="inline-block mt-1">4</label>
                </div>
                <input
                  className="mr-2"
                  onChange={handleRatingChange}
                  checked={review.rating === 5}
                  type="radio"
                  id="5"
                  name="rating"
                  value={5}/>
                  <label className="inline-block mt-1">5</label>
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
   );
}

export default ProductDescriptionAndReviewContainer;