import React from 'react';
type Props = {
  rating: number;
};
function Rating({ rating }: Props) {
  const emptyStars = new Array(5).fill('x');
  return (
    <div className='relative flex items-center justify-self-end'>
      {emptyStars.map((_elem, index) => (
        <div key={index} className='h-5 w-5'>
          {/* empty star */}
          <svg
            className='absolute h-5 w-5 fill-current text-gold '
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 488.022 488.022'
          >
            <path d='m471.563 173.778-145.5-20.8-64.4-132c-8-15.4-30-12.2-35.3 0l-64.4 132-145.6 20.8c-16.4 1-21.6 20.9-10.4 33.2l105 102.9-25 144.5c-2.9 17.8 16.7 27.8 28.1 20.8l129.9-68.6 129.9 67.6c13.6 7 29.8-2.8 28.1-19.7l-25-144.6 105-102.9c12.7-13.5 3.6-31.5-10.4-33.2zm-128.9 114.3c-4.2 5.2-6.2 11.4-5.2 17.7l19.7 116.4-103.9-55.1c-6.7-2.8-13-2.8-18.7 0l-103.9 55.1 19.7-116.4c1-7.3-1-13.5-5.2-17.7l-84.1-82.1 116.4-16.6c6.2-1 11.4-4.2 14.6-10.4l52-105 52 105c3.1 5.2 8.3 9.4 14.6 10.4l116.2 16.6-84.2 82.1z' />
          </svg>
          {index < Math.floor(rating) && (
            // filled star
            <svg
              className='h-5 w-5 fill-current text-gold '
              key={index}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 55.867 55.867'
            >
              <path d='M55.818 21.578a1.002 1.002 0 0 0-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 0 0-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 0 0-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 0 0 1.053.076l16.182-8.506 16.18 8.506a1 1 0 0 0 1.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z' />
            </svg>
          )}
          {index + 1 - rating > 0 && index + 1 - rating < 1 && (
            // partially filled star
            <div
              className='overflow-hidden fill-current text-gold'
              style={{ width: `${(rating - index) * 100}%` }}
            >
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 55.867 55.867'
              >
                <path d='M55.818 21.578a1.002 1.002 0 0 0-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 0 0-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 0 0-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 0 0 1.053.076l16.182-8.506 16.18 8.506a1 1 0 0 0 1.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z' />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rating;
