import BestSellers from '@/components/BestSellers';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NativePatternArt from '@/components/NativePatternArt';
import Seo from '@/components/Seo';
import { NavBar } from '@/components/nav/NavBar';
import Container from '@/container/Container';
import React from 'react'

function cart() {
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
            <BestSellers />
            <NativePatternArt />
          </aside>
          <div id="content" className="min-h-[600px] w-3/4 px-15px ">
            <div className="overflow-x-auto">
              <table className="border border-grey4 mb-[20px]">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </React.Fragment> );
}

export default cart;