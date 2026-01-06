function Cart(localStorageKey){
    const cart = {
    cartItems: undefined,
    loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ||
    [
    {
        id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 3,
        deliveryOptionId: '1'
    },{
        id:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
        deliveryOptionId: '2'
    }
    ];
    },
    saveToStorage(){
    localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },
    addToCart(productId){
    let matchingProduct;
    this.cartItems.forEach((cartItem)=>{
    if(productId === cartItem.id){
        matchingProduct = cartItem;
    }
    });
    
    if(matchingProduct){
    matchingProduct.quantity += 1;
    }else{
    this.cartItems.push(
    {
        id: productId,
        quantity: 1,
        deliveryOptionId: '1'
    });
    }
    this.saveToStorage();
    },
    removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach(item => {
        if(item.id != productId){
        newCart.push(item);
        }
    })
    this.cartItems = newCart;
    this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId){
    let matchingProduct;
        this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.id){
            matchingProduct = cartItem;        
        }
        });
    
    matchingProduct.deliveryOptionId = deliveryOptionId;
    
    this.saveToStorage();
    }

    };

    return cart;

}

const cart = Cart('cart-oop');

const bussinessCart = Cart('cart-bussiness');
cart.loadFromStorage();
bussinessCart.loadFromStorage();
console.log(cart);
console.log(bussinessCart);








