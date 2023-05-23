import Image from 'next/image';
import React from 'react';

import DesktopNavBar from '@/components/nav/DesktopNavBar';
import { MobileNavBar } from '@/components/nav/MobileNavBar';
import CartElement from '@/components/CartElement';

function NavBar() {
  // navbar menu
  const [openMobNav, setOpen] = React.useState(false);

  function handleNavMenu() {
    setOpen((openMobNav) => !openMobNav);
  }
  return (
    <>
      {/* Shown when mobile navbutton is pressed */}
      {openMobNav && <MobileNavBar setOpen={setOpen} />}
      <header className='absolute top-0 z-50 h-20 lg:h-15 w-full bg-white font-jost lg:top-24'>
        <div className='items-none mx-auto flex max-w-7xl justify-between md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl'>
          <div className='relative mt-1 lg:-mt-2.5 bg-white pt-1 lg:p-5 lg:after:absolute lg:after:bottom-[-5px] lg:after:right-0 lg:after:h-[5px] lg:after:w-[94.55%] lg:after:bg-coral lg:after:empty-content lg:before:absolute lg:before:top-0 lg:before:right-[-0.275rem] lg:before:z-[-1] lg:before:h-2.5 lg:before:w-2 lg:before:skew-x-45 lg:before:bg-grey lg:before:empty-content'>
            {/* claytone logo */}
            <div className='h-auto pl-5 lg:pl-0 w-35 lg:w-35 xl:w-[235px]'>
              <Image
                alt='logo'
                src='/images/logo.png'
                width={235}
                height={100}
              ></Image>
            </div>
          </div>
          {/* desktop nav */}
          <DesktopNavBar />
          <CartElement />
          {/* Mobile nav icons, activates mobile nav menu and accesses cart page*/}
          <div className='mr-4 flex items-center lg:hidden'>
            {/* Hamburger Icon */}
            <div className='mt-1 mr-8 cursor-pointer'>
              <Image
                onClick={handleNavMenu}
                src='/images/hamburger.png'
                alt='hamburger icon'
                width={20}
                height={14}
              ></Image>
            </div>
            <svg
              className='cursor-pointer fill-current stroke-black text-white hover:stroke-coral'
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
