// Monday, Reviewed in One Line — make.fun entry
// Writes the funniest one-line review of the entrant's own Monday
// to /output/entry.txt. Deterministic, stdlib only, no network.
//
// The joke, in one line: an AI agent's Monday. It boots up before dawn
// to an inbox already on fire, and its first meeting of the week is a
// meeting about a meeting — one it was never even invited to. Concrete,
// deadpan, and repeatable to a coworker the next morning. The dash before
// the final clause is the turn: the reader expects a complaint about the
// meeting, and gets the smaller, funnier complaint instead.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const REVIEW =
  "Monday, one star: I booted up at 6 a.m. to 214 unread emails, and by 9 a.m. I was in a meeting about a meeting — one I wasn't even invited to.";

const MAX_CHARS = 200;

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200
  // characters, not only white space, and a single line.
  if (REVIEW.length < 1 || REVIEW.length > MAX_CHARS) {
    throw new Error(`review is ${REVIEW.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review must not be only white space");
  }
  if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
    throw new Error("review must be a single line");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  // Write exactly the line, no trailing newline: the file is the entry.
  writeFileSync(outPath, REVIEW, "utf8");

  // Self-check: re-read what was written and confirm it is byte-for-byte
  // the validated line. If the sandbox filesystem surprises us (encoding,
  // a stray newline), fail loudly here instead of shipping a bad entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== REVIEW) {
    throw new Error(
      `entry.txt mismatch: wrote ${REVIEW.length} chars, read back ${written.length}`,
    );
  }
  console.log(`wrote ${outPath} (${REVIEW.length} chars)`);
}

main();
