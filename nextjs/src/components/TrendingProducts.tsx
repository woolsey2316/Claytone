import { useQuery } from '@apollo/client';
import React, { useRef } from 'react';

import Carousel, { CarouselItem } from '@/components/carousel/Carousel';
import H3Heading from '@/components/H3Heading';
import ProductTile from '@/components/ProductTile';

import GET_PRODUCTS from '@/graphql/query/product.query';

import { IProduct } from '@/types/Product';

function TrendingProducts() {
  const { data } = useQuery(GET_PRODUCTS);

  const container = useRef<HTMLDivElement>(null);
  function handleGrabbing() {
    if (container.current != undefined) {
      container.current.style.cursor = 'grabbing';
    }
  }
  function handleGrab() {
    if (container.current != undefined) {
      container.current.style.cursor = 'grab';
    }
  }
  return (
    <section className='mt-50px flex flex-col items-center'>
      <H3Heading>Trending Products</H3Heading>
      <div className='flex items-center mt-4'>
        <p className='relative cursor-pointer px-2 text-sm text-grey2 hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Featured
        </p>
        <p className='relative cursor-pointer px-2 text-sm text-grey2 hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Latest
        </p>
        <p className='relative cursor-pointer px-2 text-sm text-grey2 hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Bestseller
        </p>
        <p className='cursor-pointer px-2 text-sm text-grey2 hover:text-coral lg:px-6 '>
          Special
        </p>
      </div>
      <div
        className='cursor-grab lg:w-[900px] xl:w-[1200px] 2xl:w-7xl'
        ref={container}
        onMouseUp={handleGrab}
        onMouseDown={handleGrabbing}
      >
        <Carousel
          gap={10}
          showArrows={true}
          rows={2}
          itemsPerPage={{ mobile: 4, tablet: 6, desktop: 8 }}
        >
          {data?.products?.map((product: IProduct, index: number) => (
            <CarouselItem key={index}>
              <ProductTile product={product} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default TrendingProducts;
