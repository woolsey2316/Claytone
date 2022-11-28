import Image from 'next/image';
import React from 'react';

import { MobileNavBar } from '@/components/nav/MobileNavBar';

function NavBar() {
  // navbar menu
  const [openMobNav, setOpen] = React.useState(true);

  function handleNavMenu() {
    setOpen((openMobNav) => !openMobNav);
  }
  return (
    <>
      {/* Shown when mobile navbutton is pressed */}
      {openMobNav && <MobileNavBar setOpen={setOpen} />}
      <header className='absolute top-0 z-50 h-15 w-full bg-white font-jost lg:top-24'>
        <div className='items-none mx-auto flex max-w-7xl justify-between md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl'>
          <div className='relative -mt-2.5 bg-white p-5 after:absolute after:bottom-[-5px] after:right-0 after:h-[5px] after:w-[94.55%] after:bg-coral after:empty-content before:absolute before:top-0 before:right-[-0.275rem] before:z-[-1] before:h-2.5 before:w-2 before:skew-x-45 before:bg-grey before:empty-content'>
            <Image
              alt='logo'
              src='/images/logo.png'
              className='h-auto w-24 xl:w-[235px]'
              width={235}
              height={100}
            ></Image>
          </div>
          {/* desktop nav */}
          <nav className='hidden lg:block'>
            <ul className='flex'>
              <li className='ml-5 py-5 font-medium uppercase hover:text-coral'>
                <a href='#'>Home</a>
              </li>
              <li className='ml-5 py-5 font-medium uppercase hover:text-coral'>
                <a href='#'>Shop</a>
              </li>
              <li className='ml-5 py-5 font-medium uppercase hover:text-coral'>
                <a href='#'>Ceramic Pots</a>
              </li>
              <li className='ml-5 py-5 font-medium uppercase hover:text-coral'>
                <a href='#'>More</a>
              </li>
              <li className='ml-5 py-5 font-medium uppercase hover:text-coral'>
                <a href='#'>Blogs</a>
              </li>
            </ul>
          </nav>
          {/* container that has ::before and ::after pseudo elements representing small grey corners on the div */}
          <div className='relative -mt-1.5 hidden h-18 bg-white p-5 after:absolute after:bottom-0 after:right-[-4px] after:z-[-1] after:h-1.5 after:w-2 after:-skew-x-45 after:bg-grey after:empty-content before:absolute before:top-0 before:right-[-0.25rem] before:z-[-1] before:h-1.5 before:w-2 before:skew-x-45 before:bg-grey before:empty-content lg:flex lg:items-center'>
            {/* container solely used for its ::before and ::after pseudo elements, top left and bottom left grey corners specifically */}
            <div className='relative hidden h-18 after:absolute after:bottom-0 after:left-[-1.45rem] after:z-[-1] after:h-1.5 after:w-2 after:skew-x-45 after:bg-grey after:empty-content before:absolute before:top-0 before:left-[-1.45rem] before:z-[-1] before:h-1.5 before:w-2 before:-skew-x-45 before:bg-grey before:empty-content lg:flex lg:items-center'>
              <Image
                alt='shopping cart icon'
                src='/images/cart-icon.png'
                width={32}
                height={29}
              ></Image>
              <div className='mx-2 h-10 w-0.5 bg-lighter-grey'></div>
              <div>
                <p className='uppercase'>Shopping Cart</p>
                <p className='text-sm text-light-grey'>0 items - $0</p>
              </div>
            </div>
          </div>
          {/* Mobile nav icons, activates mobile nav menu and accesses cart page*/}
          <div className='flex items-start lg:hidden'>
            <Image
              className='mt-5 mr-8 cursor-pointer'
              onClick={handleNavMenu}
              src='/images/hamburger.png'
              alt='hamburger icon'
              width={20}
              height={14}
            ></Image>
            {/* <svg className="mt-4 cursor-pointer fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path className="hover:text-coral" d="M1 1L4.5 3L6.5 15M6.5 15H19.5L23 5C23 4.2 13 4.33333 8 4.5M6.5 15L7.5 16L7 18.5H9M9 18.5C9 18.5 14.1805 18.5 17.5 18.5M9 18.5C9 18.5 9 19.1095 9 19.5M20.5 18.5C20.5 18.5 18.6716 18.5 17.5 18.5M17.5 18.5C17.5 18.6953 17.5 19.3047 17.5 19.5M17.5 19.5C16.6716 19.5 16 20.1716 16 21C16 21.8284 16.6716 22.5 17.5 22.5C18.3284 22.5 19 21.8284 19 21C19 20.1716 18.3284 19.5 17.5 19.5ZM9 19.5C8.17157 19.5 7.5 20.1716 7.5 21C7.5 21.8284 8.17157 22.5 9 22.5C9.82843 22.5 10.5 21.8284 10.5 21C10.5 20.1716 9.82843 19.5 9 19.5Z" stroke="black" stroke-width="1.5"/>
                </svg> */}
            <svg
              className='mt-4 cursor-pointer fill-current stroke-black text-white hover:stroke-coral'
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
          </div>
        </div>
      </header>
    </>
  );
}

export { NavBar };
