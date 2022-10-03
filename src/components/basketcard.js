import React from "react";
// import Basket from "../Basket";
import "./basketcard.css";


export default function BasektCard(props) {

    function removeBasket(){
        props.setbasket((item) => {
            return item.filter(function(id){
                return id!==props.id;
            })
        })
    }

    return (
        <div className="Basket_Card">
        
        <div className="Product_image_div">
            <img src={props.image_path} alt="" className="Product_image"></img>
        </div>
        
        <div>
        
        <div className="Aboutitem">

            <span id="Card_title">{props.title}</span>
            <div className="price_tag">${props.price}</div>

                {props.about}
        </div>
            
            <div className="btn_div">
                <button className="Button" onClick={removeBasket}>Remove from Cart</button>
                {/* <button className="Button">Buy Now</button> */}
             </div>



        </div>
      
    </div>
    )
}