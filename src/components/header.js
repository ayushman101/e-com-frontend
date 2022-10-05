import React from "react";
import logo from "../amazon-logo.png"
import search from "../search-img.png"
import "./Header.css"
import { Link, Outlet } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <div className="Header-container">
                <div className="Header-logo">
                    <Link to="/">
                        <img src={logo} alt="" id="amazon-logo"></img>
                    </Link>
                </div>


                <div className="Header-input">
                    <input name="search-bar" type="text" id="search-input">
                    </input>
                    <img src={search} alt="" id="search-logo"></img>
                </div>


                <div className="Header-nav">
                    
                    <div className="Header-option">
                    
                        <span><small>Hello</small></span>
                    <Link to={`/SignIn`} style={{textDecoration:'none'}}>
                        <span className="alink">SignIn</span>
                        </Link>

                    </div>
                  

                    <div className="Header-option">
                        <small>Returns&</small>
                        <span>Orders</span>
                    </div>


                    <div className="Header-option">
                        <small>Your</small>
                        <span>Prime</span>
                    </div>


                    <div className="Header-option">

                        <Link to="/basket">
                            <img src={require("../basket.png")} alt="" id="basket_icon"></img>
                        </Link>

                    </div>

                    <span className="Header-option basket_count">0</span>

                </div>

            </div>

         <Outlet />
        </div>
    )
}