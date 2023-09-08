import React, { useState } from 'react';

import useBreakpoint from '@/hooks/use-breakpoint';

import CarouselArrows from '@/components/carousel/CarouselArrows';
import CarouselButton from '@/components/carousel/CarouselButton';

import { Breakpoints } from '@/types/Carousel';
import { toPercentage } from '@/util/utils';

type CarouselItemProps = {
  children: JSX.Element;
};

export const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <div className='inline-flex items-center justify-center'>{children}</div>
  );
};

type CarouselProps = {
  children: JSX.Element[] | JSX.Element | undefined;
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
  // css class that specifies number of columns
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
  // css class that specifies number of rows
  const ROW_MAP = new Map([
    [1, 'grid-rows-1'],
    [2, 'grid-rows-2'],
    [3, 'grid-rows-3'],
    [4, 'grid-rows-4'],
    [5, 'grid-rows-5'],
    [6, 'grid-rows-6'],
  ]);
  const TotalCarouselItems = React.Children.count(children)
  function maxPage(): number {
    return Math.ceil(React.Children.count(children) / itemsPerSlide[breakpoint]) - 1
  }
  function finalSlideIndex(total: number) {
    return Math.floor(total / itemsPerSlide[breakpoint])
  }
  function getNumberOfSlides(total: number) {
    return itemsPerSlide[breakpoint] / total
  }
  let itemsPerSlide = { mobile: 0, tablet: 0, desktop: 0 };
  // useful variable, maximum possible items that can fit in the entire carousel
  const MaxPossibleCarouselItems = (TotalCarouselItems % rows)? TotalCarouselItems + rows - (TotalCarouselItems % rows) : TotalCarouselItems
  // if only number provided, give responsive breakpoint information
  if (typeof itemsPerPage === 'number') {
    itemsPerSlide = {
      mobile: itemsPerPage,
      tablet: itemsPerPage,
      desktop: itemsPerPage,
    };
  } else {
    itemsPerSlide = itemsPerPage;
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const breakpoint = useBreakpoint();

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if ( newIndex > maxPage()) {
      newIndex = maxPage()
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
      updateIndex(activeIndex + 1);
    }
    if (touchStart - touchEnd < -50) {
      updateIndex(activeIndex - 1);
    }
  }
  // number of columns in carousel
  function getNumberOfColums(): number {
    return Math.ceil(React.Children.count(children) / rows);
  }
  // the total width of carousel
  function getWidth(): string {
    return (MaxPossibleCarouselItems / itemsPerSlide[breakpoint]) * 100 + '%';
  }
  // slides the carousel horizontally
  function translate(): string {
    // last slide case, move slider so that maximum number of slides is visible inside window
    if (activeIndex === finalSlideIndex(MaxPossibleCarouselItems)) {
      return toPercentage(((getNumberOfSlides(MaxPossibleCarouselItems) -1) * 100))
    }
    // not the final slide
    return toPercentage(-1 * activeIndex * (getNumberOfSlides(MaxPossibleCarouselItems) * 100));
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
          return child !== undefined ? React.cloneElement(child, { width: '100%' }) : null
        })}
      </div>
      {/* Carousel indicators/button */}
      <CarouselButton
        updateIndex={updateIndex}
        itemsPerPage={itemsPerSlide}
        activeIndex={activeIndex}
      >
        {children}
      </CarouselButton>
      {/* Previous and next arrows */}
      <CarouselArrows
        showArrows={showArrows}
        activeIndex={activeIndex}
        updateIndex={updateIndex}
      />
    </div>
  );
};

export default Carousel;
