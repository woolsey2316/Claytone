import Image from 'next/image';
import React from 'react';

import IconQuilt from '@/components/IconQuilt';
import Rating from '@/components/Rating';

import { IProduct } from '@/types/Product';
type Props = {
  product: IProduct;
};
function ProductTile({ product }: Props) {
  return (
    <div className='group relative flex flex-col items-center bg-nearWhite'>
      <div className='relative flex flex-col items-center overflow-hidden lg:h-[275px] lg:w-[275px] 2xl:h-[315px] 2xl:w-[315px]'>
        <Image
          className='translate scale-100 cursor-pointer transition duration-700 group-hover:scale-110 lg:h-[275px] lg:w-[275px] 2xl:h-[315px] 2xl:w-[315px]'
          src={product.imageurl}
          alt={product.title}
          width={315}
          height={315}
        ></Image>
        {/* icon quilt */}
        <div className='z-10 flex flex-col items-center'>
          <IconQuilt></IconQuilt>
        </div>
      </div>
      {/* product description */}
      <div className='flex flex-col items-center bg-nearWhite pt-0 pb-5'>
        <a
          href={`/product/${product.title}`}
          className='z-10 justify-self-end text-sm hover:text-coral'
        >
          {product.title}
        </a>
        <div className='flex items-center justify-self-end'>
          <p className='text-sm font-medium'>${product.price}</p>
          {product.oldPrice ? (
            <p className='ml-2 text-xs text-grey2 line-through'>
              ${product.oldPrice}
            </p>
          ) : null}
        </div>
        <Rating rating={product.rating} />
      </div>
      {/* decorative perimeter animation */}
      <div className='group group absolute top-0 right-0 left-0 bottom-0 h-full w-full after:absolute after:top-0 after:left-0 after:z-10 after:h-0.5 after:w-0 after:bg-black after:transition-width after:duration-700 after:empty-content group-hover:after:w-full before:absolute before:bottom-0 before:left-0 before:h-0 before:w-0.5 before:bg-black before:transition-height before:duration-700 before:empty-content group-hover:before:h-full'>
        {/* decorative perimeter animation */}
        <div className='absolute top-0 right-0 left-0 bottom-0 h-full w-full after:absolute after:bottom-0 after:right-0 after:z-10 after:h-0.5 after:w-0 after:bg-coral after:transition-width after:duration-700 after:empty-content group-hover:after:w-full before:absolute before:top-0 before:right-0 before:h-0 before:w-0.5 before:bg-coral before:transition-height before:duration-700 before:empty-content group-hover:before:h-full'></div>
      </div>
    </div>
  );
}

export default ProductTile;
