import React from 'react';

import BestSellers from '@/components/BestSellers';
import BlogCard from '@/components/BlogCard';
import BlogSearch from '@/components/BlogSearch';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { NavBar } from '@/components/nav/NavBar';
import Seo from '@/components/Seo';
import Container from '@/container/Container';

export default function Blogs() {
  return (
    <React.Fragment>
      <Seo templateTitle='Blogs' />
      <main>
        <NavBar></NavBar>
        <Header></Header>
        <BreadCrumb />
        <Container>
          <aside className="px-15px md:w-1/4 block">
            {/* Category box for blog */}
            <BlogSearch />
            <BestSellers />
          </aside>
          <div id="content" className="min-h-[600px] w-3/4 px-15px ">
            <div className="mx--15px flex flex-wrap">
              <div className="w-1/2 mb-[30px] px-15px">
                <BlogCard title="Consectetur Adipiscing" image="/images/blog/blog1-1005x1005.jpg" date="13 Feb 2020"/>
              </div>
              <div className="w-1/2 mb-[30px] px-15px">
                <BlogCard title="The Standard Lorem Ipsum" image="/images/blog/blog2-1005x1005.jpg" date="13 Feb 2020"/>
              </div>
              <div className="w-1/2 mb-[30px] px-15px">
                <BlogCard title="Lorem Ipsum Dolo" image="/images/blog/blog3-1005x1005.jpg" date="13 Feb 2020"/>
              </div>
              <div className="w-1/2 mb-[30px] px-15px">
                <BlogCard title="Nam Nec Rhoncus Est" image="/images/blog/blog4-1005x1005.jpg" date="13 Feb 2020"/>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
