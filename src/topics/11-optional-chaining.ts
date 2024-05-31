export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Carlos'
}

const passenger2: Passenger = {
    name: 'Carlos',
    children: ['Carlos Jr', 'Carlos Jr 2']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || "No tiene hijos"; // Optional chaining. Si no existe children, no se ejecuta length

    // const howManyChildren = passenger.children!.length; // Non-null assertion operator. Le decimos a TS que estamos seguros que children existe y que no es null ni undefined 
    console.log(howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);