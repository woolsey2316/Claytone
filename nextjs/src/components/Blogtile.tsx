import Image from 'next/image';
import React from 'react';

type BlogPost = {
  title: string;
  description: string;
  imageurl: string;
  date: Date;
};
type Props = {
  blogPost: BlogPost;
};
function Blogtile({ blogPost }: Props) {
  return (
    <div className='mt-1 flex flex-col lg:flex-auto lg:flex-row lg:items-end'>
      <div className='relative h-auto w-full flex-shrink-0 lg:h-315px lg:w-315px'>
        <Image
          className='mt-2 h-auto w-full lg:h-315px lg:w-315px'
          src={blogPost.imageurl}
          alt='blog post image'
          width={315}
          height={315}
        ></Image>
        <div className='absolute -top-1 left-5 bg-white py-[10px] px-[30px] text-sm font-medium text-coral shadow-smt after:absolute after:top-0 after:right-[-0.25rem] after:z-[-1] after:h-1.5 after:w-2 after:skew-x-45 after:bg-grey after:empty-content before:absolute before:top-0 before:left-[-0.25rem] before:z-[-50] before:h-1.5 before:w-2 before:-skew-x-45 before:bg-grey before:empty-content'>
          {blogPost.date.toDateString().split(' ').slice(1).join(' ')}
        </div>
      </div>
      <div className='relative flex min-w-0 flex-col items-start whitespace-normal bg-nearWhite p-[15px]'>
        <h6 className='text-lg font-medium'>{blogPost.title}</h6>
        <p className='relative mt-[15px] mb-[30px] pb-[17px] text-light-grey after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-lighter-grey after:empty-content'>
          {blogPost.description}
        </p>
        <a className='lg:text-md relative block cursor-pointer overflow-hidden rounded bg-coral px-5 py-3 text-sm font-medium uppercase text-white hover:bg-black before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0'>
          Read more
        </a>
      </div>
    </div>
  );
}

export default Blogtile;
