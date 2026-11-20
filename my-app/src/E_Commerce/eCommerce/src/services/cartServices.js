import apiclient from '../utils/api-client';

export function addToCartAPI(id, quantity) {
    return apiclient.post(`/cart/${id}`, { quantity:quantity })
}
 
export function getCartAPI(){
    return apiclient.get("/cart");
}

export function removeFromCartAPI(id){
    return apiclient.patch(`/cart/remove/${id}`);
}

export function increaseProductAPI(id){
    return apiclient.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id){
    return apiclient.patch(`/cart/decrease/${id}`);
}