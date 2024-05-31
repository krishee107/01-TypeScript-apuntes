export class Person {
    //VERSION LARGA
    // public name: string; // Se puede acceder a esta propiedad desde fuera de la clase
    // public address: string;
    // // private tlf: number; // No se puede acceder a esta propiedad desde fuera de la clase

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;

    // }

    //VERSION CORTA
    constructor(public name: string, public address: string = 'No address') { }
}

// export class Hero extends Person { // Herencia -> Hero hereda de Person todas las propiedades y métodos de la clase Person y las propias de Hero 
//     constructor(
//         public alterEgo: string,
//         public age: string = 'No age',
//         public realName: string = 'No real name'
//     ) {
//         super( // Llama al constructor de la clase padre (Person) para poder acceder a sus propiedades
//             realName, "Metropolis"
//         );
//     }

// }

export class Hero {
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: string,
        public realName: string,
        public person: Person
    ) {
        this.person = new Person(realName, "Metropolis");
    }

}

const person = new Person('John Doe', '123 Main St');
const hero = new Hero('Superman', '30', 'Clark Kent', person);

console.table(person);
console.table(hero);