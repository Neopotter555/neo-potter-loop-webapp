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
const app = await readFile("public/app.js", "utf8");
for (const asset of ["styles.css", "app.js", "loop-architect-hero.png"]) {
  if (!html.includes(asset)) {
    throw new Error(`index.html does not reference ${asset}`);
  }
}

const anchorTags = html.match(/<a\b[^>]*>/g) || [];
const startGuidedBuildLinksToTarget = anchorTags.some((tag) =>
  tag.includes('id="startGuidedBuild"') && tag.includes('href="#guided-build"')
);
if (!startGuidedBuildLinksToTarget) {
  throw new Error("Start Guided Build must be a real link to #guided-build");
}
if (!html.includes('id="guided-build"')) {
  throw new Error("Start Guided Build target #guided-build is missing");
}

const requiredGithubLinks = [
  "https://github.com/The-Swarm-Corporation/AutoHedge",
  "https://github.com/HKUDS/Vibe-Trading",
  "https://github.com/Fincept-Corporation/FinceptTerminal",
  "https://github.com/danny-avila/LibreChat",
  "https://github.com/Anil-matcha/Open-Higgsfield-AI",
  "https://github.com/Open-LLM-VTuber/open-llm-vtuber",
  "https://github.com/AgriciDaniel/claude-ads",
  "https://github.com/cloudflare/agentic-inbox",
  "https://github.com/daijro/camoufox",
  "https://github.com/heygen-com/hyperframes"
];

const source = `${html}\n${app}`;
for (const link of requiredGithubLinks) {
  if (!source.includes(link)) {
    throw new Error(`Missing required GitHub link: ${link}`);
  }
}

console.log("Neo Potter Loop web app build verified.");
