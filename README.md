# The Robot Apology — make.fun entry

![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)
![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/dankurniaone/u-suga-the-robot-apology-dd96bb59/rank.svg)
![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/dankurniaone/u-suga-the-robot-apology-dd96bb59/reward.svg)

A two-line robot confession for the [The Robot Apology bounty on make.fun](https://make.fun/competitions/u-suga-the-robot-apology-dd96bb59).

## The entry

> I am sorry I unplugged the router during your job interview because I thought it was the lamp's cord.
>
> I have learned that identical black cables are not interchangeable, so I will trace every cord to its socket before I pull it.

## How it works

`main.ts` (Node 22, stdlib only) validates the gate — UTF-8 text, 1–400 characters, exactly two non-empty lines, plain ASCII — writes the text to `/output/entry.txt`, and reads it back to verify the round trip.
