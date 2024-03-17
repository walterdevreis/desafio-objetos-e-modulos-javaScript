import Order from './models/order.js';
import * as orderService from './services/order-service.js';

const pedido1 = document.getElementById("pedido-um").innerHTML.split('\n');
const pedido2 = document.getElementById("pedido-dois").innerHTML.split('\n');
const pedido3 = document.getElementById("pedido-tres").innerHTML.split('\n');

const order1 = new Order(Number(pedido1[0]), Number(pedido1[1]), Number(pedido1[2]));
const order2 = new Order(Number(pedido2[0]), Number(pedido2[1]), Number(pedido2[2]));
const order3 = new Order(Number(pedido3[0]), Number(pedido3[1]), Number(pedido3[2]));

const netOrder1 = orderService.total(order1);
const netOrder2 = orderService.total(order2);
const netOrder3 = orderService.total(order3);

console.log("SAÍDA DO PEDIDO 1:");
console.log(`Pedido código ${order1.code} \nValor total: R$ ${netOrder1.toFixed(2)}`);
console.log('\n');
console.log("SAÍDA DO PEDIDO 2");
console.log(`Pedido código ${order2.code} \nValor total: R$ ${netOrder2.toFixed(2)}`);
console.log('\n');
console.log("SAÍDA DO PEDIDO 3");
console.log(`Pedido código ${order3.code} \nValor total: R$ ${netOrder3.toFixed(2)}`);