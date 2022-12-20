import React from 'react';

import Blogtile from '@/components/Blogtile';
import Carousel, { CarouselItem } from '@/components/carousel/Carousel';
import H3Heading from '@/components/H3Heading';
const blogData = [
  {
    date: new Date(),
    imageurl: '/images/blog/blog1-315x315.jpg',
    title: 'Consectetur Adipiscing',
    description:
      'A type specimen book. It has survived not only five centuries, but als...',
  },
  {
    date: new Date(),
    imageurl: '/images/blog/blog2-315x315.jpg',
    title: 'The Standard Lorem Ipsum',
    description:
      'A type specimen book. It has survived not only five centuries, but als...',
  },
  {
    date: new Date(),
    imageurl: '/images/blog/blog3-315x315.jpg',
    title: 'Lorem Ipsum Dolo',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting indus...',
  },
  {
    date: new Date(),
    imageurl: '/images/blog/blog4-315x315.jpg',
    title: 'Nam Nec Rhoncus Est',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting indus...',
  },
];
const itemsPerPage = { desktop: 2, mobile: 1, tablet: 2 };
function FromOurBlogs() {
  return (
    <section className='mt-20'>
      <div className='mx-auto flex max-w-7xl flex-col items-center'>
        <H3Heading>From Our Blogs</H3Heading>
        <div className=''>
          <Carousel
            gap={10}
            rows={1}
            showArrows={true}
            itemsPerPage={itemsPerPage}
          >
            {blogData.map((blogpost, index) => (
              <CarouselItem key={index}>
                <Blogtile blogPost={blogpost} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default FromOurBlogs;
