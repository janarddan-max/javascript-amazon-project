import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
// import '../data/cart-class.js'
// import '../data/backend-practice.js'
import { loadProducts } from '../data/products.js';
import {loadCart} from '../data/cart.js'


 Promise.all([
    new Promise((resolve)=>{
        loadProducts(()=>{
            resolve();
        });
    }),

    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })

 ]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
 });


/*
 new Promise((resolve)=>{
    console.log('hii..');
    loadProducts(()=>{
        resolve();
    });

 }).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();           
        });
    });

 }).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
 })

*/

 /*
loadProducts(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
*/
