import { access, stat, readFile } from "node:fs/promises";

const required = [
  "public/index.html",
  "public/styles.css",
  "public/app.js",
  "public/assets/loop-architect-hero.png"
];

for (const file of required) {
  await access(file);
  const info = await stat(file);
  if (!info.size) {
    throw new Error(`${file} is empty`);
  }
}

const html = await readFile("public/index.html", "utf8");
for (const asset of ["styles.css", "app.js", "loop-architect-hero.png"]) {
  if (!html.includes(asset)) {
    throw new Error(`index.html does not reference ${asset}`);
  }
}

console.log("Neo Potter Loop web app build verified.");
