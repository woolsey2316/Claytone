import Image from 'next/image'
import React from 'react'

import Rating from '@/components/Rating';
interface Props {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
}
function ProductTag({image, title, price, oldPrice, rating}: Props) {
  return ( 
    <div className="w-full p-0">
      <div className="mb-[30px] flex">
        <div className="float-left w-[80px] mr-15px">
          <a href="">
            <Image alt="product" width="80" height="80" src={image}></Image>
          </a>
        </div>
        <div className="w-[65.3%]">
          <h4 className="leading-4 text-black2 font-medium">{title}</h4>
          <p className="mt-[12px] mb-[12px] text-black2">
            ${price}
            <span className="text-grey2 text-sm break-words ml-[5px] line-through">{oldPrice ? "$" + oldPrice : ""}</span>
          </p>
          <Rating rating={rating} size={3}/>
        </div>
      </div>
    </div>
   );
}

export default ProductTag;