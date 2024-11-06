// Importe les APIs readline et process du binaire de Node.js
import readline from 'node:readline';
import process from 'node:process';

// Namespace Object
// Plutôt une mauvaise pratique aujourd'hui
// Il vallait mieux garder 4 fonctions dans un module random.js
const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  },
}

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(' - '));
    }

    // Pose une question
    // et attend en async la réponse
    this.rl.question('Quel est le nombre ? ', (answer) => {
      console.log('Vous avez répondu : ' + answer);

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('ERREUR - il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// pile d'appel
// ^
// |                          [question]               [question]
// |[question]                [jouer   ]               [jouer   ]
// |[jouer   ]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbAnswer]⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳⟳ [cbAnswer]...
// +--------------------------ENTREE-------------------ENTREE------------------------------> temps
//
