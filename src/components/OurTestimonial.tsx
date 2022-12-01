import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function customRenderIndicator(
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  isSelected: boolean,
  index: number,
  label: string
): React.ReactNode {
  const defStyle = {
    marginLeft: 0,
    color: 'white',
    cursor: 'pointer',
    height: 12,
    width: 12,
    borderRadius: '50%',
    margin: '0 8px -12px 8px',
    display: 'inline-block',
  };
  const style = isSelected
    ? { ...defStyle, backgroundColor: '#CA6e56' }
    : { ...defStyle };
  return (
    <li
      style={style}
      className='bg-white hover:bg-coral'
      onClick={clickHandler}
      onKeyDown={clickHandler}
      key={index}
      role='button'
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    ></li>
  );
}

function OurTestimonial() {
  return (
    <Carousel
      className='mx-auto w-full p-10 lg:w-1/2 lg:p-0'
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      renderIndicator={customRenderIndicator}
    >
      <div className='flex flex-col items-center'>
        <h3 className='mb-27px font-greatVibes text-5xl'>Our Testimonial</h3>
        <Image
          className='mb-31px h-4 !w-14'
          width={55}
          height={15}
          alt='fancy underline'
          src='/images/underline.png'
        ></Image>
        <div className='overflow-hidden rounded-full'>
          <Image
            className='h-18 w-18'
            width={96}
            height={96}
            alt='profile'
            src='/images/profile-woman.jpg'
          ></Image>
        </div>
        <p className='mb-3 mt-6 text-light-grey'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-black'>Jane Deo</p>
        <p className='mt-2 mb-6 text-sm text-light-grey'>Customer</p>
      </div>
      <div className='flex flex-col items-center'>
        <h3 className='mb-27px font-greatVibes text-5xl'>Our Testimonial</h3>
        <Image
          className='mb-31px h-4 !w-14'
          width={55}
          height={15}
          alt='fancy underline'
          src='/images/underline.png'
        ></Image>
        <div className='overflow-hidden rounded-full'>
          <Image
            className='h-18 w-18'
            width={96}
            height={96}
            alt='profile'
            src='/images/profile-guy.jpg'
          ></Image>
        </div>
        <p className='mb-3 mt-6 text-light-grey'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-black'>Luis Charles</p>
        <p className='mt-2 mb-6 text-sm text-light-grey'>Customer</p>
      </div>
    </Carousel>
  );
}

export default OurTestimonial;
