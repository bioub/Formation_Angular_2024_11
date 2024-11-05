// Importe les APIs readline et process du binaire de Node.js
import readline from 'node:readline';
import process from 'node:process';

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Configure readline pour lire sur le clavier
// et écrire dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi : ' + essais.join(' - '));
  }

  // Pose une question
  // et attend en async la réponse
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez répondu : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('ERREUR - il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}
jouer();

// pile d'appel
// ^
// |                          [question]               [question]
// |[question]                [jouer   ]               [jouer   ]
// |[jouer   ]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbAnswer]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbAnswer]...
// +--------------------------ENTREE-------------------ENTREE------------------------------> temps
//
