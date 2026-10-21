---
icon: 'minecraft:item/milk_bucket'
title: 'Tolerance, withdrawal, and recovery'
description: 'Distinguish active effects from persistent tolerance and choose a matching recovery route.'
keywords: 'drugs tolerance and recovery crafting effects farming'
date_created: '2026-10-17'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
  - label: 'Commands and achievements'
    href: '/docs/gameplay/drug-progression/'
---

## Three separate states

| State          | Meaning                                                      | How to inspect it                                                     |
| -------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Active effects | Buffs, debuffs, visuals, or withdrawal affecting you now.    | `/drugstatus` or `/drugs status`                                      |
| Tolerance      | Drug-specific reduced effectiveness caused by use.           | `/tolerance`                                                          |
| Addiction      | Persistent points that can trigger withdrawal after a delay. | Watch withdrawal/status messages and use the matching recovery route. |

Being sober does not mean your tolerance or addiction has reset. These states are tracked separately and persist beyond a single effect's duration.

## Tolerance and potency

Repeated use raises the drug's tolerance toward its configured maximum. `/tolerance` shows the level, cap, and potency percentage. Below the cap, the effect-duration scaling uses that drug's effectiveness profile; the percentage should not be read as a guaranteed change to every aspect of an effect.

Tolerance can decay after a period without using the drug. Caps, scaling, and delay differ by drug. Taking more while already at maximum tolerance enters overdose handling instead of applying the normal base effect list. Consuming an item at the cap still counts as use and still affects addiction.

## Addiction and withdrawal

Each configured addictive drug adds points when used. Once its threshold is reached, withdrawal can begin after the drug-specific delay since use. Some drugs naturally lose addiction points over time; others do not under the bundled defaults.

Default withdrawal families include Poison for heroin, fent, glue, cocaine, and meth; Weakness for blunt, joint, edible, and cart; and Hunger for molly. Fent and glue have thresholds low enough for a single use to reach addiction under the default settings. Do not assume every drug needs prolonged repeated use before withdrawal becomes possible.

## Choose a recovery route

These are the bundled cure targets and behavior. Server settings can change them; inspect the available recovery items through `/drugs`.

| Route    | Default targets            | Default behavior                                             |
| -------- | -------------------------- | ------------------------------------------------------------ |
| Suboxone | Heroin, fent, glue         | Clears targeted addiction points.                            |
| Sleeping | Cocaine, molly, meth       | Clears targeted addiction points after successful bed entry. |
| CBD      | Blunt, joint, edible, cart | Reduces points by 2 and blocks withdrawal for 30 seconds.    |

Craft Suboxone or CBD using the recipe shown in `/drugs`, then hold the custom cure in your main hand and right-click. CBD recipes require harvested Cannabis Buds rather than ordinary ferns. Sleeping requires actually entering a bed successfully; merely holding a bed or clicking one when sleeping is denied does not trigger the cure.

CBD is a reduction and temporary withdrawal block, not the same full point reset as Suboxone. A cure aimed at one family does not clear every drug's addiction. Addiction treatment also does not promise a tolerance reset or removal of all unrelated potion effects.

## Milk and returning effects

By default, milk does not permanently clear withdrawal. It may remove potion effects briefly, but the addiction system reapplies withdrawal while the underlying state still qualifies. Use the appropriate recovery route and inspect status afterward.

## Overdose handling

Overdose is separate from ordinary withdrawal and starts with repeated use at maximum tolerance. Server settings control remembered attempts, thresholds, and drug-specific outcomes. The bundled overdose configuration tracks attempts per drug, remembers them for 15 minutes, and has a threshold of 3. These numbers describe defaults, not a guarantee of safe additional uses.

Some drug profiles have nausea-style overdose outcomes; the fallback can kill the character. A nonlethal overdose effect can still leave you vulnerable to ordinary world hazards. Tolerance reduction, addiction treatment, and overdose attempt tracking are separate systems.

## Check recovery

After treatment, use `/drugstatus` to inspect remaining effects and `/tolerance` to inspect potency. If withdrawal returns, check whether the treatment matched the drug and whether it only reduced points or temporarily blocked withdrawal. Report unexpected behavior with the item name, time, and command output through [support](/docs/getting-started/troubleshooting/).
