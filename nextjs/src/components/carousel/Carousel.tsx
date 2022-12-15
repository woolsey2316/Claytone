import React, { useState } from 'react';

import useBreakpoint from '@/hooks/use-breakpoint';

import CarouselArrows from '@/components/carousel/CarouselArrows';
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
  rows: number;
  showArrows: boolean;
  gap: number;
};

const Carousel = ({
  children,
  itemsPerPage,
  rows,
  showArrows,
  gap,
}: CarouselProps) => {
  const COLUMN_MAP = new Map([
    [1, 'grid-cols-1'],
    [2, 'grid-cols-2'],
    [3, 'grid-cols-3'],
    [4, 'grid-cols-4'],
    [5, 'grid-cols-5'],
    [6, 'grid-cols-6'],
    [7, 'grid-cols-7'],
    [8, 'grid-cols-8'],
    [9, 'grid-cols-9'],
  ]);
  const ROW_MAP = new Map([
    [1, 'grid-rows-1'],
    [2, 'grid-rows-2'],
    [3, 'grid-rows-1'],
    [4, 'grid-rows-2'],
    [5, 'grid-rows-1'],
    [6, 'grid-rows-2'],
  ]);
  let itemsPerPage_ = { mobile: 0, tablet: 0, desktop: 0 };
  // if only number provided without breakpoints give
  // breakpoint information
  if (typeof itemsPerPage === 'number') {
    itemsPerPage_ = {
      mobile: itemsPerPage,
      tablet: itemsPerPage,
      desktop: itemsPerPage,
    };
  } else {
    itemsPerPage_ = itemsPerPage;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    }
    // if index beyond max set to max
    else if (
      newIndex >=
      Math.ceil(React.Children.count(children) / itemsPerPage_[breakpoint])
    ) {
      newIndex =
        Math.ceil(React.Children.count(children) / itemsPerPage_[breakpoint]) -
        1;
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
    if (touchStart - touchEnd > 50) {
      // do your stuff here for left swipe
      updateIndex(activeIndex + 1);
    }

    if (touchStart - touchEnd < -50) {
      // do your stuff here for right swipe
      updateIndex(activeIndex - 1);
    }
  }

  function getNumberOfColums(): number {
    return Math.ceil(React.Children.count(children) / rows);
  }
  function getWidth(): string {
    let n = React.Children.count(children);
    if (n % rows) {
      n = n + rows - (n % rows);
    }
    return (n / itemsPerPage_[breakpoint]) * 100 + '%';
  }
  // slides the carousel horizontally
  function translate(): string {
    let n = React.Children.count(children);
    if (n % rows) {
      n = n + rows - (n % rows);
    }
    // not the final slide
    if (activeIndex < Math.floor(n / itemsPerPage_[breakpoint])) {
      return `${activeIndex * (-itemsPerPage_[breakpoint] / n) * 100}%`;
    }
    // last slide case, move slider so everything is visible inside window
    else {
      return ((-1 + itemsPerPage_[breakpoint] / n) * 100 + '%').toString();
    }
  }
  return (
    <div
      onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
      onTouchMove={(touchStartEvent) => handleTouchMove(touchStartEvent)}
      onTouchEnd={() => handleTouchEnd()}
      onMouseDown={(touchStartEvent) => handlePressStart(touchStartEvent)}
      onMouseMove={(touchMoveEvent) => handlePressMove(touchMoveEvent)}
      onClick={() => handleTouchEnd()}
      className='relative m-5 select-none overflow-hidden'
    >
      <div
        className={`grid ${COLUMN_MAP.get(getNumberOfColums())} ${ROW_MAP.get(
          rows
        )} whitespace-nowrap`}
        style={{
          width: getWidth(),
          transform: `translate(${translate()})`,
          transition: 'transform 0.3s ease-in-out',
          gap: gap,
        }}
      >
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      {/* Carousel indicators/button */}
      <CarouselButton
        updateIndex={updateIndex}
        itemsPerPage={itemsPerPage_}
        activeIndex={activeIndex}
      >
        {children}
      </CarouselButton>
      <CarouselArrows
        showArrows={showArrows}
        activeIndex={activeIndex}
        updateIndex={updateIndex}
      />
    </div>
  );
};

export default Carousel;
