import Image from 'next/image';
import React from 'react';

import Carousel, { CarouselItem } from './carousel/Carousel';

function Brand() {
  return (
    <div className='flex flex-col items-center lg:w-1/2'>
      <h3 className='mb-27px font-greatVibes text-5xl'>Brand Logo</h3>
      <Image
        width={55}
        height={15}
        className='mb-31px'
        alt='fancy underline'
        src='/images/underline.png'
      ></Image>
      <Carousel itemsPerPage={{ mobile: 4, tablet: 6, desktop: 6 }}>
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
