import fs from "node:fs/promises";

// si on utilise les modules ESM (import/export)
try {
  const buffer = await fs.readFile("package.json");
  await fs.writeFile("package.json.copy", buffer);
  console.log("Copy Done");
} catch (err) {
  console.log("Erreur ", err.message);
}
