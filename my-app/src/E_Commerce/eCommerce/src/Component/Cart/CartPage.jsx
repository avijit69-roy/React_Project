import React from 'react'
import './CartPage.css'
import user from '../../assets/user-default.jpg'
import Table from '../Common/Table'
import QuantityInput from '../SingleProduct/QuantityInput'
const CartPage = () => {
    return (
        <>
            <section className="cart_page align_center ">
                <div className='user_info align_center'>
                    <img src={user} alt='user_profile'
                    />
                    <div >
                        <p className='user_name '>Name : Harley</p>
                        <p className='user_email '>Email harley@gamil.com</p>
                    </div>
                </div>

                {/* Cart Table */}
                <Table headings ={["item","Price" ,"Quantity" , "Total", "Remove"]}>
                    <tbody>
                        <tr>
                            <td>IPhone</td>   
                            <td>$999</td>   
                            <td className='align_center h-12 justify-center table_quantity_input'>
                                <QuantityInput/>
                            </td>   
                            <td>$999</td>   
                            <td>Remove</td>   
                        </tr>
                    </tbody>
                </Table>


                <table className="cart_bill">
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$1000</td>
                        </tr>
                        <tr>
                            <td>Shipping Charge</td>
                            <td>$5</td>
                        </tr>
                        <tr className="cart_total">
                            <td>Total</td>
                            <td>$1005</td>
                        </tr>
                    </tbody>
                </table>

                <button className="search_button  checkout_button">
                    Checkout
                </button>
            </section>
        </>
    )
}

export default CartPage