// One Line of Earned Pride — make.fun entry.
//
// Writes one line of text (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for someone in a scene.
// Pure Node standard library; deterministic; no network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "After forty years of stammering through his own name, he introduced himself to the new neighbours without stopping once.";

const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`line must be 1-240 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written: the gate rejects anything that is not
// UTF-8 text of 1-240 characters, so fail loudly here instead.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
