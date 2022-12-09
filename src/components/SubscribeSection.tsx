import Image from 'next/image';
import React, { useState } from 'react';

function SubscribeSection() {
  const [email, setEmail] = useState('');
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    setEmail(value);
  }
  return (
    <section className='mt-5 p-5'>
      <div className='relative mx-auto flex flex-col items-center border border-dashed border-black py-10 px-2.5 xl:w-6.5xl'>
        <Image
          className='absolute top-[-14px] left-10'
          src='/images/scissors.png'
          alt='scissors'
          width={31}
          height={26}
        ></Image>
        <h3 className='mb-[27px] font-niconne text-5xl'>
          Subscribe Newsletter
        </h3>
        <p className='mb-[29px] text-light-grey'>
          Subscribe to our Newsletters now and stay up to date with new
          collections, the latest lookbooks and exclusive offers.
        </p>
        <div className='flex items-center'>
          <input
            className='h-10 rounded-l bg-nearWhite py-[5px] px-[10px]'
            placeholder='Enter your email...'
            onChange={handleChange}
            value={email}
          ></input>
          <button
            type='submit'
            className='relative overflow-hidden rounded-r bg-coral py-2 px-5 text-white hover:bg-black before:absolute before:left-0 before:top-0 before:h-full before:w-full before:-translate-x-full before:bg-white before:opacity-30 before:transition before:duration-1000 before:empty-content hover:before:translate-x-0'
          >
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
