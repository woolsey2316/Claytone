import BestSellers from '@/components/BestSellers';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NativePatternArt from '@/components/NativePatternArt';
import Seo from '@/components/Seo';
import { NavBar } from '@/components/nav/NavBar';
import Container from '@/container/Container';
import GET_CART_ITEMS from '@/graphql/query/cart.query';
import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Image from 'next/image';
import CartAccordian from '@/components/CartAccordian';
import ADD_TO_CART from '@/graphql/mutation/addToCart';
import DELETE_CART from '@/graphql/mutation/deleteCart';

function cart() {
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setNewQty(parseInt(e.currentTarget.value) );
  }

  function handleSubmit(e: React.SyntheticEvent, index: number) {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      quantity: { value: string, name: string };
    };
    const quantity = target.quantity.value;
    setNewQty(parseInt(quantity))
    setIndex(index)
    saveCart()

  }

  async function handleDelete() {
    setCartContentId(index); 
    const res = await deleteCart()
    console.log(res)
  }
  
  const { data: cartItems } = useQuery(GET_CART_ITEMS, {
    variables: {
      userId: "1"
    }
  });

  const [newQty, setNewQty] = useState(0)
  const [index, setIndex] = useState(0)
  const [cartContentId, setCartContentId] = useState(0)

  const [deleteCart] = useMutation(DELETE_CART, {
    variables: {
      "deleteArgs": {
        cartContentId: cartContentId,
        userId: "1"
      }
    }
  })

  const [saveCart, { error, data }] = useMutation(ADD_TO_CART, {
    variables: {
      "cartInput" : {
        contents: [
          ...cartItems?.userCart?.contents.map(item => {
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              name: item.name,
              image: item.image,
              model: item.model,
            }
          }).slice(0, index) ?? [],
          {
            productId: cartItems?.userCart?.contents[index]?.productId ?? "",
            quantity: newQty,
            price: cartItems?.userCart?.contents[index]?.price ?? 0,
            model: cartItems?.userCart?.contents[index]?.model ?? "",
            name: cartItems?.userCart?.contents[index]?.name ?? "",
            image: cartItems?.userCart?.contents[index]?.image ?? ""
          },
          ...cartItems?.userCart?.contents.map(item => {
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              name: item.name,
              image: item.image,
              model: item.model,
            }
          })
          .slice(index+1, cartItems?.userCart?.contents.length ) ?? []
        ],
        updatedAt: new Date().toString(),
        createdAt: cartItems?.userCart?.createdAt ?? "",
        userId: cartItems?.userCart?.userId ?? ""
      }
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
                {cartItems?.userCart?.contents?.length != undefined && cartItems?.userCart?.contents?.length > 0 ? 
                <thead>
                  <tr>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-center">Image</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-left">Product Name</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-left">Model</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-left">Quantity</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-right">Unit Price</td>
                    <td className="py-[10px] px-[15px] border border-grey4 text-sm text-right">Total</td>
                  </tr>
                </thead>
                : null}
                <tbody>
                  {cartItems?.userCart?.contents.map((product, id) => 
                    <tr key={id}>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 text-center"><Image alt="product image" width="80" height="80" src={product.image}/></td>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 ">{product.name}</td>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 ">{product.model}</td>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 text-right">
                        <form onSubmit={e => handleSubmit(e,index)}>
                          <input type="quantity" name="quantity" defaultValue={product.quantity} onChange={onChange} className="align-bottom py-2 px-2 rounded rounded-tr-none rounded-br-none border border-grey3"/>
                          <button type="submit" className="lg:text-md relative inline-block cursor-pointer overflow-hidden rounded-none bg-coral hover:bg-black2 px-5 py-3 text-sm font-medium uppercase text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0">
                            <svg className="h-3.5 w-3.5" fill="#fff" viewBox="0 0 512 512">
                              <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/>
                            </svg>
                          </button>
                          <button type="button" onClick={handleDelete} className="lg:text-md relative inline-block cursor-pointer overflow-hidden rounded rounded-tl-none rounded-bl-none bg-coral2 px-5 py-3 text-sm font-medium uppercase text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:transform before:rounded before:bg-white before:opacity-30 before:transition before:duration-1000 before:ease-out before:empty-content hover:before:translate-x-0">
                            <svg className="h-3.5 w-3.5" fill="#fff" viewBox="0 0 512 512">
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                            </svg>
                          </button>
                        </form>
                      </td>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 text-right">{product.price}</td>
                      <td className="py-[10px] px-[15px] border text-sm border-grey4 text-right">{product.price * product.quantity}</td>
                    </tr>
                  )}
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