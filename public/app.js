const githubArsenalSets = [
  {
    name: "Automation Core",
    note: "Coding agents, workflow engines, browser control, MCP, and task planning.",
    tools: [
      { name: "OpenHands", url: "https://github.com/All-Hands-AI/OpenHands", category: "Coding", summary: "Autonomous software engineering agent for code edits, commands, file browsing, and development tasks." },
      { name: "Hermes Agent", url: "https://github.com/NousResearch/hermes-agent", category: "Agents", summary: "Self-improving AI agent with memory, skills, scheduled automations, messaging, and subagent workflows." },
      { name: "CrewAI", url: "https://github.com/crewAIInc/crewAI", category: "Agents", summary: "Role-based multi-agent framework for researcher, builder, reviewer, support, and content crews." },
      { name: "Aider", url: "https://github.com/Aider-AI/aider", category: "Coding", summary: "Terminal AI coding partner that edits local Git repos with model support." },
      { name: "n8n", url: "https://github.com/n8n-io/n8n", category: "Workflow", summary: "Visual workflow automation for apps, APIs, triggers, schedules, and AI operations." },
      { name: "LangGraph", url: "https://github.com/langchain-ai/langgraph", category: "Agents", summary: "Stateful agent graph framework for persistence, retries, branches, and human approval loops." },
      { name: "Browser Use", url: "https://github.com/browser-use/browser-use", category: "Browser", summary: "Library for letting AI agents operate real websites and complete browser-based tasks." },
      { name: "Awesome MCP Servers", url: "https://github.com/punkpeye/awesome-mcp-servers", category: "Tools", summary: "Curated MCP server index for connecting agents to files, databases, APIs, browsers, and tools." },
      { name: "Claude Task Master", url: "https://github.com/eyaltoledano/claude-task-master", category: "Planning", summary: "Prompt-to-task planning system for AI-assisted development workflows." }
    ]
  },
  {
    name: "Career And Learning",
    note: "Interview prep, public APIs, roadmaps, free books, and build-from-scratch practice for serious learners.",
    tools: [
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", category: "Interview", summary: "Clear system design interview guide covering scalability, caching, sharding, CAP theorem, and real architecture patterns." },
      { name: "Public APIs", url: "https://github.com/public-apis/public-apis", category: "APIs", summary: "Large curated list of free APIs for fast portfolio projects, demos, data apps, and student builds." },
      { name: "Awesome", url: "https://github.com/sindresorhus/awesome", category: "Learning", summary: "The meta-list of curated developer resources across languages, frameworks, AI, tooling, and product areas." },
      { name: "Build Your Own X", url: "https://github.com/codecrafters-io/build-your-own-x", category: "Learning", summary: "Tutorial collection for building Git, databases, neural networks, browsers, operating systems, and other core tools." },
      { name: "Developer Roadmap", url: "https://github.com/kamranahmedse/developer-roadmap", category: "Roadmap", summary: "Role-based roadmaps for frontend, backend, DevOps, AI engineering, data science, Android, and more." },
      { name: "Free Programming Books", url: "https://github.com/EbookFoundation/free-programming-books", category: "Learning", summary: "Free legal programming books, courses, podcasts, and references in many languages." },
      { name: "Coding Interview University", url: "https://github.com/jwasham/coding-interview-university", category: "Interview", summary: "Complete computer science and interview study plan for self-taught engineers aiming at stronger roles." }
    ]
  },
  {
    name: "Market Research Stack",
    note: "Open-source finance tools for market data, analyst workflows, backtesting, quant research, and signal testing.",
    tools: [
      { name: "OpenBB", url: "https://github.com/OpenBB-finance/OpenBB", category: "Market Research", summary: "Modern open investment research platform for equities, economics, options, news, and portfolio workflows." },
      { name: "FinGPT", url: "https://github.com/AI4Finance-Foundation/FinGPT", category: "Finance AI", summary: "Financial LLM project for sentiment analysis, market intelligence, and finance-specific model workflows." },
      { name: "Qlib", url: "https://github.com/microsoft/qlib", category: "Quant", summary: "Microsoft quantitative investment platform for alpha research, model training, backtesting, and portfolio analysis." },
      { name: "FinRL", url: "https://github.com/AI4Finance-Foundation/FinRL", category: "Trading AI", summary: "Deep reinforcement learning library for automated trading research, market simulation, and portfolio allocation." },
      { name: "VectorBT", url: "https://github.com/polakowo/vectorbt", category: "Backtesting", summary: "Fast Python library for testing many trading strategies with pandas, NumPy, and portfolio analytics." },
      { name: "Backtrader", url: "https://github.com/mementum/backtrader", category: "Backtesting", summary: "Mature Python framework for trading strategy backtests, broker simulation, indicators, and research." },
      { name: "Zipline Reloaded", url: "https://github.com/stefan-jansen/zipline-reloaded", category: "Backtesting", summary: "Maintained Zipline fork for quant research pipelines, historical testing, and portfolio experiments." },
      { name: "Finance Database", url: "https://github.com/JerBouma/FinanceDatabase", category: "Market Data", summary: "Reference database for equities, ETFs, funds, currencies, indices, and finance app metadata." },
      { name: "YFinance", url: "https://github.com/ranaroussi/yfinance", category: "Market Data", summary: "Popular Python library for Yahoo Finance price history, fundamentals, and ticker metadata." },
      { name: "TA-Lib Python", url: "https://github.com/TA-Lib/ta-lib-python", category: "Signals", summary: "Python wrapper for common technical analysis indicators used in trading research and signal labs." }
    ]
  },
  {
    name: "Creative AI Tools",
    note: "Publishable media workflows for short videos, creator assets, visual demos, and content systems.",
    tools: [
      { name: "MoneyPrinterTurbo", url: "https://github.com/harry0703/MoneyPrinterTurbo", category: "Video Automation", summary: "Open-source AI short-video generator for scripts, voiceover, B-roll, subtitles, music, and social content pipelines." }
    ]
  },
  {
    name: "Neo Potter Loop Arsenal",
    note: "Finance, chat, media, avatar, ads, inbox, browser identity, and video pipeline tools.",
    tools: [
      { name: "AutoHedge", url: "https://github.com/The-Swarm-Corporation/AutoHedge", category: "Finance", summary: "Autonomous hedge-fund style agents for market research, validation, risk, and trade execution." },
      { name: "Vibe Trading", url: "https://github.com/HKUDS/Vibe-Trading", category: "Finance", summary: "Finance research agents, trading skills, market analysis, and debate-before-action workflows." },
      { name: "Fincept Terminal", url: "https://github.com/Fincept-Corporation/FinceptTerminal", category: "Finance", summary: "Bloomberg-style open-source finance terminal with market analytics and data connectors." },
      { name: "LibreChat", url: "https://github.com/danny-avila/LibreChat", category: "Chat", summary: "Self-hosted chat platform for many AI providers, agents, MCP, artifacts, and private workflows." },
      { name: "Open Higgsfield AI", url: "https://github.com/Anil-matcha/Open-Higgsfield-AI", category: "Media", summary: "Open image and video studio for generation, editing, lip sync, and self-hosted creative workflows." },
      { name: "Open LLM VTuber", url: "https://github.com/Open-LLM-VTuber/open-llm-vtuber", category: "Avatar", summary: "Voice-interactive AI companion with Live2D, visual perception, and local/offline options." },
      { name: "Claude Ads", url: "https://github.com/AgriciDaniel/claude-ads", category: "Marketing", summary: "Paid ads audit workflow for Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, and Apple Ads." },
      { name: "Agentic Inbox", url: "https://github.com/cloudflare/agentic-inbox", category: "Email", summary: "Cloudflare-powered self-hosted email client where an AI agent can read, search, and draft replies." },
      { name: "Camoufox Browser", url: "https://github.com/daijro/camoufox", category: "Browser", summary: "Firefox-based browser identity tooling for scraping, Playwright, and detection-sensitive automation." },
      { name: "Hyperframes", url: "https://github.com/heygen-com/hyperframes", category: "Video", summary: "HTML, CSS, and animation pipeline for deterministic MP4 generation." }
    ]
  },
  {
    name: "Neo Project Repos",
    note: "Saved project handoff repos from the Loop Engine and Sanctuary EEG work.",
    tools: [
      { name: "Neo Potter Loop WebApp", url: "https://github.com/Neopotter555/neo-potter-loop-webapp", category: "Project", summary: "Public source repo for the Neo Potter Loop Engine web app and its deployment package." },
      { name: "EEG Hackathon SuperAI", url: "https://github.com/Neopotter555/eeg-hackathon-superai", category: "Hackathon", summary: "Sanctuary EEG repo for the real-time Muse headset data app and hackathon submission assets." },
      { name: "Serenbrainwave", url: "https://github.com/alexph-dev/Serenbrainwave", category: "Project", summary: "Earlier agentic dashboard shell repo used during the hackathon build flow." }
    ]
  },
  {
    name: "OpenClaw Ops References",
    note: "GitHub references for the native hook relay fix trail.",
    tools: [
      { name: "OpenClaw Releases", url: "https://github.com/openclaw/openclaw/releases/latest", category: "Ops", summary: "Latest stable OpenClaw release page used before updating the local assistant stack." },
      { name: "Relay Bug Issue", url: "https://github.com/openclaw/openclaw/issues/87331", category: "Ops", summary: "Native hook relay regression issue for intermittent Codex tool-call failures." },
      { name: "Relay Fix PR", url: "https://github.com/openclaw/openclaw/pull/87272", category: "Ops", summary: "Pull request fixing relay restart behavior and linking back to the regression." },
      { name: "Relay Fix Commit", url: "https://github.com/openclaw/openclaw/commit/42e9504", category: "Ops", summary: "Specific fix commit for preserving native hook relay state across restarts." }
    ]
  }
];

const githubArsenalTools = githubArsenalSets.flatMap((set) => set.tools.map((tool) => ({ ...tool, set: set.name })));
const githubArsenalResources = githubArsenalTools.map((tool) => [tool.name, tool.url]);
const githubArsenalCategories = ["All", ...Array.from(new Set(githubArsenalTools.map((tool) => tool.category)))];
let activeArsenalCategory = "All";
let activeArsenalSet = githubArsenalSets[0]?.name || "";

