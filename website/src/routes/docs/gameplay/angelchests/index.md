---
icon: 'minecraft:item/totem_of_undying'
title: 'AngelChests'
description: 'Find and recover the belongings stored after your death.'
keywords: 'axgraves angelchest angelchests grave death recovery lost items'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Luminara SMP Rules'
    href: '/docs/rules/'
  - label: 'Getting help'
    href: '/docs/getting-started/troubleshooting/'
---

When you die, an **AngelChest** stores recoverable belongings at the death location instead of leaving you to chase a pile of scattered items. You have **10 minutes** to recover your belongings. When the chest expires, its remaining items drop into the world rather than staying safely stored.

## Find your belongings

1. Note the world and coordinates shown after death.
2. Prepare food, basic equipment, and a route home.
3. Use `/aclist` (or `/acinfo`) to list your AngelChests. `/ac` opens the recovery menu; `/actp` is the advertised teleport to your last death when you have access.
4. Return to the location and interact with your AngelChest to recover its contents.

Creation, opening, teleport, and fetch prices are **$0**. Teleport and fetch are **same-world only**, with no configured teleport wait. Travel to the correct world first; command access and a safe landing still matter. Recovery teleport gives **five seconds of invulnerability**.

## What is stored and who can collect it

AngelChests store items and XP, and retain **95%** of your XP. Armor is automatically equipped during recovery when possible. The chest disappears when emptied, and you can have at most **five AngelChests**. Creating more uses the drop behavior for the oldest chest.

**Your chest is protected for the first five minutes**, then unlocks for other players. Its total lifetime is **ten minutes**, and the countdown continues while you are offline. Fast looting is enabled; return promptly and keep the [rules](/docs/rules/) in mind.

AngelChests are disabled in `spawn`, `plot`, `minigames`, `zenspawn`, and `vehicleshop`. Do not expect one to appear in those worlds.

## Recover safely

Do not arrive with a completely full inventory. Collect your belongings and check equipment, valuable custom items, and remaining contents before leaving. The location can still be dangerous even when the items themselves are stored safely.

A second death can create another recovery location. Keep track of which death you are recovering rather than assuming every marker refers to the same chest.

## Something is missing

Read any expiry or protection message, check the correct world, and inspect all your recovery entries. If you still need help, provide your death time, location, and missing items through [support](/docs/getting-started/troubleshooting/). Do not assume an AngelChest is permanent storage.
