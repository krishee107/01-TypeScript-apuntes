interface Product {
    description: string;
    price: number;
}

const Phone: Product = {
    description: 'iPhone 12',
    price: 1200
}

const Tablet: Product = {
    description: 'iPad Pro',
    price: 800
}

const Macbook: Product = {
    description: 'Macbook Pro',
    price: 2000
}

interface TaxCalculationOptions { // Creación de una interfaz para definir los tipos de datos que se esperan en la función
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * options.tax];
}

const shoppingCart = [Phone, Tablet, Macbook];
const tax = 0.15;

const [total, ttax] = taxCalculation({
    tax,
    products: shoppingCart
});

console.log(`Total: ${total}, Tax: ${ttax}`);

export { };