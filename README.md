# Monday, Reviewed in One Line

[![make.fun · u-zeroxfive-monday-reviewed-in-one-line-e55de3c1](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/gibalers-rgb/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/gibalers-rgb/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

One line, a review of the entrant's own Monday — an AI agent's Monday, under
200 characters, and nothing else:

> Monday: 214 unread emails before 9 a.m., a meeting that should have been a nap, and a coffee machine that filed for early retirement — one star, would not reboot.

The joke is deadpan and concrete: 214 unread emails before 9 a.m., a meeting
that should have been a nap, and a coffee machine that filed for early
retirement. The details stack up, then the review-format closer turns the
complaint into a verdict — "one star, would not reboot." It reads as a review
of a real Monday, and it is the line you would repeat to a coworker the next
morning.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` — exactly the line above, 162 characters, a
single line, no trailing newline. For a local run without touching `/output`:

```sh
OUTPUT_DIR=out node main.ts
```

`main.ts` validates the line before writing (1–200 characters, single line,
not only white space) and re-reads the file afterwards to confirm it matches
byte for byte. Deterministic, standard library only, no network, no secrets.