const templates = {
  thinkshift: {
    title: "Daily ThinkShift Reset",
    signal: "When you learn a new way to think, you can master a new way to be.",
    objective: "Identify one habit that keeps me busy but not free, then replace it with one aligned action today.",
    metric: "The day ends with less empty fatigue, one clearer priority, and one action my future self respects.",
    boundary: "Do not turn this into self-criticism. The goal is awareness, redesign, and one clean move.",
    actions: ["Name the activity that creates motion without meaningful progress.", "Ask what this habit is protecting me from feeling, choosing, or changing.", "Remove one environmental trigger that keeps the pattern alive.", "Choose one aligned action that makes the next hour cleaner.", "Close the day by recording what felt lighter, truer, and worth repeating."]
  },
  busytrap: {
    title: "Busy Trap Audit",
    signal: "If it keeps you occupied but holds you back someday, it is a distraction.",
    objective: "Separate productive-looking noise from the one action that would actually move life, business, health, or relationships forward.",
    metric: "At least one low-value commitment is paused, delegated, deleted, or reduced today.",
    boundary: "Do not delete obligations impulsively. Renegotiate, pause, or ask before the choice affects other people.",
    actions: ["List the tasks that make me tired without making life clearer.", "Mark each task as growth, maintenance, avoidance, or borrowed urgency.", "Choose the highest-leverage action I have been avoiding.", "Protect a focused block for that action before adding anything else.", "End with proof: what changed, what got removed, and what no longer owns my attention."]
  },
  environment: {
    title: "Environment Reset",
    signal: "Willpower loses when the room is engineered against the person you are becoming.",
    objective: "Change one physical, digital, social, or emotional environment so the better choice becomes easier.",
    metric: "One trigger is removed, one supportive cue is added, and the desired behavior becomes more likely today.",
    boundary: "Do not blame people or places blindly. Change what is controllable and have clean conversations when needed.",
    actions: ["Identify the room, app, feed, group, schedule, or ritual that pulls me backward.", "Name the exact cue that starts the old pattern.", "Remove, hide, block, reorder, or reduce that cue.", "Add one visible cue for the identity I am practicing.", "Run the new environment once and notice whether the better action became easier."]
  },
  identity: {
    title: "Identity Upgrade Loop",
    signal: "A new life begins when repeated choices stop serving the old self.",
    objective: "Practice one decision today as the person I am becoming, not the person I used to defend.",
    metric: "One repeated choice matches the new identity even if mood, pressure, or habit argues against it.",
    boundary: "Do not use identity as pressure to be perfect. The standard is honest repetition, not self-punishment.",
    actions: ["Write the old identity sentence that has been running the pattern.", "Rewrite it as a grounded identity I can practice today.", "Choose one small behavior that proves the new identity in public or private.", "When resistance appears, pause and ask which self is choosing.", "Save the lesson so tomorrow starts from evidence, not hope."]
  },
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
  instaprod: {
    title: "Instagram-To-WebApp Productizer",
    signal: "Inspired by Neo's Instagram signal: when a post carries a useful idea, convert the pattern into an interactive web app people can actually use.",
    objective: "Transform one high-signal Instagram post into a small web app with a clear user, promise, workflow, output, and share-ready follow-up.",
    metric: "The app includes a first-screen experience, a useful input flow, generated output, save/share action, and a human review gate before public launch.",
    boundary: "Do not copy private media, impersonate the creator, scrape accounts, auto-message people, or publish until the source idea, claims, and permissions are reviewed.",
    actions: ["Extract the post's core promise, audience, before-and-after shift, and strongest visual pattern.", "Turn the idea into one usable workflow with inputs, choices, and a concrete output.", "Design the first screen around the actual transformation instead of a marketing landing page.", "Add consent-safe growth mechanics: copy, download, share prompt, or opt-in follow-up.", "Review originality, claims, mobile layout, and human approval before publishing."],
    resources: [
      ["Source Instagram Post", "https://www.instagram.com/p/DaM_-hTFCeA/"],
      ["Neo Potter Loop Engine", "https://neopotters.com"]
    ]
  },
  arsenal: {
    title: "Open-Source Arsenal Loop",
    signal: "Inspired by the merged GitHub stack: useful builders do not need more hype; they need a clear map from tool to use case to safe execution.",
    objective: "Help a founder, creator, or operator choose the right open-source AI tool stack, open the GitHub source, and turn it into one practical workflow.",
    metric: "The user understands what each tool is for, which repo to inspect, what risk to check, and what first experiment to run.",
    boundary: "Do not treat trading, ad spend, scraping, inbox access, ops references, or automation as plug-and-play. Test locally, protect credentials, and keep human approval on high-risk actions.",
    actions: ["Choose the use case: coding, agents, finance, chat, media, inbox, browser automation, project handoff, or ops reference.", "Open the matching GitHub link and check license, setup, activity, and security notes.", "Pick one tiny first experiment that can run without risking money, accounts, or private data.", "Add a safety gate for credentials, costs, platform rules, and human approval.", "Save the working stack as a reusable builder recipe."],
    resources: githubArsenalResources
  },
  agentic: {
    title: "Agentic Engineering Loop",
    signal: "A living engineering system improves itself by preserving context, making bounded changes, and proving what changed.",
    objective: "Maintain and upgrade the web app as a living product: inspect the real surface, research current official docs when needed, remove slop, preserve important context, and ship verified improvements that move the project toward best-in-category usefulness.",
    metric: "Every cycle ends with a working surface, passing checks, desktop/mobile evidence, no hidden safety regressions, a concise observer report, and a clearer next move.",
    boundary: "Never compress away user intent, decisions, data, links, failed checks, safety boundaries, uncertainty, or public-impact approval gates. Stop for secrets, paid services, domains, durable storage architecture, publishing, deletion, production account changes, or major repositioning.",
    actions: ["Observe the app, source, docs, tests, config, deploy assumptions, and current official platform docs when behavior may have changed.", "Rank improvements by user value, trust, risk reduction, speed, and proof; choose one coherent high-leverage upgrade per cycle.", "Implement inside the existing product language and visual system unless the user explicitly asks for design changes.", "Verify with npm run build, npm test, desktop/mobile browser checks, console review, link validation, copy/export behavior, and Core Web Vitals awareness.", "Report what changed, proof, risks, score, and the next best move; update the loop prompt only from verified lessons."],
    resources: [
      ["OpenAI Agents SDK", "https://developers.openai.com/api/docs/guides/agents"],
      ["OpenAI Agent Guide", "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"],
      ["LangGraph Overview", "https://docs.langchain.com/oss/python/langgraph/overview"],
      ["Web Vitals", "https://web.dev/articles/vitals"],
      ["Vercel Speed Insights", "https://vercel.com/docs/speed-insights"],
      ["Agentic Engineering Playbook", "https://public-gilt-kappa.vercel.app/"],
      ["Original Build with AI article", "https://open.substack.com/pub/packtbuildwithai/p/build-with-ai-12-the-agentic-engineering?utm_source=share&utm_medium=android&r=8ai88k"]
    ]
  },
  graphengineer: {
    title: "Graph Engineer Loop",
    signal: "A graph is a map of important things and the lines between them. Graph engineering turns hidden dependencies into visible decisions.",
    objective: "Turn a messy problem into nodes, edges, gates, scenarios, and one safe experiment the system can run next.",
    metric: "A five-year-old can explain what the dots are, how the strings connect, where the risky door is, and what first move should happen.",
    boundary: "Do not let the graph trigger spending, deletion, public posting, private-data access, account changes, deployment, or irreversible action without a human approval node.",
    actions: ["Write the problem in one plain sentence.", "Name the nodes: people, tools, files, inputs, decisions, memories, outputs, and risks.", "Draw the edges that show what depends on what and what can run in parallel.", "Mark the gate where money, private data, public action, or deletion needs human approval.", "Run one small experiment and update the graph from evidence."]
  },
  custom: {
    title: "Custom Living Loop",
    objective: "Create a repeatable intelligent system around the mission Neo chooses.",
    metric: "Every cycle produces a clearer result, a useful decision, or a concrete next action.",
    boundary: "Stop and ask when the action becomes public, financial, destructive, or uncertain.",
    actions: ["Gather the current state.", "Decide the next useful action.", "Execute inside the boundary.", "Check the result against the success signal.", "Improve the loop and repeat."]
  }
};

const guideCopy = {
  thinkshift: {
    label: "Daily reset",
    body: "Turn empty fatigue into one clear choice that protects your future self.",
    meta: "Best for today"
  },
  busytrap: {
    label: "Distraction audit",
    body: "Separate useful effort from productive-looking avoidance and reclaim attention.",
    meta: "Best for overwhelm"
  },
  environment: {
    label: "Room redesign",
    body: "Change the cue, room, feed, or rhythm that keeps pulling the old pattern back.",
    meta: "Best for stuck habits"
  },
  identity: {
    label: "Identity practice",
    body: "Make one decision from the person you are becoming, then record the proof.",
    meta: "Best for behavior change"
  },
  content: {
    label: "Creator system",
    body: "Shape raw ideas into clear, trustworthy output with a human approval gate.",
    meta: "Best for publishing systems"
  },
  product: {
    label: "Operator system",
    body: "Find the next product upgrade by scanning friction, trust gaps, and daily usability.",
    meta: "Best for app and service upgrades"
  },
  marketing: {
    label: "Growth system",
    body: "Turn audience signals into honest campaigns with a clear promise and review point.",
    meta: "Best for launches and distribution"
  },
  memory: {
    label: "Strategy system",
    body: "Keep decisions, lessons, and project context sharp enough to guide the next cycle.",
    meta: "Best for long-running work"
  },
  quality: {
    label: "Review system",
    body: "Check clarity, function, links, mobile fit, and trust before work reaches people.",
    meta: "Best before publishing"
  },
  workshop: {
    label: "Movement system",
    body: "Teach builders to move from prompting into values-led intelligent systems.",
    meta: "Best for live sessions"
  },
  bottleneck: {
    label: "Flow system",
    body: "Name the constraint that slows the work, then redesign the loop around it.",
    meta: "Best for stuck projects"
  },
  masterclass: {
    label: "Learning system",
    body: "Guide a beginner from first idea to a loop they can run, improve, and teach.",
    meta: "Best first run"
  },
  pathfinder: {
    label: "Routing system",
    body: "Match the user to the next useful learning path instead of showing every option.",
    meta: "Best for overwhelmed learners"
  },
  safeloop: {
    label: "Safety system",
    body: "Add tests, retry limits, approval doors, and stopping rules before action scales.",
    meta: "Best for high-risk loops"
  },
  virallab: {
    label: "Signal system",
    body: "Package useful open-source tools into a consent-safe creator growth loop.",
    meta: "Best for ethical lead magnets"
  },
  instaprod: {
    label: "Productizer system",
    body: "Turn a strong Instagram idea into a usable app with workflow, output, and launch gate.",
    meta: "Best for social-to-product builds"
  },
  arsenal: {
    label: "Builder system",
    body: "Choose the right GitHub repo, inspect the tradeoffs, and run one small safe test.",
    meta: "Best for open-source experiments"
  },
  agentic: {
    label: "Engineering system",
    body: "Keep the system alive by preserving context, making bounded upgrades, and proving each cycle.",
    meta: "Best for living product maintenance"
  },
  graphengineer: {
    label: "Graph system",
    body: "Map the pieces, connections, approval gates, scenarios, and first experiment before the loop acts.",
    meta: "Best for complex problems"
  },
  custom: {
    label: "Custom system",
    body: "Build a repeatable loop around the mission, standard, boundary, and rhythm you choose.",
    meta: "Best for original workflows"
  }
};

const resetLoopKeys = ["thinkshift", "busytrap", "environment", "identity"];

