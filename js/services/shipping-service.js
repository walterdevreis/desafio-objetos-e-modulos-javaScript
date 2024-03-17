export function shipment(order) {

    let freight = 0.0;

    if(order.basic < 100.00){
        freight = 20.00;
    }
    else if(order.basic >= 100.00 && order.basic < 200.00){
        freight = 12.00;
    }
    else{
        freight = 0.0;
    }
    
    return freight;
}
