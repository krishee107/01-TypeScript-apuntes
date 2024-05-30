function addNumbers(a: number, b: number) {
    return a + b;
}

addNumbers(1, 2);

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`; //Devuelve el resultado de la suma de a y b en formato string
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) { //firstNumber es obligatorio, secondNumber es opcional y base tiene un valor por defecto de 2 
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// console.log({ result }); //Muestra el resultado de la suma de 1 y 2 en la consola en formato objeto
// console.log(addNumberArrow(1, 2)); //Muestra el resultado de la suma de 1 y 2 en la consola en formato número
// const resultMultiply: number = multiply(5, 3);
// console.log({ resultMultiply });

interface Character {
    name: string;
    hp: number;
    showHp: () => void; //definiendo una función dentro de una interfaz 
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}


const newCharacter: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`); //Muestra en consola los puntos de vida del personaje
    }
}

newCharacter.showHp();
healCharacter(newCharacter, 20);
newCharacter.showHp();

export { };