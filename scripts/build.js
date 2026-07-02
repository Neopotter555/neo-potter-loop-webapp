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
  "https://github.com/All-Hands-AI/OpenHands",
  "https://github.com/NousResearch/hermes-agent",
  "https://github.com/crewAIInc/crewAI",
  "https://github.com/Aider-AI/aider",
  "https://github.com/n8n-io/n8n",
  "https://github.com/langchain-ai/langgraph",
  "https://github.com/browser-use/browser-use",
  "https://github.com/punkpeye/awesome-mcp-servers",
  "https://github.com/eyaltoledano/claude-task-master",
  "https://github.com/The-Swarm-Corporation/AutoHedge",
  "https://github.com/HKUDS/Vibe-Trading",
  "https://github.com/Fincept-Corporation/FinceptTerminal",
  "https://github.com/danny-avila/LibreChat",
  "https://github.com/Anil-matcha/Open-Higgsfield-AI",
  "https://github.com/Open-LLM-VTuber/open-llm-vtuber",
  "https://github.com/AgriciDaniel/claude-ads",
  "https://github.com/cloudflare/agentic-inbox",
  "https://github.com/daijro/camoufox",
  "https://github.com/heygen-com/hyperframes",
  "https://github.com/Neopotter555/neo-potter-loop-webapp",
  "https://github.com/Neopotter555/eeg-hackathon-superai",
  "https://github.com/alexph-dev/Serenbrainwave",
  "https://github.com/openclaw/openclaw/releases/latest",
  "https://github.com/openclaw/openclaw/issues/87331",
  "https://github.com/openclaw/openclaw/pull/87272",
  "https://github.com/openclaw/openclaw/commit/42e9504"
];

const source = `${html}\n${app}`;
if (!source.includes("https://neo-caveman.netlify.app")) {
  throw new Error("Missing required Caveman web app link");
}

for (const link of requiredGithubLinks) {
  if (!source.includes(link)) {
    throw new Error(`Missing required GitHub link: ${link}`);
  }
}

const duplicateLinks = requiredGithubLinks.filter((link, index) => requiredGithubLinks.indexOf(link) !== index);
if (duplicateLinks.length) {
  throw new Error(`Duplicate required GitHub links: ${duplicateLinks.join(", ")}`);
}

console.log("Neo Potter Loop web app build verified.");
