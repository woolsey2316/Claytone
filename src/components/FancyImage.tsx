import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
};
function FancyImage({ src }: Props) {
  return (
    <div className='group relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:translate-x-0 before:transform before:bg-white before:bg-opacity-60 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0 lg:before:-translate-x-full'>
      <Image
        className='w-full rounded-md'
        width={945}
        height={600}
        alt='...'
        src={src}
      ></Image>
      <div className='absolute left-0 top-0 right-0 bottom-0 flex h-full w-full flex-col items-center justify-center lg:hidden lg:group-hover:flex'>
        <p className='text-xl lg:text-2xl'>New Arrival</p>
        <h3 className='mt-[7px] mb-[20px] font-niconne text-xl md:text-3xl lg:mb-[29px] lg:text-4xl'>
          Pottery and Clay Pot
        </h3>
        <button className='lg:text-md relative overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase hover:bg-black hover:text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default FancyImage;
