import React from "react";
import Product from "./productcard";
import cards from "./cards";
import "./home.css"

export default function Home({setbasket}){
    
    
    const thingselement=cards.map(items => (
        <Product 
                key={items.id}
                id={items.id}
                title={items.title}
                price={items.price}
                rating={items.Rating}
                image_path={items.path}
                setbasket={setbasket}

              />  
    ))
    
    return (
        <div className="Home_container">
            {thingselement}
        </div>
    )
}