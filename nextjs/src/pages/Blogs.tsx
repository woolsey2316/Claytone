import { useQuery } from '@apollo/client';
import React from 'react';

import BestSellers from '@/components/BestSellers';
import BlogCard from '@/components/BlogCard';
import BlogSearch from '@/components/BlogSearch';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NativePatternArt from '@/components/NativePatternArt';
import { NavBar } from '@/components/nav/NavBar';
import Seo from '@/components/Seo';
import Container from '@/container/Container';

import GET_BLOGS from '@/graphql/query/blog.query';

export default function Blogs() {
  const { data } = useQuery(GET_BLOGS);
  
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
            <NativePatternArt />
          </aside>
          <div id="content" className="min-h-[600px] w-3/4 px-15px ">
            <div className="mx--15px flex flex-wrap">
              {data?.blogPosts.filter(blogPost => blogPost.featuredPost).map((blogPost) => (
                <div key={blogPost.slug} className="w-1/2 mb-30px px-15px">
                  <BlogCard title={blogPost.title} image={blogPost.imageurl} excerpt={blogPost.excerpt} date={blogPost.createdAt}/>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
