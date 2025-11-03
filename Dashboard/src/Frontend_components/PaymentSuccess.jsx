import React from "react";
import { useLocation } from "react-router-dom";

function PaymentSuccess() {
    const query=new URLSearchParams(useLocation().search);
    const reference=query.get("reference");

  return (
    <div className="payment-success-container">
       <h1>Payment Successfull </h1>
         <p>Thank you for shopping with us</p>
            <p>Your order will be delivered soon</p>
            {reference && (
                <p className="pament-success-reference" ><strong>Your payment reference id:</strong> {reference}</p>
            )}
    </div>
    );
}

export default PaymentSuccess;