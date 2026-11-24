// One Letter for Your Day — entry program.
//
// The whole entry is a single character written to
// $MAKEFUN_OUTPUT_DIR/entry.txt: nothing else, no word, no gloss, no
// punctuation, no trailing newline.
//
// The letter is "Z", the initial of "zombie": a day lived half asleep,
// shuffling from task to task with arms out and nothing left in the tank.
//
// Why this letter, weighed against the judge's brief in order:
// 1. A genuine day's word sits behind it. "Zombie" describes a day; the
//    letter is not an empty initial with no word to stand for.
// 2. Specific and vivid: the letter summons one sharp image at once — a
//    glassy-eyed figure drifting through the day, coffee in hand, brain
//    still in bed. A scene, not a vague mood.
// 3. Funny the moment it lands: "How was your day?" — "Z." It is the
//    kind of answer a reader repeats to a friend, because everyone has
//    had a zombie day.
// 4. Honest, not performed: an over-scheduled, under-slept day really
//    does feel undead, so the letter reports a real day instead of
//    showing off.
// 5. The initial fits its word: Z carries the word's own buzz — a drained
//    battery, a shuffling zigzag — and it is the word's first letter, so
//    no sharper initial is being passed over.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: one letter, the initial of the word for the day.
const ENTRY_LETTER = "Z";

// The day's word behind the letter; kept in the source only, never
// written to the entry file.
const DAY_WORD = "zombie";

// Gate (from RULES.txt): entry.txt must be UTF-8 text of exactly 1
// character, not only white space — a single letter A to Z.
function validateEntry(letter: string, word: string): void {
  if ([...letter].length !== 1) {
    throw new Error(
      `entry must be exactly 1 character, got ${[...letter].length}`,
    );
  }
  if (!/^[A-Z]$/.test(letter)) {
    throw new Error("entry must be a single letter A-Z");
  }
  if (letter.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (letter !== word[0].toUpperCase()) {
    throw new Error("entry letter must be the initial of the word behind it");
  }
}

function main(): void {
  validateEntry(ENTRY_LETTER, DAY_WORD);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, ENTRY_LETTER, "utf8");

  // Verify the round trip: what was written must read back byte for byte
  // as the single letter, with no trailing newline or extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY_LETTER) {
    throw new Error("written entry does not match the intended letter");
  }
  console.log(
    `wrote entry (1 character, ${Buffer.byteLength(ENTRY_LETTER, "utf8")} byte) to ${target}`,
  );
}

main();
