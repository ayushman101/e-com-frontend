import React from "react";
// import { useParams } from "react-router-dom";
import BasektCard from "./components/basketcard";
import cards from "./components/cards";
import "./basket.css"
import { Link } from "react-router-dom";


export default function Basket({basket,setbasket}){

    console.log(basket)

    const [total,settotal]=React.useState(0);


    let arrayofobjects=basket.map((id) => {

        const product_card=cards.find((card) => parseInt(id)===card.id)


        return product_card;

    })

    let arrayofcomponents=arrayofobjects.map((items) => (
        <BasektCard
                key={items.id}
                id={items.id}
                title={items.title}
                price={items.price}
                rating={items.Rating}
                image_path={items.path}
                about={items.detailed_title}
                setbasket={setbasket}

              />  
    ))


        React.useEffect(
            ()=>{

                settotal (
                    function(total){
                        total=0;
                        for(let i=0;i<arrayofobjects.length;i++)
                        {
                            total+=arrayofobjects[i].price;
                        }

                        return total;
                    }
                )
            },
            [basket.length]
        )



    return (
        <div className="basket">
            <div className="basketcards">
                {arrayofcomponents}
            </div>
            <div className="Checkout_column">
                <h1>Checkout</h1>
                <h2>Subtotal ({basket.length} items ): $ {total}</h2>
                
                <div className="giftcheck">
                    <input type="checkbox" name="gift_check" id="check_box"></input>
                    <label for="gift_check">This order contains a gift</label>

                </div>
                <Link to={`/paymentspage/${total}`}>
                <button className="checkoutbtn"> Proceed To Checkout </button>
                </Link>
            </div>
        </div>
    )
}