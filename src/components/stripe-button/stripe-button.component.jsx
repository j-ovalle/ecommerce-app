import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gv8STKaZoLsMrO10wTteuHPIdz0nZVg0EPv1CrgvQdBgUZtIvBGN1IXg4QKTKqAc4qeyCAypsfn6NDvvpkuxnQZ00yvp6cHGw';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Commerce Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;