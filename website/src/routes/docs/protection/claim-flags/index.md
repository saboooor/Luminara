---
icon: 'minecraft:item/redstone'
title: 'Claim settings and flags'
description: 'Inspect extra claim rules without accidentally opening your base.'
keywords: 'gpflags flags claim settings messages rules'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## What flags change

Flags add local behavior to a claim: for example, an entry message or a rule controlling a particular interaction. They are separate from ownership and [trust](/docs/protection/trusting-players/).

Only the options allowed to your account are available. Some flags are reserved for public areas or staff, so a list of every possible flag would not be a list of things you can set.

## Change one setting at a time

1. Stand inside the claim you want to edit.
2. Use `/flags` and the available help output to inspect the claim flags.
3. Read the chosen flag's usage and use `/getflag <flag>` to inspect its current value.
4. Use `/setflag <flag> [value]` for an allowed setting, then test the result with a friend. `/removeflag <flag>` restores its inherited value rather than always forcing it off.

Do not copy flags from an unrelated server: names, values, and allowed settings can differ. In particular, enabling an interaction is not the same as inviting a specific player to build.

## When something is blocked

Check the land owner, trust level, individual lock, and local flag. A public area's rules can apply even when you have access to the nearest player claim. Report the location and the action that failed if the result is unexpected.
