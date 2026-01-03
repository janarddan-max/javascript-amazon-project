import {cart} from '../../data/cart.js';

export function renderCheckoutHeader(){
    let totalItems = 0;
    cart.forEach((item )=> {
        totalItems += item.quantity;
    });
    const checkoutHeaderHTML = `
    Checkout (<a class="return-to-home-link"
            href="amazon.html">${totalItems} items</a>)
    `;
    document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML;
}