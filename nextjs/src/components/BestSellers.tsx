import React from 'react'

import ProductTag from '@/components/ProductTag';

function BestSellers() {
  return ( 
    <div className="mb-30px">
      <h3 className="py-[15px] px-[20px] text-lg text-left uppercase relative font-medium leading-5 rounded-t bg-coral text-white">Best Sellers</h3>
      <ul className="py-30px px-[20px] rounded-b bg-nearWhite list-none">
        <li>
          <ProductTag image="/images/products/5-80x80.jpg" title="Pitcher" rating={5} price={122} />
        </li>
        <li>
          <ProductTag image="/images/products/7-80x80.jpg" title="Sake Shot Glass" rating={0} price={1800} oldPrice={2000} />
        </li>
        <li>
          <ProductTag image="/images/products/9-80x80.jpg" title="Illuminated Vase" rating={3} price={116} oldPrice={122}/>
        </li>
      </ul>
    </div>
   );
}

export default BestSellers;