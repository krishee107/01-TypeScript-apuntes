function classDecorator(constructor: any) { // Un decorador es una función que se ejecuta cuando se declara una clase. Se usa para modificar la clase o el constructor de la clase.
    return class extends constructor { // Se retorna una clase que extiende de la clase original 
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello';

    print() {
        console.log("Hello from SuperClass");
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);