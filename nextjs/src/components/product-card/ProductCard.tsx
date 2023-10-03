import React from 'react'
import Image from 'next/image'
import { ProductsQuery } from '@/__generated__/graphql'
import Rating from '@/components/Rating'
import LargerIconQuilt from '@/components/largerIconQuilt'
import { useSearchParams } from 'next/navigation'
type Props = {
  product: ProductsQuery["products"][number]
}
export function ProductCard({product}:Props) {
  const searchParams = useSearchParams()!

  const display = searchParams.get('display')
  return (
    <div className={`px-15px ${display === 'list' ? 'col-span-12' : 'col-span-12 sm:col-span-4'}`}>
      {/* overflow-hidden set to create a new BFC */}
      <div className="relative mb-[30px] group bg-nearWhite overflow-hidden">
        <div className={`group relative overflow-hidden z-[1] text-center ${display === 'list' ? 'float-left mr-[30px]' : ''}`}>
          <a className="block fill-black2" href={`/product/${product.title}`}>
            <Image width="315" height="315" src={product.imageurl} alt="Illuminated Vase" title=" Illuminated Vase" className="img-responsive" />
          </a>
          {/* icon quilt */}
          <div className='z-10 flex flex-col items-center bg-nearWhite absolute bottom-0 left-0 right-0 mx-auto w-fit'>
            <LargerIconQuilt></LargerIconQuilt>
          </div>
        </div>
        <div className={`relative overflow-hidden z-[1] ${display === 'list' ? 'text-left': 'text-center'}`}>
          <div className="py-[18px] px-[5px] bg-nearWhite">
            <h4 className="text-black2"><a className="font-regular">{product.title}</a></h4>
            <p className="mt-[12px] mb-[5px]">
              <span className="text-nearBlack font-medium">${product.price}</span>
              <span className="ml-[5px] line-through text-grey2 font-medium text-sm">{product.oldPrice && `$${product.oldPrice}`}</span>
              <span className="hidden">Ex Tax: $95.00</span>
            </p>
            <div className={`flex ${display === 'list' ? 'justify-start ml-[-4px]': 'justify-center'}`}>
              <Rating rating={product.rating} size={4} />
            </div>
            <p className={`mt-5 mb-[17px] text-grey2 ${display === 'list' ? '' : 'hidden'}`}>{product.briefDescription}</p>
            <div className="button-group list-btn">
              <button type="button" className="addcart btn" data-toggle="tooltip" title="" data-original-title="Add to Cart"><i className="icon-shopping-cart-1"></i></button>
              <button type="button" className="wishlist btn" data-toggle="tooltip" title="" data-original-title="Add To WishList"><i className="icon-heart"></i></button>
              <button type="button" data-toggle="tooltip" className="btn btn-default quickview-button" title="" data-original-title="Quickview"><i className="icon-eye"></i></button>
              <button type="button" className="compare btn" data-toggle="tooltip" title="" data-original-title="Add To Compare"><i className="icon-exchange"></i></button>
            </div>
          </div>
        </div>
        {/* decorative perimeter animation */}
        <div className='group absolute top-0 right-0 left-0 bottom-0 h-full w-full after:absolute after:top-0 after:left-0 after:z-10 after:h-0.5 after:w-0 after:bg-black after:transition-width after:duration-700 after:empty-content group-hover:after:w-full before:absolute before:bottom-0 before:left-0 before:h-0 before:w-0.5 before:z-10 before:bg-black before:transition-height before:duration-700 before:empty-content group-hover:before:h-full'>
          {/* decorative perimeter animation */}
          <div className='absolute top-0 right-0 left-0 bottom-0 h-full w-full after:absolute after:bottom-0 after:right-0 after:z-10 after:h-0.5 after:w-0 after:bg-coral after:transition-width after:duration-700 after:empty-content group-hover:after:w-full before:absolute before:top-0 before:right-0 before:h-0 before:w-0.5 before:z-10 before:bg-coral before:transition-height before:duration-700 before:empty-content group-hover:before:h-full'></div>
        </div>
      </div>
    </div>
  )
}