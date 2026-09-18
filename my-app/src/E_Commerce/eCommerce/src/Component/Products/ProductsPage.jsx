import React from 'react'
import './ProductsPage.css'
import { ProductsSidebar } from './ProductsSidebar'
import ProductsList from './ProductsList'
const ProductsPage = () => {
  return (
    <>
        <section className='products_page grid grid-cols-[1fr_4fr] p-[20px]'>
            <ProductsSidebar/>
            
            <ProductsList/>

        </section>
    </>
  )
}

export default ProductsPage