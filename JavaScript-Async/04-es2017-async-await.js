import fs from "node:fs/promises";

async function copyPackageJson() {
  try {
    const buffer = await fs.readFile("package.json");
    await fs.writeFile("package.json.copy", buffer);
    console.log("Copy Done");
  } catch (err) {
    console.log("Erreur ", err.message);
  }
}

copyPackageJson();
