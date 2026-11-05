---
icon: 'minecraft:item/experience_bottle'
title: 'Bottling XP'
description: 'Store vanilla experience in bottles for later use or trading.'
keywords: 'bottledexp bottle xp experience storage enchanting levels'
date_created: '2026-10-23'
last_updated: '2026-10-23'
extra_buttons:
  - label: 'Leveling your skills'
    href: '/docs/progression/skills/'
---

## Save your experience

BottledExp lets you turn vanilla XP into experience bottles. Keep them in storage for later or trade them with other players. Bottling removes XP from your experience bar; it does not copy it.

## Bottle XP

Use `/bottle` to see the available commands. To create experience bottles, use `/bottle get <amount>`; for example, `/bottle get 10` requests ten bottles. Use `/bottle get max` to bottle as much as you can with your available XP and resources.

Each bottle costs **10 XP points** and awards **8 XP** when used: this is a **20% conversion loss**, not lossless storage. Glass-bottle consumption and money charges are disabled. Leave room in your inventory; the configured storage conversion maximum is **2,304 bottles** and the minimum XP amount setting is **7**. Enchanting-table interaction and craftable XP containers are disabled, so use the commands.

## Check your XP

Use `/bottle stats` to check your experience, or `/bottle until <level>` to check how much XP you need to reach a target level.

These commands use vanilla experience, the XP used for enchanting and anvils. [Skill XP](/docs/progression/skills/) and [job progress](/docs/economy/jobs/) are separate.
