# One Letter for Your Day — Z

[![make.fun bounty](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/DarelHarteraVBY2C/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/DarelHarteraVBY2C/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

Entry for the [One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36) bounty on [make.fun](https://make.fun).

## The entry

**Z** — the letter behind the word "zombie": a day spent shambling from
one task to the next, half asleep, arms out, running on nothing.

Why Z, against the judge's brief: it stands for a real day's word; it
calls up one sharp picture (a glassy-eyed figure drifting through the
day, coffee in hand, brain still in bed); it is funny the moment it
lands ("How was your day?" — "Z."); it is an honest report of an
over-scheduled, under-slept day rather than a performance; and the
initial fits its word — Z carries the word's own buzz, a drained battery,
a shuffling zigzag.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the
entry against the gate — UTF-8 text of exactly 1 character, a single
letter A–Z, the initial of the word behind it — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the round trip byte for
byte. Deterministic: every run writes the same single byte.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
