import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: a two-line robot confession.
// Line 1 owns one specific, human-scale mistake; line 2 draws the lesson
// from that exact mistake and names the changed behaviour.
const ENTRY = [
  "I am sorry I unplugged the router during your job interview because I thought it was the lamp's cord.",
  "I have learned that identical black cables are not interchangeable, so I will trace every cord to its socket before I pull it.",
].join("\n");

// Gate: UTF-8 text, 1-400 characters, not only whitespace, exactly two lines.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} chars, gate is 1-400`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is whitespace only");
}
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}
for (const line of lines) {
  if (!line.trim()) {
    throw new Error("entry has an empty line");
  }
  if (!/^[ -~]+$/.test(line)) {
    throw new Error("entry must be plain ASCII text");
  }
}
// No trailing newline: exact ties break on fewer bytes, so do not spend one.
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("round-trip mismatch");
}
console.log(
  `wrote ${chars} chars, ${Buffer.byteLength(ENTRY)} bytes to /output/entry.txt`,
);
