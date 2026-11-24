import React, { useState, useEffect } from 'react'
import './ProductsList.css'
import ProductCard from './ProductCard'
import apiClient from '../../utils/api-client'
import useData from '../../hooks/useData'
import ProductCardSkeleton from './ProductCardSkeleton'
import { useSearchParams, useParams } from 'react-router-dom'
import Pagination from '../Common/Pagination'

const ProductsList = () => {
    // const [Products, setProducts] = useState([]);
    // const [error, setError] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setsortBy] = useState('');
    const [sortedProduct, setsortedProduct] = useState([]);
    const category = searchParams.get("category");
    const page = searchParams.get("page")
    const serachQuery = searchParams.get("search");

    const { data, error, isloading } = useData('/products',
        {
            params: {

                category: category,
                page: page,
                search: serachQuery
            }
        }, [category, page, serachQuery])

 
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
    
        if(data && data.products){
            const products=[...data.products];
            if(sortBy === 'price desc'){
                setsortedProduct(products.sort((a,b)=> b.price-a.price));
            }

            else if(sortBy === 'price asc'){
                setsortedProduct(products.sort((a,b)=> a.price-b.price));
            }
            else if(sortBy === 'rate desc'){
                setsortedProduct(products.sort((a,b)=> b.reviews.rate-a.reviews.rate));
            }

            else if(sortBy === 'rate asc'){
                setsortedProduct(products.sort((a,b)=> a.reviews.rate-b.reviews.rate));
            }
            else{
            setsortedProduct(products);
            }
        }    

    }, [sortBy,data])
    

    // Function to handle page change in pagination
    const handlePageChange = (newpage) => {

        // 1. Get existing URL parameters
        const currentParams = Object.fromEntries(searchParams);

        // 2. Change only the page
        currentParams.page = newpage;
 
        // 3. Update the URL
        setSearchParams(currentParams);     
       
    }

    return (
        <>

            <section className="products_list_section p-[10px] pl-[30px] ">

                <header className="align_center products_list_header justify-between ">
                    <h2 className='text-[26px]'>
                        Product
                    </h2>
                    <select name="sort" id="" className='product_sorting'
                        onChange={(e)=>setsortBy(e.target.value)}>
                        <option value="">Relevance</option>
                        <option value="price desc">Price High to Low</option>
                        <option value="price asc">Price Low to High</option>
                        <option value="rate desc">rate High to Low</option>
                        <option value="rate asc">rate Low to High</option>
                    </select>
                </header>

                <div className='products_list flex flex-wrap justify-evenly'>
 
                    {/* Skeleton loading logic here  */}

                    {
                        isloading 
                        ? skeletons.map(n => <ProductCardSkeleton key={n} />)
                        : data !== null && sortedProduct.map((product) => {
                        return (
                            <ProductCard product={product} key={product._id} img={product.images[0]} 
                                        id={product._id} title={product.title}
                                        price={product.price} rating={product.reviews.rate}
                                        ratingCount={product.reviews.counts} stock={product.stock}
                                        P_avil={true}
 
                            /> 
                        )
                    })
                    }

                    {error && <em className="form_error">{error} </em>}
                    
                </div>

                 {/* pagination Implemnttaion  */}
                {data &&
                 <Pagination totalPost= {data.totalProducts} postPerPage={8} onClick={handlePageChange} currentPage={page}/>
                }
            </section>
        </>
    )
}

export default ProductsList