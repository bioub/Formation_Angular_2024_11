import fs from "node:fs/promises";

fs.readFile("package.json")
  .then((buffer) => {
    return fs.writeFile("package.json.copy", buffer);
  })
  .then(() => {
    console.log("Copy done");
  })
  .catch((err) => {
    console.log(err.message);
  });
