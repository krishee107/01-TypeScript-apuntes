const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    name: string;
    hp: number;
    skills: string[];
    isAlive: boolean;
    hometown?: string;
}

const personaje: Personaje = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
    isAlive: true
};

personaje.hometown = 'Barcelona';

console.table(personaje);

export { };