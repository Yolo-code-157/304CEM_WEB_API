import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link}  from "react-router-dom";
import {GlobalState} from "../../../../GlobalState"
// import ProductItem from "../../utils/Product_item/ProductItem"

import "./DetailProduct.css"

function DetailProduct() {
    const params = useParams();
    const state = useContext(GlobalState)
    const [products]= state.productsAPI.products
    const[detailProduct,setDetailProduct] = useState([])

    useEffect(()=>{
        if(params){
            products.forEach(product =>{
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[products,params])

    console.log(DetailProduct)
    if(detailProduct.length === 0) return 0;

    return(
        <div className="detail">
            <img src={detailProduct.images.url} alt=""/>

            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.title}</h2>
                    <h6>{detailProduct.product._id}</h6>
                </div>
                <span>${detailProduct.price}</span>
                <p>{detailProduct.content}</p>
                <p>{detailProduct.description}</p>
                <p>Sold: {detailProduct.sold}</p>
                <Link to="/cart" className="cart">BUY NOW</Link>
            </div>
        </div>
    )
    
}

export default DetailProduct
