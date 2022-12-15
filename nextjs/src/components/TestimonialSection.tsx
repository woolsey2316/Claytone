import React from 'react';

import Brand from '@/components/Brand';
import OurTestimonial from '@/components/OurTestimonial';

function TestimonialSection() {
  return (
    <section className='min-h-108 bg-testimonial bg-cover bg-fixed bg-no-repeat py-20'>
      <div className='mx-auto flex max-w-7xl flex-col lg:flex-row'>
        <OurTestimonial />
        <Brand />
      </div>
    </section>
  );
}

export default TestimonialSection;
