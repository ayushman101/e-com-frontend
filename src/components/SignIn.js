import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"
export default function SignIn(){
        return (
            <div className="Primary">
                <div className="imagediv">
                    <Link to={`/`}>
                    <img id="img"src={require("../images/Amazon logo.png")} alt=""/>
                    </Link>
                </div>

                <div className="SignInbox">
                    <h2>Sign In</h2>
                    <label for="username">Username:</label>
                    <input type="email" name="username" ></input>
                    

                    <label for="pass">Password: </label>
                    <input type="password" name="pass"></input>

                    <button className="signInbtn">Sign In</button>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.Please See our Privacy Notice,Our Cookies Notice 
                    and our Internet based Ads Notice.

                    <button className="CreateAccount">Create Your Amazon Account</button>
                </div>
            </div>
        )
};