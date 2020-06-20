import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51Gv1BWBYNchXhLDn3oMJNbZfucH92l3gcgs1raKqY3XbQEXDNh7Aex2H5pBTeLfYYkbdZGqtBR5J1slMPXZOXH1600T5qyySwD";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful!!");
    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total amount is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;