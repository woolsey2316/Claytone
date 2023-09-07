import React from 'react';

import DesktopNavBar from '@/components/nav/DesktopNavBar';
import { MobileNavBar } from '@/components/nav/MobileNavBar';
import CartElement from '@/components/CartElement';
import ClaytoneLogo from '@/components/Icon/ClaytoneLogo';
import HamburgerIcon from '@/components/Icon/HamburgerIcon';
import CartIcon from '@/components/Icon/CartIcon';

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
      <header className='md:absolute top-0 z-50 h-20 lg:h-15 w-full bg-white font-jost lg:top-24'>
        <div className='items-none mx-auto flex max-w-7xl justify-between md:w-4xl lg:w-5xl xl:w-6xl 2xl:w-7xl'>
          <div className='relative mt-1 lg:-mt-2.5 bg-white pt-1 lg:p-5 lg:after:absolute lg:after:bottom-[-5px] lg:after:right-0 lg:after:h-[5px] lg:after:w-[94.55%] lg:after:bg-coral lg:after:empty-content lg:before:absolute lg:before:top-0 lg:before:right-[-0.275rem] lg:before:z-[-1] lg:before:h-2.5 lg:before:w-2 lg:before:skew-x-45 lg:before:bg-grey lg:before:empty-content'>
            <ClaytoneLogo />
          </div>
          <DesktopNavBar />
          <CartElement />
          {/* Mobile nav icons, activates mobile nav menu and accesses cart page*/}
          <div className='mr-4 flex items-center lg:hidden'>
            <HamburgerIcon handleNavMenu={handleNavMenu} />
            <CartIcon />
          </div>
        </div>
      </header>
    </> 
  );
}

export { NavBar };