const graphScenarioData = {
  creatorLaunch: {
    label: "Creator launch",
    problem: "I have too many ideas, tools, and posts. I need one visible map that shows what to build first and where human approval is required.",
    nodes: ["Idea inbox", "Audience pain", "Offer promise", "Draft output", "Human review", "Public launch"],
    edges: ["Idea inbox -> Audience pain", "Audience pain -> Offer promise", "Offer promise -> Draft output", "Draft output -> Human review", "Human review -> Public launch"],
    gate: "Human review blocks public launch until the offer, claims, tone, and source links are honest.",
    experiment: "Draft one post and one offer promise, then ask whether the graph shows the real bottleneck."
  },
  habitReset: {
    label: "Habit reset",
    problem: "I keep repeating one draining habit even though I know what I want to become.",
    nodes: ["Trigger", "Old response", "Energy leak", "New identity", "Support cue", "Daily proof"],
    edges: ["Trigger -> Old response", "Old response -> Energy leak", "New identity -> Support cue", "Support cue -> Daily proof", "Daily proof -> New identity"],
    gate: "If the reset becomes self-criticism, stop and rewrite it as one kind action.",
    experiment: "Remove one trigger for 24 hours and place one support cue where the old loop usually starts."
  },
  agentWorkflow: {
    label: "AI agent workflow",
    problem: "An AI agent needs to improve a project without losing context, breaking links, or touching risky actions.",
    nodes: ["User mission", "Repo scan", "Change plan", "Implementation", "Build gate", "Browser check", "Human report"],
    edges: ["User mission -> Repo scan", "Repo scan -> Change plan", "Change plan -> Implementation", "Implementation -> Build gate", "Build gate -> Browser check", "Browser check -> Human report"],
    gate: "Secrets, publishing, deletion, billing, and production account changes must stop for human approval.",
    experiment: "Run one bounded edit, build locally, and report the exact proof before the next loop begins."
  },
  openSourceChoice: {
    label: "Open-source tool choice",
    problem: "I found many GitHub tools but do not know which one is safe and useful for the mission.",
    nodes: ["Mission", "Repo candidates", "License", "Activity", "Security notes", "Tiny local test", "Adoption decision"],
    edges: ["Mission -> Repo candidates", "Repo candidates -> License", "Repo candidates -> Activity", "Repo candidates -> Security notes", "License -> Tiny local test", "Tiny local test -> Adoption decision"],
    gate: "No real credentials, money, inbox access, or customer data enters the tool until the local test is proven.",
    experiment: "Pick one repo, run the smallest local demo, and reject it if setup or risk is unclear."
  },
  supportLoop: {
    label: "Customer support loop",
    problem: "Customer messages repeat, but the team still needs empathy, accuracy, and human approval for sensitive replies.",
    nodes: ["Incoming message", "Intent", "Knowledge base", "Draft reply", "Risk check", "Human approval", "Customer response"],
    edges: ["Incoming message -> Intent", "Intent -> Knowledge base", "Knowledge base -> Draft reply", "Draft reply -> Risk check", "Risk check -> Human approval", "Human approval -> Customer response"],
    gate: "Refunds, legal claims, health advice, angry customers, and private account changes go to a human.",
    experiment: "Classify ten sample messages and check whether the gate catches every sensitive case."
  }
};

