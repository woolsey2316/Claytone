import Image from 'next/image';
import React from 'react';
type Props = {
  children: string;
};
function H3Heading({ children }: Props) {
  return (
    <>
      <h3 className='text-center mb-27px font-niconne text-4xl lg:text-5xl'>{children}</h3>
      <Image
        className='mb-31px'
        width={55}
        height={15}
        src='/images/underline.png'
        alt='fancy underline'
      ></Image>
    </>
  );
}

export default H3Heading;
