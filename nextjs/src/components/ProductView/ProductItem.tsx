import Image from 'next/image'
import React, { useState, useContext, useEffect } from 'react'

import { averageRating } from '@/lib/averageRating';
import { displayPrice } from '@/lib/priceDisplay';

import Rating from '@/components/Rating';

import { ReviewsQuery } from '@/__generated__/graphql';

import { IProductDetail } from '@/types/Product';
import { useMutation } from '@apollo/client';
import ADD_TO_CART from '@/graphql/mutation/addToCart';
import { CartContext } from '@/pages/_app';

interface Props {
  product: IProductDetail,
  reviewArray: ReviewsQuery | undefined,
  setShow: React.Dispatch<React.SetStateAction<number>>
}
function ProductItem({product, reviewArray, setShow}: Props) {
  const cart = useContext(CartContext)
  
  useEffect(() => {
    // extract initial product quantity in cart if already added
    const initialQty = cart?.contents.filter(product_ => product_.productId === product.id)[0]?.quantity
    setQty(initialQty ?? 0)
  },[cart])

  const [qty, setQty] = useState(0)
  const [saveCart, { error, data }] = useMutation(ADD_TO_CART, {
    variables: {
      "cartInput" : {
        userId: "1",
        contents: [{productId: product.id, quantity: qty, price: product.price}],
        updatedAt: new Date().toString(),
        createdAt: new Date().toString()
      }
    }
  });
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
  return (
    <div className="mx-auto w-full sm:w-3xl md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2">
            <Image className="border-3 border-r-coral border-t-coral border-l-black border-b-black" priority alt="product image" width="654" height="654" src={product.imageurl}></Image>
          </div>
          <div className="w-1/2">
            <h6 className="text-2xl font-medium mt-2 mb-[15px]">{product.title}</h6>
            <div className="flex border-b border-grey3 pb-4 mb-5">
              <Rating rating={averageRating(reviewArray?.reviews)} size={3} />
              <p className="text-grey2 ml-3 border-1 pr-3 mr-3 border-r border-grey3">{`${reviewArray?.reviews.length} ${reviewArray?.reviews.length === 1 ? "review": "reviews"}`}</p>
              <a className="my-auto" onClick={() => setShow(1)} href="#review">
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
              <button onClick={() => saveCart()} className="lg:text-md relative block cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase text-white hover:bg-black before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0 ml-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
   );
}

export default ProductItem;