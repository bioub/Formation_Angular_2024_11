import fs from 'node:fs';

// Sync
// Simple à lire et à écrire : le code se lit dans l'ordre des lignes
// Bloque le thread le temps de l'opération
const buffer = fs.readFileSync('package.json');
console.log(buffer.toString('utf-8'));

// Async
// Plus difficile à lire et à écrire :
// l'ordre des lignes 13, 16 puis plus tard 14
// Performant : le thread est dispo le temps de l'opération
fs.readFile('package.json', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('after readFile')
