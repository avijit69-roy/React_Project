import React, { useState,useEffect } from 'react'
import './ProductsList.css'
import ProductCard from './ProductCard'
import apiClient from '../../utils/api-client'

const ProductsList = () => {
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState("");
    


    useEffect(() => {

        // const fetchProducts = async () => {
        //     try {
        //         const response = await apiClient.get('/products');
        //         setProducts(response.data);
        //     } catch (error) {
        //         setError("Failed to fetch products");
        //     }
        // };  
 
        // fetchProducts(); 

        apiClient.get("/products")
        .then(res=>setProducts(res.data.products))
        .catch(err=>setError(err.message))
    }, []);

    console.log(Products)



    return (
        <>
            <section className="products_list_section p-[10px] pl-[30px]">

                <header className="align_center products_list_header justify-between ">
                    <h2 className='text-[26px]'>
                        Product
                    </h2>
                    <select name="sort" id="" className='product_sorting'>
                        <option value="">Relevance</option>
                        <option value="price desc">Price High to Low</option>
                        <option value="price asc">Price Low to High</option>
                        <option value="rate desc">rate High to Low</option>
                        <option value="rate asc">rate Low to High</option>
                    </select>
                </header>

                <div className='products_list flex flex-wrap justify-evenly'>

                
                    {error && <em className="form_error">{error} </em>}

                    {
                        Products.map((product)=>{
                            return (
                                <ProductCard  key={product._id} img={product.images[0]} id={product._id}  title ={product.title} 
                                                price={product.price} 
                                                rating={product.reviews.rate} ratingCount={product.reviews.counts} stock={product.stock}
                    
                                />
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default ProductsList