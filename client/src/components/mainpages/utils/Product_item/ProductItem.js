import React, {useContext} from 'react'
import {GlobalState} from "../../../../GlobalState"
import {Link} from "react-router-dom"
import "./ProductItem.css"

function ProductItem({product, isAdmin}) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart

    return (
        <div className="product_card">
            {
             isAdmin && <input type="checkbox" checked={product.checked}/>
            }
           {/* <img src={product.images.url} alt=""/> */}
           <img src={product.images} alt=""/>
           <div className="product_box">
               <h2>{product.title}</h2>

               <span>${product.price}</span>
               <p>{product.description}</p>
           </div>
           <div className="row_btn">
           { isAdmin ? 
           <>
                <Link  id="btn_buy" to="#!" >
                    DELETE
                </Link>
                <Link id="btn_view" to={`/edit_product/${product._id}`}>
                    EDIT
                </Link>
                </>:
                <>
                <Link id="btn_buy" to="#!" onClick={()=>addCart(product)}>
                    ADD
                </Link>
                <Link id="btn_view" to={`/detail/${product._id}`}>
                    View
                </Link>
           </>
           }
           </div>
        </div>
    )
}

export default ProductItem