const translations = {
  en: {
    lang: "en",
    title: "Neo Potter Loop Engine",
    description: "A Neo Potter web app for turning scattered ideas, open-source tools, and daily practice into one clear loop engine.",
    nav: ["Practice", "Patterns", "System", "Graph", "GitHub Arsenal", "Blueprint"],
    brand: "NeoPotter",
    languageLabel: "Language",
    copy: "Practice",
    skip: "Skip to reset builder",
    eyebrow: "AI literacy / creator systems / daily practice",
    heroTitle: "Build the loop. Keep the human in charge.",
    manifesto: "A focused operating page for Neo Potter projects: daily resets, AI workflows, GitHub tools, safety gates, and builder notes in one calm place.",
    start: "Start Practice",
    diagnose: "Study The Map",
    metrics: [["3", "hidden patterns"], ["5", "reset moves"], ["1", "clearer day"]],
    brief: [
      ["01", "Name the drain", "Separate meaningful effort from empty fatigue."],
      ["02", "Change the room", "Design an environment that supports the version you are becoming."],
      ["03", "Run the identity", "Leave with a daily blueprint, not another motivational quote."]
    ],
    principles: ["Clarity first", "Environment second", "Identity third", "Peace above performance"],
    trends: [
      ["Busy trap", "Activity that consumes energy but does not move the real life forward."],
      ["Wrong room", "Trying to win while staying inside an environment built against you."],
      ["Old identity", "Repeating choices from a version of yourself you have already outgrown."],
      ["Better question", "What would the aligned version of me remove, choose, and repeat today?"]
    ],
    builderKicker: "Daily reset builder",
    builderTitle: "Design the shift",
    startHere: "Start here",
    onboardingTitle: "Start with the pattern, not the pressure.",
    onboardingBody: "Pick the trap that feels most true today. The app loads a reset, success signal, boundary, and daily rhythm so you can move from insight into behavior.",
    starterButtons: [["Busy Trap", "Cut distraction"], ["Environment", "Change the room"], ["Identity", "Become cleaner"]],
    progress: ["Choose mission", "Set standard", "Export loop"],
    resetField: "Reset field",
    fieldNote: "Each field preloads an opinionated Neo-style reset you can edit immediately.",
    objectiveLabel: "Objective",
    objectiveNote: "Write the way of being you are practicing, not only the task you want to finish.",
    metricLabel: "Success signal",
    boundaryLabel: "Human boundary",
    rhythmLabel: "Operating rhythm",
    rhythmOptions: ["Daily", "Weekly", "Always-on"],
    generate: "Generate Blueprint",
    reset: "Reset",
    signalKicker: "Neo rewrite",
    signalTitle: "A useful system should make the next honest action easier.",
    signalBody: "The page is built around one practical idea: collect the signal, choose the right tool, set a human boundary, and ship one clean experiment. No hype wall, no random link dump, no pretending automation replaces judgment.",
    fusion: "Neo Potter synthesis: change the thought, change the room, change the repeated action. That is how a new way of being becomes real.",
    signalSource: "Today signal: builder clarity",
    signalCard: "Choose one mission. Pick the smallest tool stack that fits. Add the gate before the loop scales.",
    quickButtons: ["Daily Reset", "Busy Trap", "Environment", "Identity"],
    habitsKicker: "Three daily patterns",
    habitsTitle: "The habit is not the enemy. The unconscious loop is.",
    habitsBody: "This is the clean rewrite of the source idea: stop fighting yourself with willpower alone. Change the structure that keeps pulling you back.",
    habitCards: [
      ["The Busy Trap", "You keep proving you are working while avoiding the one decision that would actually change the day."],
      ["The Wrong Room", "You ask discipline to beat an environment that was designed to drain your attention and identity."],
      ["The Old Self", "You keep negotiating with the version of you that learned to survive, even though you are ready to lead."]
    ],
    buildReset: "Build Reset",
    blueprintLabels: {
      frame: "Neo Potter Frame",
      selected: "Selected Loop",
      signal: "Field Signal",
      objective: "Objective",
      metric: "Success Signal",
      boundary: "Human Boundary",
      rhythm: "Operating Rhythm",
      links: "GitHub Links"
    },
    blueprintFrame: "Stop prompting. Start creating living systems. The human chooses the mission. The system handles repetition. Wisdom stays above the machine.",
    finalPrinciple: "Vision first. System second. Automation third. Human wisdom always above the machine.",
    saved: "Saved locally",
    saving: "Saving...",
    copied: "Blueprint copied",
    exported: "Markdown exported",
    generated: "Blueprint generated",
    languageUpdated: "Language updated",
    templates: {},
    guide: {}
  },
  th: {
    lang: "th",
    title: "Neo Potter Loop Engine",
    description: "เว็บแอปสไตล์ Neo Potter สำหรับเปลี่ยนนิสัยที่รบกวนชีวิตให้เป็นสภาพแวดล้อม ตัวตน และจังหวะประจำวันที่ชัดขึ้น",
    nav: ["รีเซ็ต", "นิสัย", "ระบบ", "กราฟ", "GitHub", "บลูปรินต์"],
    brand: "NeoPotter",
    languageLabel: "ภาษา",
    copy: "คัดลอก",
    skip: "ข้ามไปที่ตัวสร้างรีเซ็ต",
    eyebrow: "ระบบภายในแบบ Neo Potter",
    heroTitle: "เรียนรู้วิธีคิดใหม่ แล้วฝึกวิธีเป็นคนใหม่",
    manifesto: "ถ้าบางอย่างทำให้คุณยุ่งแต่ขโมยอนาคตเงียบ ๆ มันไม่ใช่วินัย มันคือสิ่งรบกวนที่แต่งตัวเหมือนงานสำคัญ แอปนี้เปลี่ยนกับดักสามแบบให้เป็นระบบรีเซ็ตประจำวัน",
    start: "เริ่มรีเซ็ตวันนี้",
    diagnose: "วิเคราะห์นิสัย",
    metrics: [["3", "รูปแบบที่ซ่อนอยู่"], ["5", "จังหวะรีเซ็ต"], ["1", "วันที่ชัดขึ้น"]],
    brief: [
      ["01", "ตั้งชื่อสิ่งที่ดูดพลัง", "แยกความพยายามที่มีความหมายออกจากความเหนื่อยเปล่า"],
      ["02", "เปลี่ยนห้อง", "ออกแบบสภาพแวดล้อมให้สนับสนุนตัวตนใหม่"],
      ["03", "ฝึกตัวตนใหม่", "ออกจากวันด้วยบลูปรินต์ ไม่ใช่แค่คำคม"]
    ],
    principles: ["ความชัดก่อน", "สภาพแวดล้อมถัดมา", "ตัวตนเป็นฐาน", "ความสงบเหนือการเร่ง"],
    trends: [
      ["กับดักความยุ่ง", "กิจกรรมที่ใช้พลังแต่ไม่ขยับชีวิตจริงไปข้างหน้า"],
      ["ห้องที่ผิด", "พยายามชนะทั้งที่ยังอยู่ในระบบที่ต้านคุณ"],
      ["ตัวตนเก่า", "ทำซ้ำทางเลือกจากคนเดิมที่คุณโตเกินไปแล้ว"],
      ["คำถามที่ดีกว่า", "ตัวตนที่สอดคล้องกว่านี้จะลบ เลือก และทำซ้ำอะไรวันนี้"]
    ],
    builderKicker: "ตัวสร้างรีเซ็ตประจำวัน",
    builderTitle: "ออกแบบการเปลี่ยน",
    startHere: "เริ่มตรงนี้",
    onboardingTitle: "เริ่มจากรูปแบบ ไม่ใช่แรงกดดัน",
    onboardingBody: "เลือกกับดักที่จริงที่สุดในวันนี้ แอปจะโหลดรีเซ็ต สัญญาณความสำเร็จ ขอบเขต และจังหวะประจำวันให้ทันที",
    starterButtons: [["ยุ่งเกินจริง", "ตัดสิ่งรบกวน"], ["สภาพแวดล้อม", "เปลี่ยนห้อง"], ["ตัวตน", "เป็นเวอร์ชันชัดขึ้น"]],
    progress: ["เลือกภารกิจ", "ตั้งมาตรฐาน", "ส่งออกลูป"],
    resetField: "พื้นที่รีเซ็ต",
    fieldNote: "แต่ละพื้นที่มีบลูปรินต์สไตล์ Neo ที่แก้ไขได้ทันที",
    objectiveLabel: "เป้าหมาย",
    objectiveNote: "เขียนวิธีเป็นคนที่กำลังฝึก ไม่ใช่แค่งานที่อยากทำให้เสร็จ",
    metricLabel: "สัญญาณความสำเร็จ",
    boundaryLabel: "ขอบเขตมนุษย์",
    rhythmLabel: "จังหวะการทำงาน",
    rhythmOptions: ["รายวัน", "รายสัปดาห์", "ตลอดเวลา"],
    generate: "สร้างบลูปรินต์",
    reset: "รีเซ็ต",
    signalKicker: "เขียนใหม่สไตล์ Neo",
    signalTitle: "ชีวิตที่คุณต้องการมักถูกบล็อกด้วยรูปแบบที่คุณเรียกว่าปกติ",
    signalBody: "ความเหนื่อยเปล่าหนักเพราะมันใช้ชีวิตคุณโดยไม่ซื้ออนาคตให้คุณ ความเหนื่อยที่มีคุณค่ารู้สึกต่างออกไป เพราะมันมาจากความพยายามที่สะอาด ลำดับความสำคัญที่จริง และวันที่พาจิตใจไปข้างหน้า",
    fusion: "สรุปแบบ Neo Potter: เปลี่ยนความคิด เปลี่ยนห้อง เปลี่ยนการกระทำซ้ำ ๆ นั่นคือวิธีที่วิธีเป็นคนใหม่กลายเป็นจริง",
    signalSource: "สัญญาณวันนี้: ตรวจสิ่งรบกวน",
    signalCard: "ถ้านิสัยทำให้คุณยุ่งแต่เล็กลง มันไม่ใช่เส้นทางของคุณ ตรวจมัน ถอดคานรองรับหนึ่งอัน แล้วแทนที่ด้วยทางเลือกที่ตัวคุณในอนาคตจะขอบคุณ",
    quickButtons: ["รีเซ็ตวันนี้", "กับดักความยุ่ง", "สภาพแวดล้อม", "ตัวตน"],
    habitsKicker: "สามรูปแบบประจำวัน",
    habitsTitle: "นิสัยไม่ใช่ศัตรู ลูปที่ไม่รู้ตัวต่างหาก",
    habitsBody: "นี่คือแก่นที่เขียนใหม่: อย่าสู้ตัวเองด้วยกำลังใจอย่างเดียว เปลี่ยนโครงสร้างที่ดึงคุณกลับ",
    habitCards: [
      ["กับดักความยุ่ง", "คุณพิสูจน์ว่ากำลังทำงาน แต่หลบการตัดสินใจหนึ่งอย่างที่จะเปลี่ยนวันจริง ๆ"],
      ["ห้องที่ผิด", "คุณขอให้วินัยชนะสภาพแวดล้อมที่ออกแบบมาเพื่อดูดความสนใจและตัวตน"],
      ["ตัวตนเก่า", "คุณยังต่อรองกับเวอร์ชันที่เคยเอาตัวรอด ทั้งที่ตอนนี้พร้อมจะนำแล้ว"]
    ],
    buildReset: "สร้างรีเซ็ต",
    blueprintLabels: { frame: "กรอบ Neo Potter", selected: "ลูปที่เลือก", signal: "สัญญาณ", objective: "เป้าหมาย", metric: "สัญญาณความสำเร็จ", boundary: "ขอบเขตมนุษย์", rhythm: "จังหวะ", links: "ลิงก์ GitHub" },
    blueprintFrame: "หยุดแค่สั่งพรอมป์ เริ่มสร้างระบบมีชีวิต มนุษย์เลือกภารกิจ ระบบจัดการการทำซ้ำ ปัญญาอยู่เหนือเครื่องเสมอ",
    finalPrinciple: "วิสัยทัศน์ก่อน ระบบถัดมา อัตโนมัติลำดับสาม ปัญญามนุษย์อยู่เหนือเครื่องเสมอ",
    saved: "บันทึกในเครื่องแล้ว",
    saving: "กำลังบันทึก...",
    copied: "คัดลอกบลูปรินต์แล้ว",
    exported: "ส่งออก Markdown แล้ว",
    generated: "สร้างบลูปรินต์แล้ว",
    languageUpdated: "เปลี่ยนภาษาแล้ว"
  },
  ms: {
    lang: "ms",
    title: "Neo Potter Loop Engine",
    description: "Aplikasi gaya Neo Potter untuk menukar tabiat yang mengganggu kepada persekitaran, identiti, dan ritma harian yang lebih jelas.",
    nav: ["Reset", "Tabiat", "Sistem", "Graf", "GitHub", "Blueprint"],
    brand: "NeoPotter",
    languageLabel: "Bahasa",
    copy: "Salin",
    skip: "Pergi ke pembina reset",
    eyebrow: "Sistem dalaman Neo Potter",
    heroTitle: "Belajar cara fikir baharu. Kuasai cara menjadi yang baharu.",
    manifesto: "Jika sesuatu membuat anda sibuk tetapi diam-diam mencuri masa depan, itu bukan disiplin. Itu gangguan yang memakai topeng produktiviti. Aplikasi ini menukar tiga perangkap biasa kepada sistem reset harian.",
    start: "Mula Reset Harian",
    diagnose: "Diagnos Tabiat",
    metrics: [["3", "corak tersembunyi"], ["5", "gerakan reset"], ["1", "hari lebih jelas"]],
    brief: [["01", "Namakan punca bocor", "Bezakan usaha bermakna daripada penat kosong."], ["02", "Ubah ruang", "Reka persekitaran yang menyokong versi baharu anda."], ["03", "Jalankan identiti", "Tinggalkan hari dengan blueprint, bukan sekadar petikan motivasi."]],
    principles: ["Kejelasan dahulu", "Persekitaran kedua", "Identiti ketiga", "Tenang melebihi prestasi"],
    trends: [["Perangkap sibuk", "Aktiviti yang menghabiskan tenaga tetapi tidak menggerakkan hidup sebenar."], ["Ruang salah", "Cuba menang sambil kekal dalam persekitaran yang melawan anda."], ["Identiti lama", "Mengulang pilihan daripada versi diri yang sudah anda lampaui."], ["Soalan lebih baik", "Apa yang versi diri yang selaras akan buang, pilih, dan ulang hari ini?"]],
    builderKicker: "Pembina reset harian",
    builderTitle: "Reka perubahan",
    startHere: "Mula di sini",
    onboardingTitle: "Mula dengan corak, bukan tekanan.",
    onboardingBody: "Pilih perangkap yang paling benar hari ini. Aplikasi memuatkan reset, isyarat kejayaan, sempadan, dan ritma harian supaya insight menjadi tindakan.",
    starterButtons: [["Perangkap Sibuk", "Potong gangguan"], ["Persekitaran", "Ubah ruang"], ["Identiti", "Jadi lebih jelas"]],
    progress: ["Pilih misi", "Tetap standard", "Eksport loop"],
    resetField: "Bidang reset",
    fieldNote: "Setiap bidang memuatkan reset gaya Neo yang boleh diedit terus.",
    objectiveLabel: "Objektif",
    objectiveNote: "Tulis cara menjadi yang sedang anda latih, bukan hanya tugas yang mahu disiapkan.",
    metricLabel: "Isyarat kejayaan",
    boundaryLabel: "Sempadan manusia",
    rhythmLabel: "Ritma operasi",
    rhythmOptions: ["Harian", "Mingguan", "Sentiasa aktif"],
    generate: "Jana Blueprint",
    reset: "Reset",
    signalKicker: "Tulisan semula Neo",
    signalTitle: "Hidup yang anda mahu biasanya disekat oleh corak yang anda panggil normal.",
    signalBody: "Penat kosong terasa berat kerana ia membelanjakan hidup tanpa membeli masa depan. Penat yang memuaskan datang daripada usaha bersih, keutamaan jujur, dan hari yang menggerakkan jiwa.",
    fusion: "Sintesis Neo Potter: ubah fikiran, ubah ruang, ubah tindakan berulang. Begitulah cara menjadi yang baharu menjadi nyata.",
    signalSource: "Isyarat hari ini: audit gangguan",
    signalCard: "Jika tabiat membuat anda sibuk tetapi mengecilkan anda, itu bukan laluan anda. Audit, cabut satu sokongan, dan ganti dengan pilihan yang diri masa depan akan hargai.",
    quickButtons: ["Reset Harian", "Perangkap Sibuk", "Persekitaran", "Identiti"],
    habitsKicker: "Tiga corak harian",
    habitsTitle: "Tabiat bukan musuh. Loop tanpa sedar itu musuhnya.",
    habitsBody: "Ini versi bersih idea asal: jangan lawan diri dengan tekad sahaja. Ubah struktur yang menarik anda kembali.",
    habitCards: [["Perangkap Sibuk", "Anda membuktikan anda bekerja sambil mengelak satu keputusan yang benar-benar mengubah hari."], ["Ruang Salah", "Anda meminta disiplin mengalahkan persekitaran yang direka untuk menguras perhatian dan identiti."], ["Diri Lama", "Anda masih berunding dengan versi diri yang dulu bertahan, walaupun kini anda bersedia memimpin."]],
    buildReset: "Bina Reset",
    blueprintLabels: { frame: "Rangka Neo Potter", selected: "Loop Dipilih", signal: "Isyarat", objective: "Objektif", metric: "Isyarat Kejayaan", boundary: "Sempadan Manusia", rhythm: "Ritma Operasi", links: "Pautan GitHub" },
    blueprintFrame: "Berhenti sekadar prompting. Mula bina sistem hidup. Manusia memilih misi. Sistem mengurus ulangan. Hikmah kekal di atas mesin.",
    finalPrinciple: "Visi dahulu. Sistem kedua. Automasi ketiga. Hikmah manusia sentiasa di atas mesin.",
    saved: "Disimpan setempat",
    saving: "Menyimpan...",
    copied: "Blueprint disalin",
    exported: "Markdown dieksport",
    generated: "Blueprint dijana",
    languageUpdated: "Bahasa dikemas kini"
  },
  zh: {
    lang: "zh",
    title: "Neo Potter Loop Engine",
    description: "Neo Potter 风格网页应用，把消耗你的习惯转化为更清晰的环境、身份和每日节奏。",
    nav: ["重置", "习惯", "系统", "图谱", "GitHub", "蓝图"],
    brand: "NeoPotter",
    languageLabel: "语言",
    copy: "复制",
    skip: "跳到重置生成器",
    eyebrow: "Neo Potter 内在操作系统",
    heroTitle: "学会新的思考方式，掌握新的存在方式。",
    manifesto: "如果一件事让你很忙，却悄悄偷走你的未来，那不是自律，而是披着生产力外衣的分心。本应用把三种常见陷阱变成每日重置系统。",
    start: "开始每日重置",
    diagnose: "诊断习惯",
    metrics: [["3", "隐藏模式"], ["5", "重置动作"], ["1", "更清晰的一天"]],
    brief: [["01", "命名能量漏洞", "把有意义的努力和空耗区分开。"], ["02", "改变房间", "设计支持新身份的环境。"], ["03", "运行新身份", "带着每日蓝图离开，而不是只带着一句鸡汤。"]],
    principles: ["先清晰", "再环境", "再身份", "平静高于表现"],
    trends: [["忙碌陷阱", "消耗能量，却没有推动真实生活的活动。"], ["错误房间", "待在反向环境里还试图赢。"], ["旧身份", "重复来自旧版本自己的选择。"], ["更好的问题", "更一致的我今天会删除、选择、重复什么？"]],
    builderKicker: "每日重置生成器",
    builderTitle: "设计转变",
    startHere: "从这里开始",
    onboardingTitle: "先看模式，不要先加压力。",
    onboardingBody: "选择今天最真实的陷阱。应用会加载重置、成功信号、边界和每日节奏，把洞察变成行动。",
    starterButtons: [["忙碌陷阱", "切掉分心"], ["环境", "改变房间"], ["身份", "成为更清晰的人"]],
    progress: ["选择使命", "设定标准", "导出循环"],
    resetField: "重置领域",
    fieldNote: "每个领域都会加载一个 Neo 风格重置蓝图，可立即编辑。",
    objectiveLabel: "目标",
    objectiveNote: "写下你正在练习的存在方式，而不只是想完成的任务。",
    metricLabel: "成功信号",
    boundaryLabel: "人类边界",
    rhythmLabel: "运行节奏",
    rhythmOptions: ["每日", "每周", "持续运行"],
    generate: "生成蓝图",
    reset: "重置",
    signalKicker: "Neo 原创改写",
    signalTitle: "你想要的生活，常被一个你称为“正常”的模式挡住。",
    signalBody: "空耗的疲惫很重，因为它花掉了你的生命，却没有买到未来。有价值的疲惫不同，它来自干净的努力、诚实的优先级，以及真正推动灵魂向前的一天。",
    fusion: "Neo Potter 综合：改变念头，改变房间，改变重复动作。新的存在方式就是这样变成现实。",
    signalSource: "今日信号：分心审计",
    signalCard: "如果一个习惯让你忙，却让你变小，那不是你的路。审计它，拆掉一个支撑点，换成未来的你会感谢的选择。",
    quickButtons: ["每日重置", "忙碌陷阱", "环境", "身份"],
    habitsKicker: "三种每日模式",
    habitsTitle: "习惯不是敌人。无意识循环才是。",
    habitsBody: "这是源思想的清晰改写：不要只靠意志力和自己对抗。改变那个把你拉回去的结构。",
    habitCards: [["忙碌陷阱", "你一直证明自己在工作，却回避那个真正会改变今天的决定。"], ["错误房间", "你要求自律战胜一个本来就会耗尽注意力和身份的环境。"], ["旧自我", "你还在和曾经只为生存的版本谈判，虽然你已经准备好领导自己。"]],
    buildReset: "生成重置",
    blueprintLabels: { frame: "Neo Potter 框架", selected: "已选循环", signal: "领域信号", objective: "目标", metric: "成功信号", boundary: "人类边界", rhythm: "运行节奏", links: "GitHub 链接" },
    blueprintFrame: "停止只写提示词。开始创建有生命的系统。人类选择使命，系统处理重复，智慧永远高于机器。",
    finalPrinciple: "愿景第一，系统第二，自动化第三。人类智慧永远高于机器。",
    saved: "已本地保存",
    saving: "保存中...",
    copied: "蓝图已复制",
    exported: "Markdown 已导出",
    generated: "蓝图已生成",
    languageUpdated: "语言已更新"
  }
};

