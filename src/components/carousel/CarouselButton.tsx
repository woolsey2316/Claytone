import React from 'react';
import useBreakpoint from 'use-breakpoint';

import { Breakpoints } from '@/types/Carousel';

type CarouselProps = {
  children: JSX.Element[];
  itemsPerPage: number | Breakpoints;
  activeIndex: number;
  breakpoints: Breakpoints;
  updateIndex: (index: number) => void;
};
function CarouselButton({
  children,
  itemsPerPage,
  activeIndex,
  updateIndex,
  breakpoints,
}: CarouselProps) {
  const { breakpoint } = useBreakpoint(breakpoints, 'desktop');
  return (
    <div className='flex items-center justify-center'>
      {React.Children.map(children, (_child, index) => {
        switch (typeof itemsPerPage) {
          case 'number':
            if (index % itemsPerPage === 0) {
              return (
                <button
                  className={`mt-4 mr-2 h-3 w-3 rounded-full ${
                    itemsPerPage * activeIndex === index
                      ? 'bg-coral'
                      : 'bg-white'
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                ></button>
              );
            }
            break;
          case 'object':
            if (index % itemsPerPage[breakpoint] === 0) {
              return (
                <button
                  className={`mt-4 mr-2 h-3 w-3 rounded-full ${
                    itemsPerPage[breakpoint] * activeIndex === index
                      ? 'bg-coral'
                      : 'bg-white'
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                ></button>
              );
            }
        }
      })}
    </div>
  );
}

export default CarouselButton;