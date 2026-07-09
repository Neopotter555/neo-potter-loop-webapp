# Testing

This app is a dependency-light static site. The current test layer is a Node verification script, shared by:

```bash
npm run build
npm test
```

The verifier checks required files, asset references, the builder anchor, required GitHub Arsenal links, duplicate GitHub URLs, and the removed prompt-compressor route.

It also checks that `NEXT_LEVEL_PROMPT.md` exists and keeps the core autonomous-loop gates: official-doc research, no secrets, human approval, browser QA, Core Web Vitals, and both build commands.

Add browser or interaction tests when JavaScript behavior grows beyond the current single-page builder flow. For now, final verification should also include a real browser pass on desktop and mobile.