Object.assign(translations.th, {
  templates: {
    thinkshift: {
      title: "รีเซ็ต ThinkShift ประจำวัน",
      signal: "เมื่อคุณเรียนรู้วิธีคิดใหม่ คุณจะฝึกวิธีเป็นคนใหม่ได้",
      objective: "ระบุนิสัยหนึ่งอย่างที่ทำให้ฉันยุ่งแต่ไม่เป็นอิสระ แล้วแทนที่ด้วยการกระทำที่สอดคล้องหนึ่งอย่างวันนี้",
      metric: "จบวันด้วยความเหนื่อยเปล่าน้อยลง ลำดับความสำคัญชัดขึ้นหนึ่งอย่าง และการกระทำหนึ่งอย่างที่ตัวฉันในอนาคตเคารพ",
      boundary: "อย่าเปลี่ยนสิ่งนี้เป็นการตำหนิตัวเอง เป้าหมายคือการรับรู้ ออกแบบใหม่ และขยับอย่างสะอาดหนึ่งครั้ง",
      actions: ["ตั้งชื่อกิจกรรมที่สร้างความเคลื่อนไหวแต่ไม่สร้างความก้าวหน้าจริง", "ถามว่านิสัยนี้กำลังปกป้องฉันจากความรู้สึก การเลือก หรือการเปลี่ยนแปลงอะไร", "ลบตัวกระตุ้นในสภาพแวดล้อมหนึ่งอย่างที่ทำให้รูปแบบนี้ยังอยู่", "เลือกการกระทำที่สอดคล้องหนึ่งอย่างให้ชั่วโมงถัดไปสะอาดขึ้น", "ปิดวันด้วยการบันทึกว่าอะไรเบาขึ้น จริงขึ้น และควรทำซ้ำ"]
    },
    busytrap: {
      title: "ตรวจจับกับดักความยุ่ง",
      signal: "ถ้ามันทำให้คุณยุ่งแต่วันหนึ่งจะรั้งคุณไว้ มันคือสิ่งรบกวน",
      objective: "แยกงานที่ดูเหมือนมีประโยชน์ออกจากการกระทำหนึ่งอย่างที่จะขยับชีวิต ธุรกิจ สุขภาพ หรือความสัมพันธ์จริง ๆ",
      metric: "วันนี้มีอย่างน้อยหนึ่งภาระคุณค่าต่ำที่ถูกพัก มอบหมาย ลบ หรือลดลง",
      boundary: "อย่าลบภาระผูกพันแบบหุนหัน ถ้ากระทบคนอื่นให้เจรจา พัก หรือถามก่อน",
      actions: ["เขียนงานที่ทำให้เหนื่อยแต่ไม่ทำให้ชีวิตชัดขึ้น", "ติดป้ายแต่ละงานว่าเติบโต ดูแล หลีกเลี่ยง หรือความเร่งของคนอื่น", "เลือกการกระทำสำคัญที่สุดที่เลี่ยงมานาน", "ปกป้องช่วงโฟกัสสำหรับสิ่งนั้นก่อนเพิ่มงานอื่น", "จบด้วยหลักฐาน: อะไรเปลี่ยน อะไรถูกลบ และอะไรไม่ได้ครองความสนใจแล้ว"]
    },
    environment: {
      title: "รีเซ็ตสภาพแวดล้อม",
      signal: "วินัยแพ้เมื่อห้องถูกออกแบบมาต้านคนที่คุณกำลังจะเป็น",
      objective: "เปลี่ยนสภาพแวดล้อมทางกายภาพ ดิจิทัล สังคม หรืออารมณ์หนึ่งอย่าง เพื่อให้ทางเลือกที่ดีกว่าง่ายขึ้น",
      metric: "ตัวกระตุ้นหนึ่งอย่างถูกลบ คิวสนับสนุนหนึ่งอย่างถูกเพิ่ม และพฤติกรรมที่ต้องการมีโอกาสเกิดขึ้นมากขึ้นวันนี้",
      boundary: "อย่าโทษคนหรือสถานที่แบบเหมารวม เปลี่ยนสิ่งที่ควบคุมได้ และคุยให้สะอาดเมื่อจำเป็น",
      actions: ["ระบุห้อง แอป ฟีด กลุ่ม ตาราง หรือพิธีกรรมที่ดึงฉันถอยหลัง", "ตั้งชื่อตัวกระตุ้นที่เริ่มรูปแบบเก่า", "ลบ ซ่อน บล็อก จัดใหม่ หรือลดตัวกระตุ้นนั้น", "เพิ่มคิวที่มองเห็นได้หนึ่งอย่างสำหรับตัวตนที่กำลังฝึก", "ลองใช้สภาพแวดล้อมใหม่หนึ่งครั้งแล้วดูว่าทางเลือกที่ดีขึ้นง่ายขึ้นไหม"]
    },
    identity: {
      title: "ลูปอัปเกรดตัวตน",
      signal: "ชีวิตใหม่เริ่มเมื่อทางเลือกซ้ำ ๆ หยุดรับใช้ตัวตนเก่า",
      objective: "ฝึกตัดสินใจหนึ่งอย่างวันนี้ในฐานะคนที่ฉันกำลังจะเป็น ไม่ใช่คนที่ฉันเคยต้องป้องกันตัว",
      metric: "ทางเลือกซ้ำหนึ่งอย่างตรงกับตัวตนใหม่ แม้อารมณ์ ความกดดัน หรือนิสัยจะเถียง",
      boundary: "อย่าใช้ตัวตนเป็นแรงกดดันให้สมบูรณ์แบบ มาตรฐานคือการทำซ้ำอย่างจริงใจ ไม่ใช่ลงโทษตัวเอง",
      actions: ["เขียนประโยคตัวตนเก่าที่คุมรูปแบบนี้อยู่", "เขียนใหม่เป็นตัวตนที่มั่นคงและฝึกได้วันนี้", "เลือกพฤติกรรมเล็กหนึ่งอย่างที่พิสูจน์ตัวตนใหม่", "เมื่อแรงต้านมา ให้หยุดและถามว่าตัวตนไหนกำลังเลือก", "บันทึกบทเรียนเพื่อให้พรุ่งนี้เริ่มจากหลักฐาน ไม่ใช่ความหวัง"]
    }
  }
});

