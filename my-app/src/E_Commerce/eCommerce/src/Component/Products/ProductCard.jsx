import React,{useContext} from 'react'
import './ProductCard.css'
import { NavLink } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'
import DataContext from '../../contexts/UserContext'

import iPhone from '../../assets/Iphone_2_16.webp'
const ProductCard = ({product,img, id, title, price, rating, ratingCount, stock,P_avil }) => {

    const { addToCart } = useContext(CartContext);
    const user = useContext(DataContext);

    return (
        <>
            <article className='product_card'>
                <div className='product_image align_center'>
                    <NavLink to={`${id}`}  >
                      {
                    P_avil ? <img src={`http://localhost:5000/products/${img}`} alt='product image' /> 
                            : <img src={iPhone} alt='product image' />
                      }  
                    </NavLink>
                </div>

                <div className='product_details  px-[10px] py-[20px]'>

                    <h3 className='product_price'>{P_avil ? `$${price}` : '$1450'}</h3>
                    <p className='product_title'>{P_avil ? `${title}` : 'iPhone 12'}</p>

                    <footer className='align_center justify-between'>
                        <div className='align_center p-2 gap-3'>
                            <p className=' product_rating'>
                                ⭐ {P_avil ? `${rating}` : '4.5'}
                            </p>
                            <p className='product_review_count'>
                                {P_avil ? `${ratingCount}` : '120'}
                            </p>
                        </div>

                        {stock > 0 &&  user && 
                        
                        (
                            <button className='add_to_cart  gap-1.5 border bg-black border-green-300 rounded-md p-2 hover:bg-green-500'
                                    onClick={() => addToCart(product,1)}
                            >
                            
                                🧺
                            </button>
                        )
                        }


                    </footer>
                </div>
            </article>
        </>
    )
}

export default ProductCard