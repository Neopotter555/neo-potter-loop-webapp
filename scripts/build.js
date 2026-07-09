import { access, stat, readFile } from "node:fs/promises";

const required = [
  "public/index.html",
  "public/styles.css",
  "public/app.js",
  "public/favicon.svg",
  "public/assets/loop-architect-hero.png",
  "NEXT_LEVEL_PROMPT.md"
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
const nextLevelPrompt = await readFile("NEXT_LEVEL_PROMPT.md", "utf8");
for (const asset of ["styles.css", "app.js", "favicon.svg", "loop-architect-hero.png"]) {
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
  "https://github.com/donnemartin/system-design-primer",
  "https://github.com/public-apis/public-apis",
  "https://github.com/sindresorhus/awesome",
  "https://github.com/codecrafters-io/build-your-own-x",
  "https://github.com/kamranahmedse/developer-roadmap",
  "https://github.com/EbookFoundation/free-programming-books",
  "https://github.com/jwasham/coding-interview-university",
  "https://github.com/OpenBB-finance/OpenBB",
  "https://github.com/AI4Finance-Foundation/FinGPT",
  "https://github.com/microsoft/qlib",
  "https://github.com/AI4Finance-Foundation/FinRL",
  "https://github.com/polakowo/vectorbt",
  "https://github.com/mementum/backtrader",
  "https://github.com/stefan-jansen/zipline-reloaded",
  "https://github.com/JerBouma/FinanceDatabase",
  "https://github.com/ranaroussi/yfinance",
  "https://github.com/TA-Lib/ta-lib-python",
  "https://github.com/harry0703/MoneyPrinterTurbo",
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
const legacyToken = "cave" + "man";
const forbiddenTerms = [
  `neo-${legacyToken}`,
  `Julius${"Brussee"}/${legacyToken}`,
  `Cave${legacyToken.slice(4)} Compression`,
  `Cave${legacyToken.slice(4)} compression`,
  `applyCave${legacyToken.slice(4)}`,
  `value="${legacyToken}"`
];

for (const term of forbiddenTerms) {
  if (source.includes(term)) {
    throw new Error(`Removed compressor path leaked back into source: ${term}`);
  }
}

const normalizedPrompt = nextLevelPrompt.toLowerCase();
const requiredPromptTerms = [
  "official docs",
  "no secrets",
  "human approval",
  "browser qa",
  "core web vitals",
  "npm run build",
  "npm test",
  "desktop and mobile"
];

for (const term of requiredPromptTerms) {
  if (!normalizedPrompt.includes(term)) {
    throw new Error(`NEXT_LEVEL_PROMPT.md is missing required gate: ${term}`);
  }
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

const githubUrls = [...source.matchAll(/https:\/\/github\.com\/[^"'`\s<)]+/g)].map((match) => match[0]);
const repeatedGithubUrls = githubUrls.filter((link, index) => githubUrls.indexOf(link) !== index);
if (repeatedGithubUrls.length) {
  throw new Error(`Repeated GitHub links in app source: ${[...new Set(repeatedGithubUrls)].join(", ")}`);
}

console.log("Neo Potter Loop web app build verified.");
