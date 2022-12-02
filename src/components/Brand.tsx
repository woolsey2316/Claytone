import Image from 'next/image';
import React from 'react';

import H3Heading from '@/components/H3Heading';

import Carousel, { CarouselItem } from './carousel/Carousel';

function Brand() {
  return (
    <div className='flex flex-col items-center lg:w-1/2'>
      <H3Heading>Brand Logo</H3Heading>
      <Carousel rows={2} itemsPerPage={{ mobile: 4, tablet: 6, desktop: 4 }}>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/1-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/2-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/3-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/4-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/5-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/6-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/7-76x40.png' />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className='flex h-24 w-full items-center justify-center bg-white lg:h-25 lg:w-50'>
            <Image width={76} height={40} alt='...' src='/images/8-76x40.png' />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default Brand;
