import { ProductsQuery } from '@/__generated__/graphql'
import BestSellers from '@/components/BestSellers'
import BreadCrumb from '@/components/BreadCrumb'
import { DisplayOptions } from '@/components/DisplayOptions'
import NativePatternArt from '@/components/NativePatternArt'
import ProductCategorySearch from '@/components/ProductCategories'
import { ProductCard } from '@/components/product-card/ProductCard'
import { SearchFilter } from '@/components/search-filter/SearchFilter'
import { DEFAULT_LIMIT } from '@/constant/frontend'
import Container from '@/container/Container'
import { sortFunction } from '@/util/sortFunction'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

type View = 'list' | 'grid';

interface Props {
  products: ProductsQuery["products"]
}
export function ShopView({products}: Props) {
  const [view, setView] = useState<View>('grid')
  const searchParams = useSearchParams()!
  const limit_string = searchParams.get("limit")
  const limit = limit_string !== null ? parseInt(limit_string) : DEFAULT_LIMIT
  return (
    <>
      <BreadCrumb/>
      <Container>
        <aside className="px-15px md:w-1/4 block">
          <ProductCategorySearch/>
          <BestSellers />
          <NativePatternArt />
        </aside>
        <div className="min-h-[600px] w-3/4 px-15px">
          <img src="/images/cat_banner-1005x230.jpg" className="rounded-[5px]"></img>
          <p className="leading-[24px] mt-[17px] mb-[25px] text-grey2">
          Shop Laptop feature only the best laptop deals on the market. By 
          comparing laptop deals from the likes of PC World, Comet, Dixons, 
          The Link and Carphone Warehouse, Shop Laptop has the most comprehensive 
          selection of laptops on the internet. At Shop Laptop, we pride 
          ourselves on offering customers the very best laptop deals. From 
          refurbished laptops to netbooks, Shop Laptop ensures that every 
          laptop - in every colour, style, size and technical spec - is 
          featured on the site at the lowest possible price.
          </p>
          <SearchFilter></SearchFilter>
          <DisplayOptions setView={setView}></DisplayOptions>
          <div className="mx-[-15px] grid grid-cols-12">
            {products.slice()
              .sort((a, b) => sortFunction(a,b, searchParams.get("sort") as Sort ))
              .map((product, index) => <ProductCard key={index} product={product} />)
              .filter((elem, index) => index < limit)}
          </div>
        </div>
      </Container>
    </>
  )
}