import Image from 'next/image';
import React from 'react';

import H3Heading from '@/components/H3Heading';
function TeaPotSetCollections() {
  return (
    <section className='bg-white py-5 lg:p-20'>
      <div>
        <div className='grid-flow-column mx-auto grid max-w-7xl grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
          <div className='mb-10 ml-10 border-0 border-r lg:m-0 lg:border-r-lighter-grey'>
            <Image
              alt='plane'
              width={50}
              height={50}
              sizes='(max-width: 1280px) 30px, 50px'
              src='/images/plane.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Free Shipping Worldwide</p>
            <p className='text-sm text-light-grey'>On orders over $150</p>
          </div>
          <div className='mb-10 ml-10 border-0 lg:m-0 lg:ml-16 lg:border-r lg:border-r-lighter-grey lg:pr-16'>
            <Image
              alt='wallet'
              width={50}
              height={50}
              sizes='(max-width: 1280px) 30px, 50px'
              src='/images/wallet.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Cash On Delivery</p>
            <p className='text-sm text-light-grey'>100% money back guarantee</p>
          </div>
          <div className='mb-10 ml-10 border-0 border-r lg:m-0 lg:ml-16 lg:border-r-lighter-grey lg:pr-16'>
            <Image
              alt='present'
              width={50}
              height={50}
              sizes='(max-width: 1280px) 30px, 50px'
              src='/images/present.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>Special Gift Card</p>
            <p className='text-sm text-light-grey'>
              Offer special bonuses with gift
            </p>
          </div>
          <div className='mb-10 ml-10 lg:m-0 lg:ml-16 lg:pr-16'>
            <Image
              alt='headphones'
              width={50}
              height={50}
              sizes='(max-width: 1280px) 30px, 50px'
              src='/images/headphones.png'
            ></Image>
            <p className='mb-3 pt-8 font-medium'>24/7 Customer Service</p>
            <p className='text-sm text-light-grey'>
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
            <p className='mb-[28px] px-12 text-light-grey'>
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
