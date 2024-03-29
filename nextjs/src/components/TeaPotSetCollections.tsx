import Image from 'next/image';
import React from 'react';

import H3Heading from '@/components/H3Heading';
function TeaPotSetCollections() {
  return (
    <section className='bg-white py-5 lg:p-20'>
      <div>
        <div className='grid-flow-column mx-auto grid max-w-7xl grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
          <div className='mb-10 ml-10 border-0 border-r lg:m-0 lg:border-r-grey3'>
            <Image
              alt='plane'
              className='h-12.5 w-12.5'
              width={50}
              height={50}
              src='/images/plane.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Free Shipping Worldwide</p>
            <p className='text-sm text-grey2'>On orders over $150</p>
          </div>
          <div className='mb-10 ml-10 border-0 lg:m-0 lg:ml-16 lg:border-r lg:border-r-grey3 lg:pr-16'>
            <Image
              alt='wallet'
              className='h-12.5 w-12.5'
              width={50}
              height={50}
              src='/images/wallet.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Cash On Delivery</p>
            <p className='text-sm text-grey2'>100% money back guarantee</p>
          </div>
          <div className='mb-10 ml-10 border-0 border-r lg:m-0 lg:ml-16 lg:border-r-grey3 lg:pr-16'>
            <Image
              alt='present'
              className='h-12.5 w-12.5'
              width={50}
              height={50}
              src='/images/present.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Special Gift Card</p>
            <p className='text-sm text-grey2'>
              Offer special bonuses with gift
            </p>
          </div>
          <div className='mb-10 ml-10 lg:m-0 lg:ml-16 lg:pr-16'>
            <Image
              alt='headphones'
              className='h-12.5 w-12.5'
              width={50}
              height={50}
              src='/images/headphones.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>24/7 Customer Service</p>
            <p className='text-sm text-grey2'>
              Call us 24/7 at 123-456-789
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[50px]'>
        <div className='mx-auto flex max-w-7xl flex-col lg:flex-row'>
          <Image
            className='self-start lg:w-1/2'
            width={660}
            height={490}
            alt='teapot'
            src='/images/teapot.jpg'
          ></Image>
          <div className='lg::w-1/2 flex flex-col items-center justify-center py-4 text-center lg:py-0'>
            <H3Heading>Teapot Set Collections</H3Heading>
            <p className='mb-[28px] px-12 text-grey2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className='rounded bg-coral py-2.5 px-6 text-sm uppercase text-white'>
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaPotSetCollections;
