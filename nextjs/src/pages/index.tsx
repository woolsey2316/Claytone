import React from 'react';

import Footer from '@/components/Footer';
import FromOurBlogs from '@/components/FromOurBlogs';
import Hero from '@/components/Hero';
import { NavBar } from '@/components/nav/NavBar';
import NewArrivalSection from '@/components/NewArrivalSection';
import Seo from '@/components/Seo';
import SubscribeSection from '@/components/SubscribeSection';
import TeaPotSetCollections from '@/components/TeaPotSetCollections';
import TestimonialSection from '@/components/TestimonialSection';
import TrendingProducts from '@/components/TrendingProducts';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <div>
      <Seo templateTitle='Home' />
      <main>
        {/* hero section */}
        <section className='bg-white'>
          {/* navbar */}
          <NavBar></NavBar>
          {/* carousel on hero landing page */}
          <Hero />
        </section>
        {/* Tea pot set collections section */}
        <TeaPotSetCollections />
        {/* Testimonial and Brand Section */}
        <TestimonialSection />
        <TrendingProducts />
        <NewArrivalSection />
        <FromOurBlogs />
        <SubscribeSection />
        <Footer />
      </main>
    </div>
  );
}
