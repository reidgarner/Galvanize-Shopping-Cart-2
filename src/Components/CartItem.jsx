import React from 'react';

const CartItem = (props) => {
    var cartItems = props.cartItemsList.map(item => {
        return (
            <div class="collection-item">
                <div class="row">
                    <div class="col-md-8">{item.product.name}</div>
                    <div class="col-md-2">{item.product.priceInCents}</div>
                    <div class="col-md-2">{item.quantity}</div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {cartItems}
        </div>
    )
}

export default CartItem