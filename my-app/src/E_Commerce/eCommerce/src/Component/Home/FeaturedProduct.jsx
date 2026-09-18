import React from 'react'
import './FeaturedProduct.css'
import ProductCard from '../Products/ProductCard'
const FeaturedProduct = () => {
  return (
        <>
            <section className="featured_product m-[65px] ">
                <h2  className='text-center text-[48px]  mb-[65px]'>
                    Featured Product
                </h2>
                <div className=" align_center mb-[55px] justify-evenly featured_products_List">
                    <ProductCard/>
                    
                </div>

            </section>
        </>
  )
}

export default FeaturedProduct