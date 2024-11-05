// portée globale
globalThis.myGlobalVar = 'myGlobalVar';

// portée script ou de module
const myModuleVar = 'myModuleVar';

// portée function (locale) / closure
function external() {
  const myClosureVar = 'myClosureVar';

  function internal() {
    const myLocalVar = 'myLocalVar';

    if (true) {
      const myBlockVar = 'myBlockVar';
      console.log(myBlockVar);
      console.log(myLocalVar);
      console.log(myClosureVar);
      console.log(myModuleVar);
      console.log(myGlobalVar);
    }

  }

  internal();
}

external();
// portée boucle/if (block) / closure
