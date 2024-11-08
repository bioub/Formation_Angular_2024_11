import fs from "node:fs";

// 2 choses en plus
// - enchainer plusieurs opérations
// - gestion d'erreur centralisée

try {
  const buffer = fs.readFileSync("package.json");
  fs.writeFileSync("package.json.copy", buffer);
  console.log("Copy Done");
} catch (err) {
  console.log("Erreur ", err.message);
}

// Callback hell / Pyramid of Doom
fs.readFile("package.json", (err, buffer) => {
  if (err) {
    console.log("Erreur ", err.message);
  } else {
    fs.writeFile("package.json.copy", buffer, (err) => {
      if (err) {
        console.log("Erreur ", err.message);
      } else {
        console.log("Copy Done");
      }
    });
  }
});
