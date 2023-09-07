import React from 'react'
import Image from 'next/image';

type Props = {
  handleNavMenu: () => void
}
function HamburgerIcon({handleNavMenu}: Props) {
  return (
    <div className='mt-1 mr-8 cursor-pointer'>
      <Image
        onClick={handleNavMenu}
        src='/images/hamburger.png'
        alt='hamburger icon'
        width={20}
        height={14}
      ></Image>
    </div>
  )
}

export default HamburgerIcon