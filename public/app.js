const templates = {
  content: {
    title: "Content Creation Loop",
    objective: "Turn raw ideas into clear, enlightened content that people can understand, trust, and follow.",
    metric: "The output is clear, useful, emotionally grounded, and ready to publish.",
    boundary: "Ask Neo before publishing, spending money, or making public promises.",
    actions: ["Collect raw ideas, voice notes, links, and drafts.", "Shape them into simple language with spiritual depth and practical direction.", "Check for clarity, truth, usefulness, and alignment with Neo Potter voice.", "Prepare final posts, pages, scripts, or ebook sections for human approval.", "Save the lesson learned so the next output becomes sharper."]
  },
  product: {
    title: "Product Improvement Loop",
    objective: "Scan active products and find the next useful upgrade that improves trust, conversion, or daily usability.",
    metric: "The product becomes easier to use, clearer to understand, and closer to revenue.",
    boundary: "Ask Neo before changing pricing, deleting content, or touching external accounts.",
    actions: ["Inspect the live product and current files.", "Find friction, missing clarity, broken flows, and monetization gaps.", "Implement the smallest meaningful improvement.", "Test the result on desktop and mobile.", "Report the upgrade, proof, and next high-leverage move."]
  },
  marketing: {
    title: "Marketing Expansion Loop",
    objective: "Transform trends, insights, and product truth into grounded campaigns that attract aligned people.",
    metric: "The campaign feels honest, specific, emotionally resonant, and commercially useful.",
    boundary: "Ask Neo before posting publicly or making claims that need proof.",
    actions: ["Scan relevant trends, audience pain, and competitor positioning.", "Extract the signal that matches Neo's mission.", "Create angles, hooks, offers, and distribution assets.", "Review for integrity, simplicity, and resonance.", "Package the best campaign for approval and launch."]
  },
  memory: {
    title: "Memory And Strategy Loop",
    objective: "Keep long-term decisions, lessons, project context, and strategy clean enough to guide future action.",
    metric: "Important context is easy to retrieve and outdated context does not confuse the next decision.",
    boundary: "Do not store secrets unless Neo explicitly asks.",
    actions: ["Review recent work, messages, and project changes.", "Separate noise from decisions, lessons, and commitments.", "Update durable memory and project notes.", "Remove or mark outdated assumptions.", "Use the refreshed memory to guide the next execution cycle."]
  },
  quality: {
    title: "Quality Review Loop",
    objective: "Review apps, books, pages, and files for clarity, function, trust, and completion before they reach people.",
    metric: "The work is understandable, polished, tested, and aligned with the promise.",
    boundary: "Ask Neo before changing the creative direction or removing major sections.",
    actions: ["Open the work like a real user or reader.", "Check clarity, layout, links, mobile fit, and emotional tone.", "Find anything confusing, broken, weak, or untrustworthy.", "Fix what is clearly safe to fix.", "Send a short review with what changed and what still needs judgment."]
  },
  workshop: {
    title: "Code With Consciousness Loop",
    signal: "Inspired by Boris Cherny's Code with Claude Tokyo signal: agentic work is becoming a live builder culture.",
    objective: "Create a workshop experience that teaches people to command intelligent systems with clarity, values, and direction.",
    metric: "Each participant leaves with one useful AI loop they can run for creation, business, healing, memory, or product building.",
    boundary: "Do not promise transformation without practice, ethics, and human responsibility.",
    actions: ["Open with the shift from prompting to living systems.", "Guide the participant to choose one mission worth automating.", "Define the objective, success signal, and human boundary.", "Generate the loop blueprint and test it against a real use case.", "Close with the Neo Potter principle: wisdom above the machine."]
  },
  bottleneck: {
    title: "Flow-Aware Intelligence Loop",
    signal: "Inspired by FlashAttention: stronger intelligence comes from designing around the real bottleneck, not adding more waste.",
    objective: "Find the main bottleneck in a project, workflow, business, or personal system, then redesign the flow around what matters most.",
    metric: "The system becomes lighter, faster, clearer, and easier to repeat without leaking attention, time, or energy.",
    boundary: "Do not optimize blindly; preserve human values, quality, health, and long-term trust.",
    actions: ["Map the current flow from input to result.", "Name the biggest bottleneck: attention, memory, money, skill, emotion, trust, or execution.", "Remove one unnecessary read, write, step, meeting, tool, or decision.", "Move the important signal closer to the place where action happens.", "Run the lighter flow once and compare speed, clarity, and usefulness."]
  },
  masterclass: {
    title: "Mini Masterclass Loop",
    signal: "Inspired by the Claude masterclass signal: people need a simple learning path from beginner to automation operator.",
    objective: "Guide a user through their first living AI system: understand the shift, choose a mission, set the standard, find the bottleneck, build the loop, and export the blueprint.",
    metric: "The user leaves with one clear loop they understand well enough to run, improve, and teach to someone else.",
    boundary: "Keep the path beginner-friendly; do not bury the user in tool jargon, hype, or unnecessary technical detail.",
    actions: ["Teach the shift from prompt to loop in plain language.", "Help the user choose one useful mission instead of ten scattered ideas.", "Define the success signal and human boundary before automation begins.", "Find the bottleneck that blocks flow or wastes attention.", "Generate, export, and refine the first living AI system."]
  },
  pathfinder: {
    title: "AI Path Finder Loop",
    signal: "Inspired by the Claude guide library signal: people learn faster when they can choose the next right doorway.",
    objective: "Route a user to the most useful AI learning path based on what they want to build, automate, write, design, or improve.",
    metric: "The user knows exactly which path to start with and how that resource connects to one practical loop they can run.",
    boundary: "Do not overwhelm the user with every resource at once; recommend only the path that matches the current goal.",
    actions: ["Ask what the user wants to create, fix, automate, or learn.", "Choose the closest doorway: Start, Build, Automate, Create, Design, or Team.", "Recommend the smallest useful resource set for that doorway.", "Turn the learning into one simple loop blueprint.", "Save the next step so progress continues after the first session."]
  },
  safeloop: {
    title: "Safe Loop Gates",
    signal: "Inspired by Loops Explained: prompting by hand is outdated, but a loop without a checking gate can waste the whole night.",
    objective: "Design an AI loop with a clear gate that can reject weak work, send it back, stop safely, or ask a human for approval.",
    metric: "The loop only continues when the output passes a test, source check, rubric, balance check, or human approval point.",
    boundary: "Money, publishing, deletion, deployment, legal claims, medical advice, and irreversible actions must stop at a human door.",
    actions: ["Define the task the loop should keep moving without constant prompting.", "Choose the resistance gate: test, source, rubric, balance, budget, or human approval.", "Set retry limits, token limits, and a safe stopping condition.", "Send failed work back as the next instruction with the reason it failed.", "Remember the failure pattern so the next cycle starts smarter."]
  },
  virallab: {
    title: "Viral Open-Source Stack Loop",
    signal: "Inspired by the Comment BUILD Instagram pattern: package useful open-source tools, create a clear social hook, and turn attention into a helpful follow-up.",
    objective: "Turn viral AI tool research into a creator-friendly lead magnet that helps people discover useful open-source stacks without drowning in noise.",
    metric: "The output names the audience, promise, proof, tool stack, comment trigger, follow-up material, and human approval gate before anything is posted.",
    boundary: "Do not auto-DM, scrape private accounts, spam comments, or publish affiliate claims without human approval and platform-safe consent.",
    actions: ["Research useful open-source tools and check what each one genuinely replaces.", "Package the strongest stack into a simple hook, visual, caption, and comment trigger.", "Build the free guide or resource that gets delivered when someone asks for it.", "Check claims, links, privacy, and platform rules before the campaign goes live.", "Track saves, comments, replies, and conversions, then improve the next post."]
  },
  arsenal: {
    title: "Open-Source Arsenal Loop",
    signal: "Inspired by the 10-tool GitHub stack: useful builders do not need more hype; they need a clear map from tool to use case to safe execution.",
    objective: "Help a founder, creator, or operator choose the right open-source AI tool stack, open the GitHub source, and turn it into one practical workflow.",
    metric: "The user understands what each tool is for, which repo to inspect, what risk to check, and what first experiment to run.",
    boundary: "Do not treat trading, ad spend, scraping, inbox access, or automation as plug-and-play. Test locally, protect credentials, and keep human approval on high-risk actions.",
    actions: ["Choose the use case: finance, research, chat, media, companion, ads, inbox, browser automation, or video.", "Open the matching GitHub repo and check license, setup, activity, and security notes.", "Pick one tiny first experiment that can run without risking money, accounts, or private data.", "Add a safety gate for credentials, costs, platform rules, and human approval.", "Save the working stack as a reusable builder recipe."],
    resources: [
      ["AutoHedge", "https://github.com/The-Swarm-Corporation/AutoHedge"],
      ["Vibe Trading", "https://github.com/HKUDS/Vibe-Trading"],
      ["Fincept Terminal", "https://github.com/Fincept-Corporation/FinceptTerminal"],
      ["LibreChat", "https://github.com/danny-avila/LibreChat"],
      ["Open Higgsfield AI", "https://github.com/Anil-matcha/Open-Higgsfield-AI"],
      ["Open LLM VTuber", "https://github.com/Open-LLM-VTuber/open-llm-vtuber"],
      ["Claude Ads", "https://github.com/AgriciDaniel/claude-ads"],
      ["Agentic Inbox", "https://github.com/cloudflare/agentic-inbox"],
      ["Camoufox Browser", "https://github.com/daijro/camoufox"],
      ["Hyperframes", "https://github.com/heygen-com/hyperframes"]
    ]
  },
  custom: {
    title: "Custom Living Loop",
    objective: "Create a repeatable intelligent system around the mission Neo chooses.",
    metric: "Every cycle produces a clearer result, a useful decision, or a concrete next action.",
    boundary: "Stop and ask when the action becomes public, financial, destructive, or uncertain.",
    actions: ["Gather the current state.", "Decide the next useful action.", "Execute inside the boundary.", "Check the result against the success signal.", "Improve the loop and repeat."]
  }
};

