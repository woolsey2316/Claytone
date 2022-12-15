import React from 'react';
type Props = {
  updateIndex: (index: number) => void;
  activeIndex: number;
  showArrows: boolean;
};
function CarouselArrows({ updateIndex, activeIndex, showArrows }: Props) {
  return showArrows ? (
    <>
      <button
        className='absolute left-0 top-1/2'
        onClick={() => updateIndex(activeIndex - 1)}
      >
        <svg
          className='h-6 w-4 fill-current hover:text-coral'
          fill='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
        >
          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
        </svg>
      </button>
      <button
        className='absolute right-0 top-1/2'
        onClick={() => updateIndex(activeIndex + 1)}
      >
        <svg
          className='h-6 w-4 fill-current hover:text-coral'
          fill='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
        >
          <path d='M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
        </svg>
      </button>
    </>
  ) : null;
}

export default CarouselArrows;