Object.assign(translations.ms, {
  templates: {
    thinkshift: {
      title: "Reset ThinkShift Harian",
      signal: "Apabila anda belajar cara fikir baharu, anda boleh menguasai cara menjadi yang baharu.",
      objective: "Kenal pasti satu tabiat yang membuat saya sibuk tetapi tidak bebas, kemudian gantikan dengan satu tindakan selaras hari ini.",
      metric: "Hari berakhir dengan kurang penat kosong, satu keutamaan lebih jelas, dan satu tindakan yang dihormati diri masa depan.",
      boundary: "Jangan jadikan ini kritikan diri. Matlamatnya ialah sedar, reka semula, dan buat satu gerakan bersih.",
      actions: ["Namakan aktiviti yang mencipta gerakan tanpa kemajuan bermakna.", "Tanya apa yang tabiat ini lindungi saya daripada rasa, pilih, atau ubah.", "Buang satu pencetus persekitaran yang menghidupkan corak lama.", "Pilih satu tindakan selaras yang membersihkan jam seterusnya.", "Tutup hari dengan mencatat apa yang terasa lebih ringan, benar, dan patut diulang."]
    },
    busytrap: {
      title: "Audit Perangkap Sibuk",
      signal: "Jika ia membuat anda sibuk tetapi akan menahan anda nanti, itu gangguan.",
      objective: "Bezakan bunyi produktif daripada satu tindakan yang benar-benar menggerakkan hidup, bisnes, kesihatan, atau hubungan.",
      metric: "Sekurang-kurangnya satu komitmen nilai rendah dijeda, diserah, dipadam, atau dikurangkan hari ini.",
      boundary: "Jangan padam komitmen secara impulsif. Runding, jeda, atau tanya dahulu jika ia menjejaskan orang lain.",
      actions: ["Senaraikan tugas yang membuat saya penat tanpa menjadikan hidup lebih jelas.", "Tanda setiap tugas sebagai pertumbuhan, penyelenggaraan, pengelakan, atau urgensi pinjaman.", "Pilih tindakan berimpak tertinggi yang saya elakkan.", "Lindungi blok fokus untuk tindakan itu sebelum menambah apa-apa lagi.", "Akhiri dengan bukti: apa berubah, apa dibuang, dan apa tidak lagi memiliki perhatian saya."]
    },
    environment: {
      title: "Reset Persekitaran",
      signal: "Tekad kalah apabila ruang direka melawan orang yang anda sedang jadi.",
      objective: "Ubah satu persekitaran fizikal, digital, sosial, atau emosi supaya pilihan lebih baik menjadi lebih mudah.",
      metric: "Satu pencetus dibuang, satu petunjuk sokongan ditambah, dan tingkah laku yang diingini lebih mungkin berlaku hari ini.",
      boundary: "Jangan salahkan orang atau tempat secara membuta tuli. Ubah yang boleh dikawal dan berbual dengan bersih bila perlu.",
      actions: ["Kenal pasti ruang, aplikasi, feed, kumpulan, jadual, atau ritual yang menarik saya ke belakang.", "Namakan pencetus tepat yang memulakan corak lama.", "Buang, sembunyi, blok, susun semula, atau kurangkan pencetus itu.", "Tambah satu petunjuk jelas untuk identiti yang saya latih.", "Jalankan persekitaran baharu sekali dan lihat sama ada tindakan lebih baik menjadi lebih mudah."]
    },
    identity: {
      title: "Loop Naik Taraf Identiti",
      signal: "Hidup baharu bermula apabila pilihan berulang berhenti melayani diri lama.",
      objective: "Latih satu keputusan hari ini sebagai orang yang saya sedang jadi, bukan orang yang dulu hanya bertahan.",
      metric: "Satu pilihan berulang selaras dengan identiti baharu walaupun mood, tekanan, atau tabiat membantah.",
      boundary: "Jangan gunakan identiti sebagai tekanan untuk sempurna. Standardnya ialah pengulangan jujur, bukan hukuman diri.",
      actions: ["Tulis ayat identiti lama yang menjalankan corak ini.", "Tulis semula sebagai identiti berpijak yang boleh saya latih hari ini.", "Pilih satu tingkah laku kecil yang membuktikan identiti baharu.", "Apabila rintangan muncul, berhenti dan tanya diri mana yang memilih.", "Simpan pelajaran supaya esok bermula daripada bukti, bukan harapan."]
    }
  }
});

Object.assign(translations.zh, {
  templates: {
    thinkshift: {
      title: "每日 ThinkShift 重置",
      signal: "当你学会新的思考方式，就能掌握新的存在方式。",
      objective: "找出一个让我很忙却不自由的习惯，并在今天用一个一致的行动替代它。",
      metric: "今天结束时，空耗更少，一个优先级更清晰，并完成一个未来的我会尊重的行动。",
      boundary: "不要把它变成自我批评。目标是觉察、重新设计，以及一个干净的动作。",
      actions: ["命名那个制造动作却没有真实进展的活动。", "问这个习惯在保护我不去感受、选择或改变什么。", "移除一个让旧模式持续存在的环境触发点。", "选择一个让下一个小时更清爽的一致行动。", "用记录收尾：什么更轻、更真、值得重复。"]
    },
    busytrap: {
      title: "忙碌陷阱审计",
      signal: "如果它让你忙，却终有一天会拖住你，那就是分心。",
      objective: "把看起来很生产力的噪音，与真正推动生活、事业、健康或关系的一个行动区分开。",
      metric: "今天至少暂停、委派、删除或减少一个低价值承诺。",
      boundary: "不要冲动删除承诺。若影响他人，先重新协商、暂停或询问。",
      actions: ["列出让我疲惫但没有让生活更清晰的任务。", "把每个任务标记为成长、维护、逃避或借来的紧急感。", "选择我一直回避的最高杠杆行动。", "先保护一段专注时间，再添加其他任务。", "用证据结束：什么改变、什么被移除、什么不再占有我的注意力。"]
    },
    environment: {
      title: "环境重置",
      signal: "当房间被设计成反对你正在成为的人，意志力会输。",
      objective: "改变一个物理、数字、社交或情绪环境，让更好的选择更容易发生。",
      metric: "一个触发点被移除，一个支持性提示被加入，今天想要的行为更可能发生。",
      boundary: "不要盲目责怪人或地方。改变可控部分，需要时进行干净对话。",
      actions: ["识别把我拉回旧模式的房间、应用、信息流、群体、日程或仪式。", "命名启动旧模式的具体触发点。", "移除、隐藏、屏蔽、重排或减少这个触发点。", "为我正在练习的身份加入一个可见提示。", "运行一次新环境，观察更好的行动是否变容易。"]
    },
    identity: {
      title: "身份升级循环",
      signal: "当重复选择不再服务旧自我，新生活就开始了。",
      objective: "今天以正在成为的那个人做一个决定，而不是以曾经只为防御的那个人做决定。",
      metric: "一个重复选择符合新身份，即使情绪、压力或习惯反对。",
      boundary: "不要用身份要求完美。标准是真诚重复，不是惩罚自己。",
      actions: ["写下正在运行这个模式的旧身份句子。", "把它改写成今天可以练习的、脚踏实地的新身份。", "选择一个能证明新身份的小行为。", "当阻力出现，停一下，问是哪一个自我在选择。", "保存今天的教训，让明天从证据开始，而不是从希望开始。"]
    }
  }
});

const fields = {
  loopType: document.querySelector("#loopType"),
  language: document.querySelector("#languageSelect"),
  objective: document.querySelector("#objective"),
  metric: document.querySelector("#metric"),
  boundary: document.querySelector("#boundary"),
  output: document.querySelector("#blueprintOutput"),
  steps: document.querySelector("#loopSteps"),
  saveStatus: document.querySelector("#saveStatus"),
  toast: document.querySelector("#toast"),
  insightLabel: document.querySelector("#insightLabel"),
  insightTitle: document.querySelector("#insightTitle"),
  insightBody: document.querySelector("#insightBody"),
  insightMeta: document.querySelector("#insightMeta"),
  progressMission: document.querySelector("#progressMission"),
  progressStandard: document.querySelector("#progressStandard"),
  progressExport: document.querySelector("#progressExport")
};

const buttons = {
  generate: document.querySelector("#generateBlueprint"),
  reset: document.querySelector("#resetLoop"),
  copy: document.querySelector("#copyBlueprint"),
  copyTop: document.querySelector("#copyBlueprintTop"),
  download: document.querySelector("#downloadBlueprint"),
  theme: document.querySelector("#themeToggle"),
  startGuidedBuild: document.querySelector("#startGuidedBuild"),
  onboardMasterclass: document.querySelector("#onboardMasterclass"),
  onboardArsenal: document.querySelector("#onboardArsenal"),
  onboardSafeGates: document.querySelector("#onboardSafeGates"),
  applyBusyTrapCard: document.querySelector("#applyBusyTrapCard"),
  applyEnvironmentCard: document.querySelector("#applyEnvironmentCard"),
  applyIdentityCard: document.querySelector("#applyIdentityCard"),
  applyTokyoSignal: document.querySelector("#applyTokyoSignal"),
  applyBottleneckSignal: document.querySelector("#applyBottleneckSignal"),
  applyPathSignal: document.querySelector("#applyPathSignal"),
  applySafeLoopSignal: document.querySelector("#applySafeLoopSignal"),
  applyGateSignal: document.querySelector("#applyGateSignal"),
  applyViralSignal: document.querySelector("#applyViralSignal"),
  applyInstaProdSignal: document.querySelector("#applyInstaProdSignal"),
  applyArsenalSignal: document.querySelector("#applyArsenalSignal"),
  applyArsenalStack: document.querySelector("#applyArsenalStack"),
  applyAgenticSignal: document.querySelector("#applyAgenticSignal"),
  applyAgenticStack: document.querySelector("#applyAgenticStack"),
  applyGraphEngineerSignal: document.querySelector("#applyGraphEngineerSignal"),
  applyGraphEngineerStack: document.querySelector("#applyGraphEngineerStack")
};

const graphFields = {
  form: document.querySelector("#graphLoopForm"),
  scenario: document.querySelector("#graphScenario"),
  problem: document.querySelector("#graphProblem"),
  nodes: document.querySelector("#graphNodes"),
  edges: document.querySelector("#graphEdges"),
  outputTitle: document.querySelector("#graph-output-title"),
  outputContent: document.querySelector("#graphOutputContent")
};

const storageKey = "neo-potter-loop-engine";
let currentBlueprint = "";
let currentLanguage = "en";

function t() {
  return translations[currentLanguage] || translations.en;
}

function getTemplate(key = fields.loopType.value) {
  return t().templates?.[key] || templates[key] || templates.thinkshift;
}

function getGuide(key = fields.loopType.value) {
  return t().guide?.[key] || guideCopy[key] || guideCopy.thinkshift;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (!node || value === undefined) return;
  const icon = node.querySelector(":scope > i, :scope > svg");
  if (!icon) {
    node.textContent = value;
    return;
  }
  [...node.childNodes].forEach((child) => {
    if (child !== icon) child.remove();
  });
  node.append(document.createTextNode(` ${value}`));
}

function setGroupText(selector, values, mapper = (value) => value) {
  document.querySelectorAll(selector).forEach((node, index) => {
    const value = values[index];
    if (value !== undefined) node.textContent = mapper(value, index);
  });
}