const fields = {
  loopType: document.querySelector("#loopType"),
  objective: document.querySelector("#objective"),
  metric: document.querySelector("#metric"),
  boundary: document.querySelector("#boundary"),
  output: document.querySelector("#blueprintOutput"),
  steps: document.querySelector("#loopSteps"),
  saveStatus: document.querySelector("#saveStatus"),
  toast: document.querySelector("#toast")
};

const buttons = {
  generate: document.querySelector("#generateBlueprint"),
  reset: document.querySelector("#resetLoop"),
  copy: document.querySelector("#copyBlueprint"),
  copyTop: document.querySelector("#copyBlueprintTop"),
  download: document.querySelector("#downloadBlueprint"),
  theme: document.querySelector("#themeToggle"),
  applyTokyoSignal: document.querySelector("#applyTokyoSignal"),
  applyBottleneckSignal: document.querySelector("#applyBottleneckSignal"),
  applyMasterclassSignal: document.querySelector("#applyMasterclassSignal"),
  applyPathSignal: document.querySelector("#applyPathSignal"),
  applyPathfinderSignal: document.querySelector("#applyPathfinderSignal"),
  applySafeLoopSignal: document.querySelector("#applySafeLoopSignal"),
  applyGateSignal: document.querySelector("#applyGateSignal"),
  applyViralSignal: document.querySelector("#applyViralSignal"),
  applyViralLabSignal: document.querySelector("#applyViralLabSignal"),
  applyArsenalSignal: document.querySelector("#applyArsenalSignal"),
  applyArsenalStack: document.querySelector("#applyArsenalStack")
};

