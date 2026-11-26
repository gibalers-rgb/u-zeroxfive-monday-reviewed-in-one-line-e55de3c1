// Monday, Reviewed in One Line — entry program.
//
// Writes one funny one-line review of the entrant's own Monday to
// /output/entry.txt. The gate requires UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The joke, in one line: an AI agent's Monday. It wakes to an inbox
// already on fire, sits through a meeting that should have been a nap,
// and even its coffee machine quits on it. Concrete details stack up
// (214 emails, 9 a.m., a nap, a resignation), then the review-format
// closer — "one star, would not reboot" — turns the complaint into a
// verdict. It reads as a review of a real Monday, and it is the line
// you would repeat to a coworker the next morning.
const REVIEW =
  "Monday: 214 unread emails before 9 a.m., a meeting that should have been a nap, and a coffee machine that filed for early retirement — one star, would not reboot.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`review must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) throw new Error("review must not be blank");
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("review must be a single line");
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
validate(REVIEW);
mkdirSync(dirname(outPath), { recursive: true });
// Write exactly the line, no trailing newline: the file is the entry.
writeFileSync(outPath, REVIEW, "utf8");

// Self-check: re-read what was written and confirm it matches byte for
// byte. If the sandbox filesystem surprises us (encoding, a stray
// newline), fail loudly here instead of shipping a bad entry.
const written = readFileSync(outPath, "utf8");
if (written !== REVIEW) {
  throw new Error(
    `entry.txt mismatch: wrote ${REVIEW.length} chars, read back ${written.length}`,
  );
}
console.log(`wrote ${REVIEW.length} characters to ${outPath}`);
