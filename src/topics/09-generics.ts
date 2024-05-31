export function whatsMyType<T>(arg: T): T { // T es un tipo genérico que se puede usar en la función para definir el tipo de argumento y el tipo de retorno de la función. Un generico es cualquier tipo de dato que se puede usar en la función. 


    return arg;
}

let amIString = whatsMyType<string>('Hello'); // Se especifica el tipo de dato que se va a usar en la función
let amINumber = whatsMyType(100);
let amIArray = whatsMyType([1, 2, 3]);
let amIObject = whatsMyType({ name: 'John Doe' });
let amIFunction = whatsMyType(() => console.log('Hello'));

console.log(amIString.split(''));
console.log(amINumber.toFixed(2));
console.log(amIArray.map((item: number) => item * 2));
console.log(amIObject.name);
console.log(amIFunction);
