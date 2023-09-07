import React from 'react'
import Image from 'next/image';

const ClaytoneLogo = () => {
  return (
  <div className='h-auto pl-5 lg:pl-0 w-35 lg:w-35 xl:w-[235px]'>
    <Image
      alt='logo'
      src='/images/logo.png'
      width={235}
      height={100}
    ></Image>
  </div>
  )
}

export default ClaytoneLogo