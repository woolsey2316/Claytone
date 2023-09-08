import React from 'react';

import FancyImage from '@/components/FancyImage';
function NewArrivalSection() {
  return (
    <section className='mt-2.5'>
      <div className='justify space-between flex flex-col sm:flex-row gap-5 px-4 sm:px-0'>
        <FancyImage src='/images/banner2.jpg'></FancyImage>
        <FancyImage src='/images/banner3.jpg'></FancyImage>
      </div>
    </section>
  );
}

export default NewArrivalSection;