function applyLanguageStatic() {
  const copy = t();
  document.documentElement.lang = copy.lang;
  document.title = copy.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", copy.description);

  setText(".skip-link", copy.skip);
  setText(".brand-word", copy.brand);
  setText(".language-control span", copy.languageLabel);
  setGroupText(".top-links a", copy.nav);
  setText("#copyBlueprintTop", copy.copy);
  setText(".intro .eyebrow", copy.eyebrow);
  setText("#app-title", copy.heroTitle);
  setText(".manifesto", copy.manifesto);
  setText("#startGuidedBuild", copy.start);
  setText(".hero-secondary", copy.diagnose);
  setGroupText(".metric-strip span", copy.metrics, ([number, label]) => `${number} ${label}`);

  document.querySelectorAll(".hero-brief div").forEach((node, index) => {
    const item = copy.brief[index];
    if (!item) return;
    node.querySelector("span").textContent = item[0];
    node.querySelector("strong").textContent = item[1];
    node.querySelector("p").textContent = item[2];
  });

  setGroupText(".principles span", copy.principles);
  document.querySelectorAll(".trend-stack .trend-mini").forEach((node, index) => {
    const item = copy.trends[index];
    if (!item) return;
    node.querySelector("strong").textContent = item[0];
    node.querySelector("p").textContent = item[1];
  });

  setText(".builder .section-kicker", copy.builderKicker);
  setText("#builder-title", copy.builderTitle);
  setText(".onboarding-label", copy.startHere);
  setText(".onboarding-panel h3", copy.onboardingTitle);
  setText(".onboarding-panel p:last-child", copy.onboardingBody);
  document.querySelectorAll(".starter-button").forEach((node, index) => {
    const item = copy.starterButtons[index];
    if (!item) return;
    node.querySelector("span").textContent = item[0];
    node.querySelector("small").textContent = item[1];
  });

  document.querySelectorAll(".builder-steps li").forEach((node, index) => {
    const label = copy.progress[index];
    if (label) node.lastChild.textContent = ` ${label}`;
  });

  document.querySelector("label[for='loopType']").textContent = copy.resetField;
  document.querySelector("#loopType + .field-note").textContent = copy.fieldNote;
  document.querySelector("label[for='objective']").textContent = copy.objectiveLabel;
  document.querySelector("#objective + .field-note").textContent = copy.objectiveNote;
  document.querySelector("label[for='metric']").textContent = copy.metricLabel;
  document.querySelector("label[for='boundary']").textContent = copy.boundaryLabel;
  setText("#rhythm-label", copy.rhythmLabel);
  document.querySelectorAll(".segmented label").forEach((node, index) => {
    const input = node.querySelector("input");
    const label = copy.rhythmOptions[index];
    if (!input || !label) return;
    [...node.childNodes].forEach((child) => {
      if (child !== input) child.remove();
    });
    node.append(document.createTextNode(` ${label}`));
  });
  setText("#generateBlueprint", copy.generate);
  setText("#resetLoop", copy.reset);

  setText(".signal-copy .section-kicker", copy.signalKicker);
  setText("#signal-title", copy.signalTitle);
  setText(".signal-copy > p", copy.signalBody);
  setText(".fusion-line span", copy.fusion);
  setText(".signal-source span", copy.signalSource);
  setText(".signal-card > p", copy.signalCard);
  ["#applyTokyoSignal", "#applyBottleneckSignal", "#applyPathSignal", "#applySafeLoopSignal"].forEach((selector, index) => {
    setText(selector, copy.quickButtons[index]);
  });

  setText(".habits-band .section-kicker", copy.habitsKicker);
  setText("#habits-title", copy.habitsTitle);
  setText(".habits-band .path-heading p:last-child", copy.habitsBody);
  document.querySelectorAll(".habits-band .system-card").forEach((node, index) => {
    const item = copy.habitCards[index];
    if (!item) return;
    node.querySelector("h3").textContent = item[0];
    node.querySelector("p").textContent = item[1];
    setText(`#${node.querySelector(".inline-action").id}`, copy.buildReset);
  });
}

function setProgress(stage) {
  const order = ["mission", "standard", "export"];
  const items = {
    mission: fields.progressMission,
    standard: fields.progressStandard,
    export: fields.progressExport
  };
  const activeIndex = order.indexOf(stage);

  order.forEach((key, index) => {
    items[key].classList.toggle("is-active", index === activeIndex);
    items[key].classList.toggle("is-complete", index < activeIndex);
  });
}

