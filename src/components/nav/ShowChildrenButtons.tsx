import React from 'react';
type Props = {
  setShowChildren: React.Dispatch<React.SetStateAction<boolean>>;
  showChildren: boolean;
};
function ShowChildrenButtons({ setShowChildren, showChildren }: Props) {
  return (
    // showChildren var determines whether user sees "-" button or "+" button
    showChildren ? (
      // hide button looks like "-" on screen
      <button
        className='stroke-black hover:stroke-coral'
        onClick={() => setShowChildren(false)}
      >
        <svg className='h-1 w-3 fill-current text-black hover:text-coral'>
          <path stroke='fill-current' stroke-width='3' d='M0 2h11' />
        </svg>
      </button>
    ) : (
      // show button looks like "+" on screen
      <button
        className='stroke-black hover:stroke-coral'
        onClick={() => setShowChildren(true)}
      >
        <svg className='h-3 w-3 fill-current stroke-black hover:stroke-coral'>
          <path
            stroke='fill-current'
            stroke-width='3'
            d='M5.5 0v5.5m0 5.5V5.5m0 0H11 0'
          />
        </svg>
      </button>
    )
  );
}

export { ShowChildrenButtons };
