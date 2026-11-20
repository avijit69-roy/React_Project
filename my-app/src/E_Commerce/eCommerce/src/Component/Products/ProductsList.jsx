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



    // useEffect(() => {

    //     // const fetchProducts = async () => {
    //     //     try {
    //     //         const response = await apiClient.get('/products');
    //     //         setProducts(response.data);
    //     //     } catch (error) {
    //     //         setError("Failed to fetch products");
    //     //     }
    //     // };  

    //     // fetchProducts(); 

    //     apiClient.get("/products")
    //     .then(res=>setProducts(res.data.products))
    //     .catch(err=>setError(err.message))
    // }, []);

    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");
    const page = searchParams.get("page")

    const { data, error, isloading } = useData('/products',
        {
            params: {
                category: category,
                page: page
            }
        }, [category, page])


    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

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
                    <select name="sort" id="" className='product_sorting'>
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
                        : data !== null && data.products.map((product) => {
                        return (
                            <ProductCard product={product} key={product._id} img={product.images[0]} id={product._id} title={product.title}
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