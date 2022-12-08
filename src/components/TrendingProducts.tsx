import React, { useRef } from 'react';

import Carousel, { CarouselItem } from '@/components/carousel/Carousel';
import H3Heading from '@/components/H3Heading';
import ProductTile from '@/components/ProductTile';

import { IProduct } from '@/types/Product';

const productData: IProduct[] = [
  {
    title: 'Tea Pot',
    price: 122.0,
    rating: 5,
    date: new Date(),
    imageurl: '/images/products/1-315x315.jpg',
  },
  {
    title: 'Flower Frog Vase',
    price: 1022.0,
    rating: 5,
    date: new Date(),
    imageurl: '/images/products/2-315x315.jpg',
  },
  {
    title: 'Cynthia Vase',
    price: 528.0,
    rating: 4,
    date: new Date(),
    imageurl: '/images/products/3-315x315.jpg',
  },
  {
    title: 'Water Pot',
    price: 302.0,
    oldPrice: 337.99,
    rating: 3,
    date: new Date(),
    imageurl: '/images/products/4-315x315.jpg',
  },
  {
    title: 'Pitcher',
    price: 122.0,
    rating: 5,
    date: new Date(),
    imageurl: '/images/products/5-315x315.jpg',
  },
  {
    title: 'Ceramic Pot',
    price: 241.99,
    rating: 0,
    date: new Date(),
    imageurl: '/images/products/6-315x315.jpg',
  },
  {
    title: 'Wall Art Tile',
    price: 122.0,
    rating: 5,
    date: new Date(),
    imageurl: '/images/products/7-315x315.jpg',
  },
  {
    title: 'Sake Tray',
    price: 1082.0,
    oldPrice: 1202.0,
    rating: 0,
    date: new Date(),
    imageurl: '/images/products/8-315x315.jpg',
  },
  {
    title: 'Illuminated Vase',
    price: 116.0,
    oldPrice: 122.0,
    rating: 3,
    date: new Date(),
    imageurl: '/images/products/9-315x315.jpg',
  },
  {
    title: 'Creamer',
    price: 98.0,
    oldPrice: 122.0,
    rating: 3,
    date: new Date(),
    imageurl: '/images/products/10-315x315.jpg',
  },
  {
    title: 'Pottery',
    price: 122.0,
    rating: 4,
    date: new Date(),
    imageurl: '/images/products/11-315x315.jpg',
  },
  {
    title: 'Prep Bowl',
    price: 122.0,
    rating: 5,
    date: new Date(),
    imageurl: '/images/products/12-315x315.jpg',
  },
  {
    title: 'Serving Bowl',
    price: 98.0,
    rating: 4,
    date: new Date(),
    imageurl: '/images/products/13-315x315.jpg',
  },
  {
    title: 'Tea Bag Holder',
    price: 110.0,
    oldPrice: 122.0,
    rating: 0,
    date: new Date(),
    imageurl: '/images/products/14-315x315.jpg',
  },
  {
    title: 'Wine Chiller',
    price: 122.0,
    rating: 4,
    date: new Date(),
    imageurl: '/images/products/15-315x315.jpg',
  },
  {
    title: 'Honey Jar',
    price: 218.0,
    oldPrice: 242.0,
    rating: 4,
    date: new Date(),
    imageurl: '/images/products/16-315x315.jpg',
  },
  {
    title: 'Garlic Keeper',
    price: 123.2,
    rating: 3,
    date: new Date(),
    imageurl: '/images/products/17-315x315.jpg',
  },
  {
    title: 'Sake Shot Glass',
    price: 1800.0,
    oldPrice: 2000.0,
    rating: 2.5,
    date: new Date(),
    imageurl: '/images/products/18-315x315.jpg',
  },
];
function TrendingProducts() {
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
      <div className='flex items-center'>
        <p className='relative cursor-pointer px-2 text-sm text-light-grey hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Featured
        </p>
        <p className='relative cursor-pointer px-2 text-sm text-light-grey hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Latest
        </p>
        <p className='relative cursor-pointer px-2 text-sm text-light-grey hover:text-coral after:absolute after:top-1.5 after:-right-1 after:h-[7px] after:w-[7px] after:rotate-45 after:bg-coral after:empty-content lg:px-6'>
          Bestseller
        </p>
        <p className='cursor-pointer px-2 text-sm text-light-grey hover:text-coral lg:px-6 '>
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
          {productData.map((product, index) => (
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
