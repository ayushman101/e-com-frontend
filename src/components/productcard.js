import React from "react";
import './productcard.css'
import { Link } from "react-router-dom";

export default function Product(props){
    // let i=0
    // for(i=0;i<props.rating;i++)
    //     stars+="⭐"
    const [stars,setstars]=React.useState("")

    React.useEffect( 

        ()=>{

            setstars( function (item) {
                item=""
                let i=0
                while(i<props.rating)
                    {  
                        item+="⭐"
                        i++;
                    }
                return item;
            })
        },
        [props.rating]
    )


    function addtobasket(){
        props.setbasket(function (item) {
            return [...item,props.id];
        })
    }
        

    
    return (
        <div className="Product_Card">
            <span id="Card_title">{props.title}</span>
            <div className="price_tag">${props.price}</div>
            <div className="Ratings">{stars}</div>

            <div className="Product_image_div">
            <Link to={`/${props.id}`} >
                <img src={props.image_path} alt="" className="Product_image"></img>
                
            </Link>
            
                <div className="Buttons_div">
                    <Link to={`/basket`}>
                    <button className="Button" onClick={addtobasket} >Add to Cart</button>
                    </Link>
                    <Link to={`/paymentspage/${props.price}`}>
                    <button className="Button">Buy Now</button>
                    </Link>
                 </div>
            
            </div>
          
        </div>
    )
}