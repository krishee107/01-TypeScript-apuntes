interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 3.5,
    song: 'The Beatles - Hey Jude',
    details: {
        author: 'The Beatles',
        year: 1968
    }
}

const { audioVolume, songDuration, song, details } = audioPlayer; // Desestructuración de objetos anidados en TypeScript 
const { author, year } = details; // Desestructuración de objetos anidados en TypeScript 

// console.log(`El volumen del audio es: ${audioVolume}`);
// console.log(`La duración de la canción es: ${songDuration}`);
// console.log(`La canción es: ${song}`);
// console.log(`El autor de la canción es: ${author}`);
// console.log(`El año de la canción es: ${year}`);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personajes de DBZ:', dbz);
console.log('Personaje 1:', dbz[0]); // Desestructuración de arreglos en TypeScript con [ ] y posiciones

const [, , personaje3] = dbz; // Desestructuración directamente en la declaración de la variable del elemento 3 
console.log('Personaje 3:', personaje3);

export { };