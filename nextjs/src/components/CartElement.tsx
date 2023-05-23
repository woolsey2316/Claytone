import React from 'react'
import Image from 'next/image'
// Shopping cart element belonging on the navbar that shows total price and number of items in cart.
function CartElement() {
  return (
    <div className='relative -mt-1.5 hidden h-18 bg-white p-5 after:absolute after:bottom-0 after:right-[-4px] after:z-[-1] after:h-1.5 after:w-2 after:-skew-x-45 after:bg-grey after:empty-content before:absolute before:top-0 before:right-[-0.25rem] before:z-[-1] before:h-1.5 before:w-2 before:skew-x-45 before:bg-grey before:empty-content lg:flex lg:items-center'>
      {/* container solely used for its ::before and ::after pseudo elements, top left and bottom left grey corners specifically */}
      <div className='relative hidden h-18 after:absolute after:bottom-0 after:left-[-1.45rem] after:z-[-1] after:h-1.5 after:w-2 after:skew-x-45 after:bg-grey after:empty-content before:absolute before:top-0 before:left-[-1.45rem] before:z-[-1] before:h-1.5 before:w-2 before:-skew-x-45 before:bg-grey before:empty-content lg:flex lg:items-center'>
        <Image
          alt='shopping cart icon'
          src='/images/cart-icon.png'
          width={32}
          height={29}
        ></Image>
        <div className='mx-2 h-10 w-0.5 bg-grey3'></div>
        <div>
          <p className='uppercase'>Shopping Cart</p>
          <p className='text-sm text-grey2'>0 items - $0</p>
        </div>
      </div>
    </div>
   );
}

export default CartElement;