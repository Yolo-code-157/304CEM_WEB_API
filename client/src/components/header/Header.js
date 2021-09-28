import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import {Link} from "react-router-dom";

import Menu from "./icons/bar.svg";
import Cart from "./icons/cart.svg";
import Close from "./icons/close.svg";
import "./Header.css"

function Header(){
    const value = useContext(GlobalState)
    return(
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30"/>
            </div>
            <div className="logo">
                <h1>
                    <Link to="/">My Shop</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/login">Login & Register</Link></li>
                <li>
                    <img src={Close} alt="" width="30" />
                </li>
            </ul>
            <div className="cart-icon">
                <span>0</span>
                <Link to="">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
        </header>
    )
}

export default Header