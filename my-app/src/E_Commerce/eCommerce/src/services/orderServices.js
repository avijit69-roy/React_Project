import apiclient from '../utils/api-client';

export function checkOutAPI(id, quantity) {
    return apiclient.post("/order/checkout")
}

export function myOrdersAPI() {
    return apiclient.get("/order")
}
 