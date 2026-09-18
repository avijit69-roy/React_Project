import React from 'react'
import './ProductCard.css'
import { NavLink } from 'react-router-dom'

import iPhone from '../../assets/Iphone_2_16.webp'

const ProductCard = ({img, id, title, price, rating, ratingCount, stock }) => {
    return (
        <>
            <article className='product_card'>
                <div className='product_image align_center'>
                    <NavLink to={`product/${id}`} >
                        <img src={`http://localhost:5000/products/${img}`} alt='product image' />
                    </NavLink>
                </div>

                <div className='product_details  px-[10px] py-[20px]'>
                    <h3 className='product_price'>${price}</h3>
                    <p className='product_title'>{title}</p>

                    <footer className='align_center justify-between'>
                        <div className='align_center p-2 gap-3'>
                            <p className=' product_rating'>
                                ⭐ {rating}
                            </p>
                            <p className='product_review_count'>
                                {ratingCount}
                            </p>
                        </div>

                        {stock > 0 && 
                        
                        <button className='add_to_cart  gap-1.5 border bg-black border-green-300 rounded-md p-2 hover:bg-green-500'>
                            🧺
                        </button>

                        }


                    </footer>
                </div>
            </article>
        </>
    )
}

export default ProductCard