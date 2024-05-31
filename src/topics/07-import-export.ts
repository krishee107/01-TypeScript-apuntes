import { Product, taxCalculation } from './06-function-detructuring';

const shoppingCat: Product[] = [
    {
        description: 'iPhone 12',
        price: 1200
    },
    {
        description: 'iPad Pro',
        price: 800
    },
    {
        description: 'Macbook Pro',
        price: 2000
    }
];

const [total, ttax] = taxCalculation({ tax: 0.15, products: shoppingCat });

console.log(`Total: ${total}, Tax: ${ttax}`);