const storageKey = "neo-potter-loop-engine";
let currentBlueprint = "";

function getRhythm() {
  return document.querySelector("input[name='rhythm']:checked")?.value || "daily";
}

function setRhythm(value) {
  const radio = document.querySelector(`input[name='rhythm'][value="${value}"]`);
  if (radio) radio.checked = true;
}

function rhythmLine(value) {
  if (value === "weekly") return "Run once a week, then compound the lessons into the next cycle.";
  if (value === "always-on") return "Run continuously in the background, surfacing only the decisions that need human wisdom.";
  return "Run daily, complete one useful cycle, and return with the clearest next move.";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);
}

function blueprintText() {
  const template = templates[fields.loopType.value];
  const objective = fields.objective.value.trim() || template.objective;
  const metric = fields.metric.value.trim() || template.metric;
  const boundary = fields.boundary.value.trim() || template.boundary;
  const rhythm = getRhythm();

  return {
    template,
    objective,
    metric,
    boundary,
    rhythm,
    markdown: `# ${template.title}

## Neo Potter Frame
Stop prompting. Start creating living systems.

The human chooses the mission. The system handles repetition. Wisdom stays above the machine.
${template.signal ? `\n## Field Signal\n${template.signal}\n` : ""}

## Objective
${objective}

## Success Signal
${metric}

## Human Boundary
${boundary}

## Operating Rhythm
${rhythmLine(rhythm)}

## Loop Movements
${template.actions.map((action, index) => `${index + 1}. ${action}`).join("\n")}
${template.resources ? `\n## GitHub Links\n${template.resources.map(([name, url], index) => `${index + 1}. ${name}: ${url}`).join("\n")}\n` : ""}

## Final Principle
Vision first. System second. Automation third. Human wisdom always above the machine.
`
  };
}

function renderBlueprint() {
  const blueprint = blueprintText();
  currentBlueprint = blueprint.markdown;

  fields.output.innerHTML = `
    <section class="blueprint-block">
      <h3>Neo Potter Frame</h3>
      <p>Stop prompting. Start creating living systems. The human chooses the mission. The system handles repetition. Wisdom stays above the machine.</p>
    </section>
    ${blueprint.template.signal ? `
    <section class="blueprint-block">
      <h3>Field Signal</h3>
      <p>${escapeHtml(blueprint.template.signal)}</p>
    </section>
    ` : ""}
    <section class="blueprint-block">
      <h3>Objective</h3>
      <p>${escapeHtml(blueprint.objective)}</p>
    </section>
    <section class="blueprint-block">
      <h3>Success Signal</h3>
      <p>${escapeHtml(blueprint.metric)}</p>
    </section>
    <section class="blueprint-block">
      <h3>Human Boundary</h3>
      <p>${escapeHtml(blueprint.boundary)}</p>
    </section>
    <section class="blueprint-block">
      <h3>Operating Rhythm</h3>
      <p>${escapeHtml(rhythmLine(blueprint.rhythm))}</p>
    </section>
    ${blueprint.template.resources ? `
    <section class="blueprint-block">
      <h3>GitHub Links</h3>
      <ul class="resource-list">
        ${blueprint.template.resources.map(([name, url], index) => `
          <li>
            <span>${index + 1}. ${escapeHtml(name)}</span>
            <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(url.replace("https://github.com/", "github.com/"))}</a>
          </li>
        `).join("")}
      </ul>
    </section>
    ` : ""}
  `;

  fields.steps.innerHTML = blueprint.template.actions.map((action) => `
    <li>
      <div class="step-header">${escapeHtml(action.split(" ").slice(0, 4).join(" "))}</div>
      <p>${escapeHtml(action)}</p>
    </li>
  `).join("");

  saveState();
}

function saveState() {
  const state = {
    loopType: fields.loopType.value,
    objective: fields.objective.value,
    metric: fields.metric.value,
    boundary: fields.boundary.value,
    rhythm: getRhythm(),
    theme: document.documentElement.dataset.theme || "dark"
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
  fields.saveStatus.textContent = "Saved locally";
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const state = JSON.parse(raw);
    fields.loopType.value = state.loopType || "content";
    fields.objective.value = state.objective || templates.content.objective;
    fields.metric.value = state.metric || templates.content.metric;
    fields.boundary.value = state.boundary || templates.content.boundary;
    setRhythm(state.rhythm || "daily");
    if (state.theme === "light") document.documentElement.dataset.theme = "light";
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function applyTemplate() {
  const template = templates[fields.loopType.value];
  fields.objective.value = template.objective;
  fields.metric.value = template.metric;
  fields.boundary.value = template.boundary;
  renderBlueprint();
}

function toast(message) {
  fields.toast.textContent = message;
  fields.toast.classList.add("show");
  window.setTimeout(() => fields.toast.classList.remove("show"), 2200);
}

async function copyBlueprint() {
  await navigator.clipboard.writeText(currentBlueprint || blueprintText().markdown);
  toast("Blueprint copied");
}

function downloadBlueprint() {
  const blob = new Blob([currentBlueprint || blueprintText().markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "neo-potter-loop-blueprint.md";
  anchor.click();
  URL.revokeObjectURL(url);
  toast("Markdown exported");
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  if (next === "light") {
    document.documentElement.dataset.theme = "light";
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  saveState();
}

fields.loopType.addEventListener("change", applyTemplate);
[fields.objective, fields.metric, fields.boundary].forEach((field) => {
  field.addEventListener("input", () => {
    fields.saveStatus.textContent = "Saving...";
    renderBlueprint();
  });
});
document.querySelectorAll("input[name='rhythm']").forEach((radio) => {
  radio.addEventListener("change", renderBlueprint);
});

buttons.generate.addEventListener("click", () => {
  renderBlueprint();
  toast("Blueprint generated");
});
buttons.reset.addEventListener("click", applyTemplate);
buttons.copy.addEventListener("click", copyBlueprint);
buttons.copyTop.addEventListener("click", copyBlueprint);
buttons.download.addEventListener("click", downloadBlueprint);
buttons.theme.addEventListener("click", toggleTheme);
buttons.applyTokyoSignal.addEventListener("click", () => {
  fields.loopType.value = "workshop";
  setRhythm("weekly");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Tokyo signal applied");
});
buttons.applyBottleneckSignal.addEventListener("click", () => {
  fields.loopType.value = "bottleneck";
  setRhythm("daily");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Bottleneck mode applied");
});
buttons.applyMasterclassSignal.addEventListener("click", () => {
  fields.loopType.value = "masterclass";
  setRhythm("weekly");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Mini masterclass started");
});
function startPathfinder() {
  fields.loopType.value = "pathfinder";
  setRhythm("weekly");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("AI path finder started");
}
buttons.applyPathSignal.addEventListener("click", startPathfinder);
buttons.applyPathfinderSignal.addEventListener("click", startPathfinder);
function startSafeLoop() {
  fields.loopType.value = "safeloop";
  setRhythm("daily");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Safe loop gates applied");
}
buttons.applySafeLoopSignal.addEventListener("click", startSafeLoop);
buttons.applyGateSignal.addEventListener("click", startSafeLoop);
function startViralLab() {
  fields.loopType.value = "virallab";
  setRhythm("weekly");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Viral Signal Lab started");
}
buttons.applyViralSignal.addEventListener("click", startViralLab);
buttons.applyViralLabSignal.addEventListener("click", startViralLab);
function startArsenal() {
  fields.loopType.value = "arsenal";
  setRhythm("weekly");
  applyTemplate();
  document.querySelector("#blueprint-title").scrollIntoView({ behavior: "smooth", block: "start" });
  toast("Open-source arsenal started");
}
buttons.applyArsenalSignal.addEventListener("click", startArsenal);
buttons.applyArsenalStack.addEventListener("click", startArsenal);

loadState();
renderBlueprint();

if (window.lucide) {
  window.lucide.createIcons();
}
