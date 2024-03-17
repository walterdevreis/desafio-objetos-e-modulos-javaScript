import * as shippingService from './shipping-service.js'

export function total(order) {

    const freight = shippingService.shipment(order);
    
    return (order.basic - (order.basic * order.discount / 100.00)) + freight;
}
