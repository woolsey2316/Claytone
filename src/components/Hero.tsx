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
    backgroundColor: 'white',
    borderRadius: '50%',
    margin: '0 8px 24px 8px',
    display: 'inline-block',
  };
  const style = isSelected
    ? { ...defStyle, backgroundColor: '#CA6e56' }
    : { ...defStyle };
  return (
    <li
      style={style}
      onClick={clickHandler}
      onKeyDown={clickHandler}
      key={index}
      role='button'
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    ></li>
  );
}

function Hero() {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      renderIndicator={customRenderIndicator}
    >
      <div className=''>
        <Image
          alt='main feature image'
          src='/images/mainbanner1-1920x950.jpg'
          className='left-0 h-auto w-full max-w-full object-contain'
          width={1920}
          height={950}
        />
        <div className='absolute top-13/30 left-1/10'>
          <div className='flex w-168 flex-col items-start justify-center text-left'>
            <h3 className='mb-5 font-greatVibes xl:text-3xl 2xl:text-4xl'>
              Wonderful Clay Presentations and Ideas
            </h3>
            <h2 className='mb-10 font-alexandria font-medium xl:text-6xl 2xl:text-7xl'>
              Unique Pottery Collection
            </h2>
            <a className='cursor-pointer rounded bg-coral px-8 py-2 font-quicksand text-white 2xl:text-xl'>
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className=''>
        <Image
          alt='secondary feature image'
          src='/images/mainbanner2-1920x950.jpg'
          className='left-0 h-auto w-full max-w-full object-contain'
          width={1920}
          height={950}
        />
        <div className='absolute top-1/4 left-1/10'>
          <div className='flex w-168 flex-col items-start justify-center text-left'>
            <h3 className='mb-5 font-greatVibes xl:text-3xl 2xl:text-4xl'>
              Wonderful Clay Presentations and Ideas
            </h3>
            <h2 className='mb-10 font-alexandria font-medium xl:text-6xl 2xl:text-7xl'>
              Creative Pottery and Clay
            </h2>
            <a className='cursor-pointer rounded bg-coral px-8 py-2 font-quicksand text-white 2xl:text-xl'>
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
