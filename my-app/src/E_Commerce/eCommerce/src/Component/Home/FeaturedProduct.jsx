import React from 'react'
import useData from '../../hooks/useData'
import './FeaturedProduct.css'
import ProductCard from '../Products/ProductCard'
import ProductCardSkeleton from '../Products/ProductCardSkeleton'
const FeaturedProduct = () => {
    const skeletons = [1, 2, 3];
    const {data,error,isLoading}=useData("/products/featured");    
  
    return (
       
        <>
            <section className="featured_product m-[65px] ">
                <h2  className='text-center text-[48px]  mb-[65px]'>
                    Featured Product
                </h2>
                <div className=" align_center mb-[55px] justify-evenly featured_products_List">
                    
                     {error && <em className="form_error">{error} </em>}
                     
                    {
                                            isLoading 
                                            ? skeletons.map(n => <ProductCardSkeleton key={n} />)
                                            : data !== null && data.map((product) => {
                                            return (
                                                <ProductCard product={product} key={product._id} img={product.images[0]} id={product._id} title={product.title}
                                                    price={product.price} rating={product.reviews.rate}
                                                    ratingCount={product.reviews.counts} stock={product.stock}
                                                    P_avil={true}
                     
                                                />
                                            )
                                        })
                                        }
                    
                </div>

            </section>
        </>
  )
}

export default FeaturedProduct