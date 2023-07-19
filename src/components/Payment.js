import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";


function Payment() {
    const [product, setProduct] = useState({
        name:"paracip",
        price:"10",
        productBy: 'Rishabh',
    });

    const makePayment = (token) => {

        console.log(token);
        const body = {
            token, 
            product,
        };

        const header = {
            "content-type": "application/json",
        };

        axios.post("http://localhost:3001/payments/payment", body, {headers: header})
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
    }



    return <div>
    <StripeCheckout stripeKey="pk_test_51NTKJISEZD8WET6JKzEwzPnYl7pZqM4SllfFeY6zs0yzrLxTkWVfVr2qHQaRm1y9Ri65pYILEn2GxhNl53J5mQRH00mzcI1gHa"
        token={makePayment}
        name="Buy me" /> 
    </div>
}

export default Payment;