import React from 'react';

import useBreakpoint from '@/hooks/use-breakpoint';

import { Breakpoints } from '@/types/Carousel';

type CarouselProps = {
  children: JSX.Element[];
  itemsPerPage: Breakpoints;
  activeIndex: number;
  updateIndex: (index: number) => void;
};
function CarouselButton({
  children,
  itemsPerPage,
  activeIndex,
  updateIndex,
}: CarouselProps) {
  const breakpoint = useBreakpoint();
  return (
    <div className='flex items-center justify-center'>
      {React.Children.map(children, (_child, index) => {
        if (index % itemsPerPage[breakpoint] === 0) {
          return (
            <button
              className={`mt-4 mr-2 h-3 w-3 rounded-full ${
                itemsPerPage[breakpoint] * activeIndex === index
                  ? 'bg-coral'
                  : 'bg-white'
              }`}
              onClick={() => {
                updateIndex(index / itemsPerPage[breakpoint]);
              }}
            ></button>
          );
        }
      })}
    </div>
  );
}

export default CarouselButton;
