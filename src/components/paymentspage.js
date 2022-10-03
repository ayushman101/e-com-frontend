import React from "react";
import { useParams } from "react-router-dom";
import "./paymentspage.css"

export default function Payments() {

    const { total } = useParams();

    return (
        <div className="Paymentspage">
            <div className="paymentcontent">
                <h3>Total Payable Amount: $ {total}</h3>
                <div className="address">
                    <h4>Delivery Address:</h4>
                    A-4001 Janeshwar Apartments
                    <br/>
                    Jankipuram, Lucknow
                    <br/>
                    Uttar Pradesh
                </div>

                <div className="card_details">
                    <h4>Card details </h4>
                    <form>
                        <label htmlFor="cardnumber">CardNumber: </label>
                        <input type="text" name="cardnumber" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" title="Format=XXXX-XXXX-XXXX-XXXX"></input>

                        <label htmlFor="expiry">Expiry date: </label>
                        <input type="text" name="expiry" title="Format=mm/yy" id="expiryinput"></input>

                        {/* <br/> */}
                        <label htmlFor="CVV"> CVV: </label>
                        <input type="text" name="CVV" pattern="[0-9]{3}" title="Format : XXX" id="cvv"></input>


                        <input type="Submit" id="submit"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}