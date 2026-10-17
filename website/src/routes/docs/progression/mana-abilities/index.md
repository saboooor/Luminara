---
title: 'Mana and active abilities'
description: 'Ready an ability, trigger its effect, and manage cooldowns.'
keywords: 'auraskills mana ability replenish speed mine terraform charged shot'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Before activating

Some skills unlock an active ability that spends mana. Open `/skills` and inspect the skill's ability description for its unlock, cost, duration, and cooldown. `/mana` shows your mana when available.

## Common activation patterns

| Ability         | Standard interaction                          |
| --------------- | --------------------------------------------- |
| Replenish       | Right-click a hoe, then break a crop          |
| Speed Mine      | Right-click a pickaxe, then mine stone or ore |
| Terraform       | Right-click a shovel, then dig                |
| Lightning Blade | Right-click a sword, then attack              |
| Charged Shot    | Left-click a bow to toggle the mode           |
| Absorption      | Left-click a shield, then take damage         |

Follow the current ability description if it asks you to sneak or use a different interaction. Not every skill has an active ability.

## Failed activation

Check the unlock, mana, cooldown, tool, and eligible action. Blocks in your offhand can affect whether a right-click readies an ability. Cooldowns and mana are separate: enough mana does not bypass a cooldown.

[Animated tree felling](/docs/gameplay/tree-felling/) also has its own toggle and durability rules; chopping a whole tree does not by itself mean you activated a mana ability.
