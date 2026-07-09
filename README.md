# Neo Potter Loop Engine

A static web app for designing living AI loops in the Neo Potter style: vision first, systems second, automation third, proof before trust, and human wisdom above the machine.

Live app:

https://neo-potter-loop-engine.netlify.app

## What Is Included

- Living AI Loop Builder
- Daily reset starter paths
- Dynamic mission guidance for each loop type
- Agentic Engineering loop prompt that preserves important context
- Safe Loop Gates
- Open-Source Arsenal with direct GitHub links
- Copy and Markdown export
- Mobile responsive design
- Netlify and Vercel static deploy config
- Build-time verification for all required GitHub links

## Product Flow

1. Choose a starter path: Busy Trap, Environment, Identity, or another loop from the selector.
2. Adjust the mission, success signal, human boundary, and rhythm.
3. Generate the Living Loop Blueprint.
4. Copy or export the Markdown system.
5. Use the Agentic Engineering loop when the system should keep improving itself without losing context.
6. Use the GitHub Arsenal links for deeper open-source experiments.

## Agentic Loop Rule

The app should remove filler, duplicated UI, stale files, and weak information architecture. It should not remove important reasoning, source data, decisions, links, failed checks, safety gates, or user intent just to make the output shorter.

## Next-Level Autonomous Prompt

Use [NEXT_LEVEL_PROMPT.md](NEXT_LEVEL_PROMPT.md) when the project needs a full autonomous upgrade pass. It tells the agent to inspect the repo, research current official docs when needed, improve one bounded surface, rebuild, debug, browser-test desktop and mobile, preserve approval gates, and report proof before trust.

## Open-Source Arsenal Links

1. AutoHedge - https://github.com/The-Swarm-Corporation/AutoHedge
2. Vibe Trading - https://github.com/HKUDS/Vibe-Trading
3. Fincept Terminal - https://github.com/Fincept-Corporation/FinceptTerminal
4. LibreChat - https://github.com/danny-avila/LibreChat
5. Open Higgsfield AI - https://github.com/Anil-matcha/Open-Higgsfield-AI
6. Open LLM VTuber - https://github.com/Open-LLM-VTuber/open-llm-vtuber
7. Claude Ads - https://github.com/AgriciDaniel/claude-ads
8. Agentic Inbox - https://github.com/cloudflare/agentic-inbox
9. Camoufox Browser - https://github.com/daijro/camoufox
10. Hyperframes - https://github.com/heygen-com/hyperframes

## Local Setup

```bash
npm install
npm run build
npm test
npm start
```

The app serves from `public/`.

## Verification

`npm run build` and `npm test` run the same static verification script:

- Confirms required app files and assets exist.
- Confirms `index.html` references the CSS, JS, and hero image.
- Confirms the start action links to the builder.
- Confirms all required GitHub Arsenal links are present exactly once.
- Blocks the removed prompt-compressor route from re-entering the app.

## Deploy

The project includes `netlify.toml` and `vercel.json`. Netlify headers live in `netlify.toml` only, to avoid duplicate header configuration.

```bash
npm run deploy
```
