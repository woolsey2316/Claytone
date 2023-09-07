import React from 'react'

function CartIcon() {
  return (
    <svg
      className='cursor-pointer fill-current stroke-black text-white hover:stroke-coral mt-1'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
    >
      <path
        stroke='fill-current'
        className='text-white hover:stroke-coral'
        strokeWidth='1.5'
        d='m1 1 3.5 2 2 12m0 0h13L23 5c0-.8-10-.667-15-.5M6.5 15l1 1-.5 2.5h2m0 0h8.5m-8.5 0v1m11.5-1h-3m0 0v1m0 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-8.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
      />
    </svg>
  )
}

export default CartIcon;