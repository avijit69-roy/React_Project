import React, { useEffect ,useState,useContext} from 'react'
import './CartPage.css'
import user from '../../assets/user-default.jpg'
import Table from '../Common/Table'
import QuantityInput from '../SingleProduct/QuantityInput'
import DataContext from '../../contexts/UserContext'
import CartContext from '../../contexts/CartContext'
import { Delete  } from 'lucide-react'
import { checkOutAPI } from '../../services/orderServices'
import { toast } from 'react-toastify'

const CartPage = () => {
    const [subTotal, setsubTotal] = useState(0)
    
    const {cart,addToCart,removeFromCart,updateCart,setCart} = useContext(CartContext);
    const userObj = useContext(DataContext);

    const checkOut = async () =>{
        const oldCart = [...cart];
        try{
            setCart([]);
            const respnse=await checkOutAPI();
            toast.success("Order placed successfully!");   
        }
        catch(error){
            toast.error("Failed to placed order");
            setCart(oldCart);
        }
    }

    useEffect(() => {
        let total = 0;
        cart.forEach(item=>{
            total += item.product.price * item.quantity;
        })
        setsubTotal(total);
    }, [cart])


    return (
        <>
            <section className="cart_page align_center ">
                <div className='user_info align_center'>
                    <img src={userObj?.profilePicture || user} alt='user_profile'
                    />
                    <div >
                        <p className='user_name '>Name : {userObj?.name || 'Guest'}</p>
                        <p className='user_email '>Email : {userObj?.email || 'Not available'}</p>
                    </div>
                </div>

                {/* Cart Table */}
                <Table headings={["item", "Price", "Quantity", "Total", "Remove"]}>
                    <tbody>
                        {
                            cart.map(({product, quantity}) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td className='align_center h-12 justify-center table_quantity_input'>
                                            <QuantityInput 
                                                Quantity={quantity} 
                                                stock={product.stock} 
                                                updateCart={updateCart}
                                                cartPage={true}
                                                productId={product._id}
                                                />
                                        </td>
                                        <td>${(product.price * quantity)}</td>
                                        <td>
                                            <button className='remove_button' onClick={() => removeFromCart(product._id)}>
                                                <Delete size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>


                <table className="cart_bill">
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>${subTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping Charge</td>
                            <td>$5</td>
                        </tr>
                        <tr className="cart_total">
                            <td>Total</td>
                            <td>${(subTotal + 5).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <button className="search_button  checkout_button"
                    onClick={() => checkOut()}
                >  
                
                    Checkout
                </button>
            </section>
        </>
    )
}

export default CartPage