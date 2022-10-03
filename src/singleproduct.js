import React from "react";
import { Link, useParams } from "react-router-dom";
import cards from "./components/cards";
import './single_product.css'

export default function SingleProduct({setbasket}){
    const {productid}=useParams();
    
    const product_card=cards.find((card) => parseInt(productid)===card.id)


    const [stars,setstars]=React.useState("")


    React.useEffect( 

        ()=>{

            setstars( function (item) {
                item=""
                let i=0
                while(i<product_card.Rating)
                    {  
                        item+="⭐"
                        i++;
                    }
                return item;
            })
        },
        [product_card.Rating]
    )

/////////////
    function addbasket(){
            setbasket(function (item) {
                return [...item,product_card.id]
            })
    }
////////////


    return (
        <div className="single_product_container">
           
           
            <div className="img_container">
            <img src={product_card.path} alt=""  className="product_img"></img>
            </div>
           
            <div className="product_details_container">
           
            {/* <span>{product_card.id}</span> */}
           
            <h2 className="prodcut_card_title">{product_card.detailed_title}</h2>

            <span className="product_card_rating">{stars}</span>

            <span>${product_card.price}</span>
            <span><small>INCLUSIVE OF ALL TAXES</small></span>
  
            <div className="product_btns">
                <Link to={`/basket`}>
                <button  id="add_btn" onClick={addbasket} >Add to Basket</button>
                </Link>
                <Link to={`/paymentspage/${product_card.price}`}>
                <button  id="buy_btn">Buy Now</button>
                </Link>
            
            </div>

            <div className="product_about">
                <h4>ABOUT ITEM:</h4>
                <span>
                    {product_card.about}
                </span>
                </div>
            </div>
        
        </div>
    )
}