export const cart = [];
export function addToCart(productId){
     let matchingId;
    cart.forEach((id)=>{
      if(productId === id.productId){
        matchingId = id;
      }
    });
    
    if(matchingId){
      matchingId.quantity += 1;
    }else{
      cart.push(
      {
        productId: productId,
        quantity: 1
      });
    }
};