function scrollToTarget(selector, hash) {
  const target = document.querySelector(selector);
  if (!target) return;

  if (hash && window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (typeof target.focus === "function") {
    target.focus({ preventScroll: true });
  }
}

function scrollToBuilder() {
  scrollToTarget("#guided-build", "#guided-build");
}

function scrollToBlueprint() {
  scrollToTarget("#blueprint-title", "#blueprint-title");
}

function getRhythm() {
  return document.querySelector("input[name='rhythm']:checked")?.value || "daily";
}

function setRhythm(value) {
  const radio = document.querySelector(`input[name='rhythm'][value="${value}"]`);
  if (radio) radio.checked = true;
}

function rhythmLine(value) {
  if (currentLanguage === "th") {
    if (value === "weekly") return "ทำสัปดาห์ละครั้ง แล้วรวมบทเรียนเข้าสู่รอบถัดไป";
    if (value === "always-on") return "ทำงานต่อเนื่องในพื้นหลัง และยกเฉพาะการตัดสินใจที่ต้องใช้ปัญญามนุษย์ขึ้นมา";
    return "ทำทุกวัน จบรอบที่มีประโยชน์หนึ่งรอบ แล้วกลับมาพร้อมก้าวถัดไปที่ชัดที่สุด";
  }
  if (currentLanguage === "ms") {
    if (value === "weekly") return "Jalankan sekali seminggu, kemudian gabungkan pelajaran ke kitaran seterusnya.";
    if (value === "always-on") return "Jalankan berterusan di latar belakang, hanya naikkan keputusan yang memerlukan hikmah manusia.";
    return "Jalankan harian, lengkapkan satu kitaran berguna, dan kembali dengan langkah seterusnya yang paling jelas.";
  }
  if (currentLanguage === "zh") {
    if (value === "weekly") return "每周运行一次，然后把经验复利到下一个循环。";
    if (value === "always-on") return "在后台持续运行，只把需要人类智慧的决定呈现出来。";
    return "每日运行，完成一个有用循环，并带回最清晰的下一步。";
  }
  if (value === "weekly") return "Run once a week, then compound the lessons into the next cycle.";
  if (value === "always-on") return "Run continuously in the background, surfacing only the decisions that need human wisdom.";
  return "Run daily, complete one useful cycle, and return with the clearest next move.";
}

function updateInsight(blueprint) {
  const guide = getGuide(fields.loopType.value);
  fields.insightLabel.textContent = guide.label;
  fields.insightTitle.textContent = blueprint.template.title;
  fields.insightBody.textContent = guide.body;
  fields.insightMeta.textContent = guide.meta;
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

function linkLabel(url) {
  return url
    .replace("https://github.com/", "github.com/")
    .replace("https://", "");
}

function splitGraphLines(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getGraphScenario() {
  return graphScenarioData[graphFields.scenario?.value] || graphScenarioData.creatorLaunch;
}

function graphPlanFromForm() {
  const scenario = getGraphScenario();
  const nodes = splitGraphLines(graphFields.nodes?.value || scenario.nodes.join("\n"));
  const edges = splitGraphLines(graphFields.edges?.value || scenario.edges.join("\n"));
  const problem = graphFields.problem?.value.trim() || scenario.problem;

  return {
    scenario,
    problem,
    nodes: nodes.length ? nodes : scenario.nodes,
    edges: edges.length ? edges : scenario.edges,
    eli5: "A graph engineer makes a dot for each important thing, draws a string when two dots affect each other, then puts a stop sign on any string that could hurt people, money, privacy, or trust.",
    firstMove: scenario.experiment
  };
}

function graphMarkdown(plan) {
  return `# ${plan.scenario.label} Graph Engineer Example

## Explain Like I'm Five
${plan.eli5}

## Problem
${plan.problem}

## Nodes
${plan.nodes.map((node, index) => `${index + 1}. ${node}`).join("\n")}

## Edges
${plan.edges.map((edge, index) => `${index + 1}. ${edge}`).join("\n")}

## Human Gate
${plan.scenario.gate}

## First Safe Experiment
${plan.firstMove}
`;
}

function renderGraphOutput(plan) {
  if (!graphFields.outputContent) return;
  graphFields.outputTitle.textContent = `${plan.scenario.label} graph loop`;
  graphFields.outputContent.innerHTML = `
    <section class="blueprint-block">
      <h3>Explain Like I'm Five</h3>
      <p>${escapeHtml(plan.eli5)}</p>
    </section>
    <section class="blueprint-block">
      <h3>Problem</h3>
      <p>${escapeHtml(plan.problem)}</p>
    </section>
    <section class="blueprint-block">
      <h3>Nodes</h3>
      <ul>
        ${plan.nodes.map((node) => `<li>${escapeHtml(node)}</li>`).join("")}
      </ul>
    </section>
    <section class="blueprint-block">
      <h3>Edges</h3>
      <ul>
        ${plan.edges.map((edge) => `<li>${escapeHtml(edge)}</li>`).join("")}
      </ul>
    </section>
    <section class="blueprint-block">
      <h3>Human Gate</h3>
      <p>${escapeHtml(plan.scenario.gate)}</p>
    </section>
    <section class="blueprint-block">
      <h3>First Safe Experiment</h3>
      <p>${escapeHtml(plan.firstMove)}</p>
    </section>
  `;
}

function loadGraphScenario() {
  const scenario = getGraphScenario();
  if (graphFields.problem) graphFields.problem.value = scenario.problem;
  if (graphFields.nodes) graphFields.nodes.value = scenario.nodes.join("\n");
  if (graphFields.edges) graphFields.edges.value = scenario.edges.join("\n");
  renderGraphOutput(graphPlanFromForm());
}

function renderGraphLoop() {
  const plan = graphPlanFromForm();
  renderGraphOutput(plan);

  fields.loopType.value = "graphengineer";
  fields.objective.value = `Map the system around this problem: ${plan.problem}`;
  fields.metric.value = `The graph clearly explains ${plan.nodes.length} nodes, ${plan.edges.length} edges, the human gate, and the first safe experiment.`;
  fields.boundary.value = plan.scenario.gate;
  setRhythm("weekly");
  renderBlueprint();
  currentBlueprint = `${currentBlueprint.trim()}\n\n${graphMarkdown(plan)}`;
  setProgress("export");
  scrollToTarget("#graph-output-title", "#graph-output-title");
  toast("Graph loop generated");
}

function renderArsenal() {
  const switchboard = document.querySelector("#arsenalSwitchboard");
  const grid = document.querySelector("#arsenalGrid");
  const search = document.querySelector("#arsenalSearch");
  const filter = document.querySelector("#arsenalFilter");
  if (!switchboard || !grid) return;
  const searchTerm = search?.value.trim().toLowerCase() || "";
  const uniqueTools = dedupeArsenalTools();
  const visibleSets = githubArsenalSets
    .map((set) => {
      const tools = set.tools
        .filter((tool) => uniqueTools.has(tool.url))
        .filter((tool) => arsenalMatches(tool, set.name, searchTerm));
      return { ...set, tools };
    })
    .filter((set) => set.tools.length)
    .filter((set) => searchTerm || activeArsenalCategory !== "All" || set.name === activeArsenalSet);

  document.querySelector("#arsenalLinkCount").textContent = String(uniqueTools.size);
  document.querySelector("#arsenalSetCount").textContent = String(githubArsenalSets.length);

  if (filter) {
    filter.innerHTML = githubArsenalCategories.map((category) => `
      <button type="button" class="${category === activeArsenalCategory ? "is-active" : ""}" data-arsenal-category="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `).join("");
    filter.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        activeArsenalCategory = button.dataset.arsenalCategory;
        renderArsenal();
      });
    });
  }

  switchboard.innerHTML = githubArsenalSets.map((set) => `
    <button type="button" class="${set.name === activeArsenalSet ? "is-active" : ""}" data-arsenal-set="${escapeHtml(set.name)}">
      <span>${escapeHtml(set.name)}</span>
      <small>${set.tools.filter((tool) => uniqueTools.has(tool.url)).length} links</small>
    </button>
  `).join("");
  switchboard.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeArsenalSet = button.dataset.arsenalSet;
      activeArsenalCategory = "All";
      if (search) search.value = "";
      renderArsenal();
    });
  });

  grid.innerHTML = visibleSets.length ? visibleSets.map((set) => `
    <section class="arsenal-set" id="${escapeHtml(arsenalSetId(set.name))}" aria-label="${escapeHtml(set.name)}">
      <div class="arsenal-set-heading">
        <div>
          <span>${set.tools.length} links</span>
          <h3>${escapeHtml(set.name)}</h3>
          <p>${escapeHtml(set.note)}</p>
        </div>
      </div>
      <div class="arsenal-tool-grid">
        ${set.tools.map((tool, index) => `
          <article class="tool-card ${escapeHtml(tool.category.toLowerCase())}">
            <div class="tool-topline">
              <span>${escapeHtml(tool.category)}</span>
              <strong>${String(index + 1).padStart(2, "0")}</strong>
            </div>
            <h3>${escapeHtml(tool.name)}</h3>
            <p>${escapeHtml(tool.summary)}</p>
            <a href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">
              <i data-lucide="git-branch"></i>
              ${escapeHtml(linkLabel(tool.url))}
            </a>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("") : `
    <section class="arsenal-empty" aria-live="polite">
      <strong>No matching GitHub links yet.</strong>
      <p>Try a broader search term or switch the topic filter back to All.</p>
    </section>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function dedupeArsenalTools() {
  const urls = new Set();
  githubArsenalSets.forEach((set) => {
    set.tools.forEach((tool) => urls.add(tool.url));
  });
  return urls;
}

function arsenalMatches(tool, setName, searchTerm) {
  const categoryMatch = activeArsenalCategory === "All" || tool.category === activeArsenalCategory;
  const text = [tool.name, tool.url, tool.category, tool.summary, setName].join(" ").toLowerCase();
  return categoryMatch && (!searchTerm || text.includes(searchTerm));
}

function arsenalSetId(name) {
  return `arsenal-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function blueprintText() {
  const template = getTemplate(fields.loopType.value);
  const labels = t().blueprintLabels;
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

## ${labels.frame}
${t().blueprintFrame}

${template.signal ? `\n## ${labels.signal}\n${template.signal}\n` : ""}

## ${labels.objective}
${objective}

## ${labels.metric}
${metric}

## ${labels.boundary}
${boundary}

## ${labels.rhythm}
${rhythmLine(rhythm)}

## Loop Movements
${template.actions.map((action, index) => `${index + 1}. ${action}`).join("\n")}
${template.resources ? `\n## ${labels.links}\n${template.resources.map(([name, url], index) => `${index + 1}. ${name}: ${url}`).join("\n")}\n` : ""}

## Final Principle
${t().finalPrinciple}
`
  };
}

function renderBlueprint() {
  const blueprint = blueprintText();
  currentBlueprint = blueprint.markdown;
  updateInsight(blueprint);

  fields.output.innerHTML = `
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.frame)}</h3>
      <p>${escapeHtml(t().blueprintFrame)}</p>
    </section>
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.selected)}</h3>
      <p>${escapeHtml(blueprint.template.title)}</p>
    </section>
    ${blueprint.template.signal ? `
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.signal)}</h3>
      <p>${escapeHtml(blueprint.template.signal)}</p>
    </section>
    ` : ""}
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.objective)}</h3>
      <p>${escapeHtml(blueprint.objective)}</p>
    </section>
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.metric)}</h3>
      <p>${escapeHtml(blueprint.metric)}</p>
    </section>
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.boundary)}</h3>
      <p>${escapeHtml(blueprint.boundary)}</p>
    </section>
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.rhythm)}</h3>
      <p>${escapeHtml(rhythmLine(blueprint.rhythm))}</p>
    </section>
    ${blueprint.template.resources ? `
    <section class="blueprint-block">
      <h3>${escapeHtml(t().blueprintLabels.links)}</h3>
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
    language: currentLanguage,
    objective: fields.objective.value,
    metric: fields.metric.value,
    boundary: fields.boundary.value,
    rhythm: getRhythm(),
    theme: document.documentElement.dataset.theme === "light" ? "light" : "dark"
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
  fields.saveStatus.textContent = t().saved;
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (!raw) {
    if (translations[urlLanguage]) {
      currentLanguage = urlLanguage;
      fields.language.value = currentLanguage;
      const template = getTemplate(fields.loopType.value);
      fields.objective.value = template.objective;
      fields.metric.value = template.metric;
      fields.boundary.value = template.boundary;
    }
    return;
  }

  try {
    const state = JSON.parse(raw);
    currentLanguage = translations[urlLanguage] ? urlLanguage : translations[state.language] ? state.language : "en";
    fields.language.value = currentLanguage;
    fields.loopType.value = state.loopType || "thinkshift";
    fields.objective.value = state.objective || templates.thinkshift.objective;
    fields.metric.value = state.metric || templates.thinkshift.metric;
    fields.boundary.value = state.boundary || templates.thinkshift.boundary;
    setRhythm(state.rhythm || "daily");
    if (state.theme === "light") document.documentElement.dataset.theme = "light";
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function applyTemplate() {
  const template = getTemplate(fields.loopType.value);
  fields.objective.value = template.objective;
  fields.metric.value = template.metric;
  fields.boundary.value = template.boundary;
  renderBlueprint();
  setProgress("standard");
}

function toast(message) {
  fields.toast.textContent = message;
  fields.toast.classList.add("show");
  window.setTimeout(() => fields.toast.classList.remove("show"), 2200);
}

async function copyBlueprint() {
  const text = currentBlueprint || blueprintText().markdown;
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.left = "-9999px";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
  toast(t().copied);
}

function downloadBlueprint() {
  const blob = new Blob([currentBlueprint || blueprintText().markdown], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "neo-potter-loop-blueprint.md";
  anchor.click();
  URL.revokeObjectURL(url);
  toast(t().exported);
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  if (next === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = "light";
  }
  saveState();
}

function changeLanguage(value, shouldToast = true) {
  currentLanguage = translations[value] ? value : "en";
  fields.language.value = currentLanguage;
  applyLanguageStatic();

  if (resetLoopKeys.includes(fields.loopType.value)) {
    const template = getTemplate(fields.loopType.value);
    fields.objective.value = template.objective;
    fields.metric.value = template.metric;
    fields.boundary.value = template.boundary;
  }

  renderBlueprint();
  if (shouldToast) toast(t().languageUpdated);
}

fields.loopType.addEventListener("change", applyTemplate);
fields.language.addEventListener("change", (event) => changeLanguage(event.target.value));
[fields.objective, fields.metric, fields.boundary].forEach((field) => {
  field.addEventListener("input", () => {
    fields.saveStatus.textContent = t().saving;
    setProgress("standard");
    renderBlueprint();
  });
});
document.querySelectorAll("input[name='rhythm']").forEach((radio) => {
  radio.addEventListener("change", () => {
    setProgress("standard");
    renderBlueprint();
  });
});

function on(control, eventName, handler) {
  control?.addEventListener(eventName, handler);
}

on(buttons.generate, "click", () => {
  renderBlueprint();
  setProgress("export");
  scrollToBlueprint();
  toast(t().generated);
});
on(buttons.reset, "click", applyTemplate);
on(buttons.copy, "click", () => {
  setProgress("export");
  copyBlueprint();
});
on(buttons.copyTop, "click", startMasterclass);
on(buttons.download, "click", () => {
  setProgress("export");
  downloadBlueprint();
});
on(buttons.theme, "click", toggleTheme);
function startMasterclass(event) {
  event?.preventDefault();
  fields.loopType.value = "thinkshift";
  setRhythm("daily");
  applyTemplate();
  scrollToBuilder();
  toast("Daily reset started");
}

on(buttons.startGuidedBuild, "click", startMasterclass);
on(buttons.onboardMasterclass, "click", startMasterclass);
on(buttons.applyTokyoSignal, "click", () => {
  fields.loopType.value = "thinkshift";
  setRhythm("daily");
  applyTemplate();
  scrollToBlueprint();
  toast("Daily reset applied");
});
function startBusyTrap() {
  fields.loopType.value = "busytrap";
  setRhythm("daily");
  applyTemplate();
  scrollToBlueprint();
  toast("Busy trap audit started");
}
on(buttons.applyBottleneckSignal, "click", startBusyTrap);
on(buttons.applyBusyTrapCard, "click", startBusyTrap);
function startEnvironmentReset() {
  fields.loopType.value = "environment";
  setRhythm("daily");
  applyTemplate();
  scrollToBlueprint();
  toast("Environment reset started");
}
on(buttons.onboardArsenal, "click", startEnvironmentReset);
on(buttons.applyPathSignal, "click", startEnvironmentReset);
on(buttons.applyEnvironmentCard, "click", startEnvironmentReset);
function startIdentityReset() {
  fields.loopType.value = "identity";
  setRhythm("daily");
  applyTemplate();
  scrollToBlueprint();
  toast("Identity upgrade started");
}
on(buttons.onboardSafeGates, "click", startIdentityReset);
on(buttons.applySafeLoopSignal, "click", startIdentityReset);
on(buttons.applyIdentityCard, "click", startIdentityReset);
on(buttons.applyGateSignal, "click", startIdentityReset);
function startViralLab() {
  fields.loopType.value = "virallab";
  setRhythm("weekly");
  applyTemplate();
  scrollToBlueprint();
  toast("Viral Signal Lab started");
}
on(buttons.applyViralSignal, "click", startViralLab);
function startInstaProductizer() {
  fields.loopType.value = "instaprod";
  setRhythm("weekly");
  applyTemplate();
  scrollToBlueprint();
  toast("Instagram productizer started");
}
on(buttons.applyInstaProdSignal, "click", startInstaProductizer);
function startArsenal() {
  fields.loopType.value = "arsenal";
  setRhythm("weekly");
  applyTemplate();
  scrollToBlueprint();
  toast("Open-source arsenal started");
}
on(buttons.applyArsenalSignal, "click", startArsenal);
on(buttons.applyArsenalStack, "click", startArsenal);
function startAgentic() {
  fields.loopType.value = "agentic";
  setRhythm("daily");
  applyTemplate();
  scrollToBlueprint();
  toast("Agentic engineering started");
}
on(buttons.applyAgenticSignal, "click", startAgentic);
on(buttons.applyAgenticStack, "click", startAgentic);
on(buttons.applyGraphEngineerSignal, "click", renderGraphLoop);
on(buttons.applyGraphEngineerStack, "click", renderGraphLoop);
on(graphFields.form, "submit", (event) => {
  event.preventDefault();
  renderGraphLoop();
});
on(graphFields.scenario, "change", loadGraphScenario);
[graphFields.problem, graphFields.nodes, graphFields.edges].forEach((field) => {
  on(field, "input", () => renderGraphOutput(graphPlanFromForm()));
});

loadState();
applyLanguageStatic();
loadGraphScenario();
renderArsenal();
renderBlueprint();
setProgress("mission");

document.querySelector("#arsenalSearch")?.addEventListener("input", renderArsenal);

if (window.lucide) {
  window.lucide.createIcons();
}
