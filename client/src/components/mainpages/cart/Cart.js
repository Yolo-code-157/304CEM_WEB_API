import React, {useContext} from 'react'
import {GlobalState} from "../../../GlobalState"
import {Link}  from "react-router-dom";

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    console.log(cart)

    if(cart.length === 0) 
        return <h2 style={{textAlign:'center' , fontSize:"5rem"}}>Cart Empty</h2>

    return (
        <div>
         {
             cart.map(product => (
                <div className="detail cart">
                    <img src={product.images} alt="" className="img_container"/>
                    <div className="box-detial">
                        
                        <h2>{product.title}</h2>
                            
                        <span>${product.price * product.quantity}</span>
                        <span>${product.price}</span><br/><br/>
                        <p>{product.content}</p><br/><br/><br/>
                        <p>{product.description}</p><br/><br/>

                        <div className="amount">
                            <button> - </button>
                            <span>{product.quantity}</span>
                            <button> + </button>
                        </div>

                        <div className="delete">
                            x
                        </div>

                        <p>Sold: {product.sold}</p><br/><br/>
                        <Link to="/cart" className="cart">BUY NOW</Link>
                    </div>
                </div>
            ))
         }
         <div className="total">
            <h4>Total: $ 0</h4>
            <Link to="#">Payment</Link>
         </div>
        </div>
    )
}

export default Cart
