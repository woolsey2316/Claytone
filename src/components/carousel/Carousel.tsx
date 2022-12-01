import React, { useState } from 'react';
import useBreakpoint from 'use-breakpoint';

import CarouselButton from '@/components/carousel/CarouselButton';

import { Breakpoints } from '@/types/Carousel';
type CarouselItemProps = {
  children: JSX.Element;
};
export const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <div className='inline-flex items-center justify-center'>{children}</div>
  );
};

type CarouselProps = {
  children: JSX.Element[];
  itemsPerPage: number | Breakpoints;
};
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const Carousel = ({ children, itemsPerPage }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handlePressStart(e: React.MouseEvent<HTMLDivElement>) {
    setTouchStart(e.clientX);
  }

  function handlePressMove(e: React.MouseEvent<HTMLDivElement>) {
    setTouchEnd(e.clientX);
  }
  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 100) {
      // do your stuff here for left swipe
      updateIndex(activeIndex + 1);
    }

    if (touchStart - touchEnd < -100) {
      // do your stuff here for right swipe
      updateIndex(activeIndex - 1);
    }
  }

  const translateMap = new Map([
    [0, 'translate-x-0step'],
    [1, 'translate-x-1step'],
  ]);
  return (
    <div
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchStartEvent) => handleTouchMove(touchStartEvent)}
      onTouchEnd={() => handleTouchEnd()}
      onMouseDown={(touchStartEvent) => handlePressStart(touchStartEvent)}
      onMouseMove={(touchMoveEvent) => handlePressMove(touchMoveEvent)}
      onClick={() => handleTouchEnd()}
      className='m-5 select-none overflow-hidden'
    >
      <div
        className={`grid grid-cols-4 grid-rows-2 gap-2 whitespace-nowrap transition-transform duration-300 ${translateMap.get(
          activeIndex
        )}`}
        style={{
          width: `${
            typeof itemsPerPage === 'object'
              ? (
                  (React.Children.count(children) / itemsPerPage[breakpoint]) *
                  100
                ).toString() + '%'
              : '100%'
          }`,
        }}
      >
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      {/* Carousel indicators/button */}
      <CarouselButton
        breakpoints={BREAKPOINTS}
        updateIndex={updateIndex}
        itemsPerPage={itemsPerPage}
        activeIndex={activeIndex}
      >
        {children}
      </CarouselButton>
    </div>
  );
};

export default Carousel;
