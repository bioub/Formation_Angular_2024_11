// Importe les APIs readline et process du binaire de Node.js
import readline from 'node:readline';
import process from 'node:process';

// Configure readline pour lire sur le clavier
// et écrire dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  // Pose une question
  // et attend en async la réponse
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez répondu : ' + answer);
    // Pour rejouer
    jouer();

    // rl.close(); // ou process.exit(); à faire en fin de partie
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
