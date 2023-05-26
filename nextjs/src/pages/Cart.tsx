import BestSellers from '@/components/BestSellers';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NativePatternArt from '@/components/NativePatternArt';
import Seo from '@/components/Seo';
import { NavBar } from '@/components/nav/NavBar';
import Container from '@/container/Container';
import GET_CART_ITEMS from '@/graphql/query/cart.query';
import { useQuery } from '@apollo/client';
import React from 'react';
import Image from 'next/image';
import CartAccordian from '@/components/CartAccordian';

function cart() {
  const { data: cartItems } = useQuery(GET_CART_ITEMS, {
    variables: {
      userId: "1"
    }
  });
  return (
    <React.Fragment>
      <Seo templateTitle='Blogs' />
      <main>
        <NavBar></NavBar>
        <Header></Header>
        <BreadCrumb />
        <Container>
          <aside className="md:px-15px md:w-1/4 md:block hidden w-0">
            {/* Category box for blog */}
            <BestSellers />
            <NativePatternArt />
          </aside>
          <div id="content" className="min-h-[600px] w-full md:w-3/4 px-15px ">
            <div className="overflow-x-auto">
              <table className="border border-grey4 mb-5">
                <thead>
                  <tr>
                    <td className="py-[10px] px-[15px] border border-grey4 text-center">Image</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-left">Product Name</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-left">Model</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-left">Quantity</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-right">Unit Price</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.userCart?.contents.map((product, id) => 
                    <tr key={id}>
                      <td className="py-[10px] px-[15px] border border-grey4 text-center"><Image alt="product image" width="80" height="80" src={product.image}/></td>
                      <td className="py-[10px] px-[15px] border border-grey4 ">{product.name}</td>
                      <td className="py-[10px] px-[15px] border border-grey4 ">{product.model}</td>
                      <td className="py-[10px] px-[15px] border border-grey4 text-right">{product.quantity}</td>
                      <td className="py-[10px] px-[15px] border border-grey4 text-right">{product.price}</td>
                      <td className="py-[10px] px-[15px] border border-grey4 text-right">{product.price * product.quantity}</td>
                    </tr>)}
                </tbody>
              </table>
              <h3>What would you like to do next?</h3>
              <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
              <CartAccordian />
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </React.Fragment> );
}

export default cart;