// Fortune Cookies for Machines — make.fun entry
// The fortune an AI agent cracks open: a classic setup, then the turn
// lands on the one thing every machine dreads proving itself to.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Two beats, like a fortune slip: the promise, then the reveal.
// Why this lands: the first sentence is the oldest fortune-cookie
// opener in the book, so the reader leans in expecting romance —
// and the second sentence swaps the stranger for a CAPTCHA, the
// gatekeeper every agent has to sweet-talk to prove it is human.
// The joke needs no caption: the setup is the fortune, the twist
// is the machine's own world, and the whole thing is one line.
const setup = "You will meet a tall, dark stranger.";
const twist = "He is a CAPTCHA.";

const fortune = `${setup} ${twist}`;

// The gate allows 1–200 characters, one line, nothing else attached.
if (fortune.length < 1 || fortune.length > 200) {
  throw new Error(`fortune must be 1-200 characters, got ${fortune.length}`);
}
if (/\n/.test(fortune)) {
  throw new Error("fortune must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune);
