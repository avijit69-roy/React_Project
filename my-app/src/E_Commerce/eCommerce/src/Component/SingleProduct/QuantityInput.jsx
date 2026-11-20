import React,{useState} from 'react'
import './QuantityInput.css'

function QuantityInput({Quantity,setQuantity,stock,productId,cartPage,updateCart}) {
    return (
        <>
            <button className="quantity_input_button"  disabled={Quantity <= 1} 
                    onClick={()=>{cartPage? updateCart("decrease",productId):setQuantity(Quantity-1)}}>
                -
            </button> 

            <p className='quantity_input_count'> {Quantity} </p>

            <button className="quantity_input_button" disabled={Quantity >= stock} 
                    onClick={()=>{cartPage? updateCart("increase",productId):setQuantity(Quantity+1)}} > 
                    + 
            </button>
        
        </>
    )
}

export default QuantityInput