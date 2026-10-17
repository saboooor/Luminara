---
title: 'Tolerance, withdrawal, and recovery'
description: 'Understand persistent character effects and the in-game recovery routes.'
keywords: 'drugs tolerance addiction withdrawal overdose cure recovery cbd sleep'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Tolerance is separate from the active effect

`/tolerance` shows tracked tolerance and current potency. Repeated use of the same consumable can reduce its effectiveness even after the previous active effect expires. Tolerance can decay over time without use.

`/drugstatus` answers a different question: which effects are active now. A sober character can still have tolerance or an addiction state.

## Addiction and withdrawal

These states are tracked by consumable type. Continued use can cause addiction; stopping after addiction can trigger withdrawal penalties. Different families have different penalties, and repeatedly consuming items to suppress a penalty can worsen the longer-term state.

Overdose behavior can add severe effects or cause character death. Exact thresholds and consequences are server settings, so a previous dose is not a safe universal limit.

## In-game recovery

The system includes configured recovery items such as Suboxone and CBD, sleep-based recovery for some stimulant states, and an enchanted golden apple reset route. These do not all target the same consumables. Inspect the current item/menu description and choose the recovery route for the affected state.

Check your tolerance and status afterward. Do not assume clearing an active visual effect also clears every persistent condition.

For recipes and item forms, return to [custom consumables](/docs/gameplay/consumables/). If a tracked state does not update as expected, include the item, time, and status output in a [support report](/docs/getting-started/troubleshooting/).
