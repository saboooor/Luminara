---
icon: 'minecraft:item/milk_bucket'
title: 'Tolerance, withdrawal, and recovery'
description: 'Distinguish active effects from persistent tolerance and choose a matching recovery route.'
keywords: 'drugs tolerance and recovery crafting effects farming'
date_created: '2026-10-17'
last_updated: '2026-11-05'
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

Configured tolerance caps are **Heroin 4, Fent 2, Cocaine 5, Meth 10, Blunt 10, Joint 16, Edible 32, Cart 5, Molly 15**, **8** for each tobacco/nicotine form, and **4** for caffeine and energy drinks. Decay delay is **six minutes for Fent**, **five for Cocaine**, **four for Heroin/Meth/cannabis/Molly**, and **three for tobacco/nicotine/caffeine products**. Other drugs use the configured default cap of **5** and **three-minute delay**.

Repeated use raises the drug's tolerance toward its configured maximum. `/tolerance` shows the level, cap, and potency percentage. Below the cap, the effect-duration scaling uses that drug's effectiveness profile; the percentage should not be read as a guaranteed change to every aspect of an effect.

Tolerance can decay after a period without using the drug. Caps, scaling, and delay differ by drug. Taking more while already at maximum tolerance enters overdose handling instead of applying the normal base effect list. Consuming an item at the cap still counts as use and still affects addiction.

## Addiction and withdrawal

Each configured addictive drug adds points when used. Once its threshold is reached, withdrawal can begin after the drug-specific delay since use. Addiction-point decay is disabled for heroin and fent. Other configured addictive drugs have their own decay rates; tolerance decay is a separate timer.

Configured withdrawal includes **Poison II** for heroin, fent, and glue; **Slowness II, Weakness II, Mining Fatigue, and Hunger** for cocaine and meth; **Weakness II** for blunt, joint, edible, and cart; and **Hunger II, Weakness I, and Darkness** for molly. Fent and glue have thresholds low enough for a single use to reach addiction under the default settings. Do not assume every drug needs prolonged repeated use before withdrawal becomes possible.

Withdrawal symptoms and `/drugstatus` use the recovery countdown instead of an indefinitely refreshed potion timer. Symptoms can be temporarily absent while withdrawal is still active. Inspect the remaining withdrawal state as well as individual potion effects.

## Private risk warnings

Private chat warnings appear near or at a drug's tolerance limit and while withdrawal is active. Warnings combine withdrawal and tolerance risk when both apply. Reminders are enabled and repeat every **60 seconds** while the condition remains, with earlier notices when risk increases or a dangerous dose is taken.

These warnings do not identify hidden added drugs. Relieving withdrawal with another dose does not remove overdose risk, and the absence of a warning does not guarantee a harmless outcome. Check `/drugstatus` for the condition behind a reminder.

## Choose a recovery route

These are the enabled cure routes and targets on Luminara. Inspect their recipes through `/drugs`.

| Route    | Targets                                      | Behavior                                                     |
| -------- | -------------------------------------------- | ------------------------------------------------------------ |
| Suboxone | Heroin, fent, glue                           | Clears targeted addiction points.                            |
| Sleeping | Cocaine, molly, meth, caffeine, energy drink | Clears targeted addiction points after successful bed entry. |
| CBD      | Blunt, joint, edible, cart                   | Reduces points by 2 and blocks withdrawal for 30 seconds.    |

Craft Suboxone or CBD using the recipe shown in `/drugs`, then hold the custom cure in your main hand and right-click. CBD recipes require harvested Cannabis Buds rather than ordinary ferns. Sleeping requires actually entering a bed successfully; merely holding a bed or clicking one when sleeping is denied does not trigger the cure.

CBD is a reduction and temporary withdrawal block, not the same full point reset as Suboxone. A cure aimed at one family does not clear every drug's addiction. Addiction treatment also does not promise a tolerance reset or removal of all unrelated potion effects.

## Milk and returning effects

Milk does **not** permanently clear withdrawal here. It may remove potion effects briefly, but the addiction system reapplies withdrawal while the underlying state still qualifies. Use the appropriate recovery route and inspect status afterward.

## Overdose handling

Overdose is separate from ordinary withdrawal and starts with repeated use at maximum tolerance. Server settings control remembered attempts, thresholds, and drug-specific outcomes. Overdose is **enabled**, tracks attempts **per drug**, remembers them for **15 minutes**, and has a configured threshold of **3**. Staged and random outcomes are disabled; configured drug-specific effects or the death fallback apply. These values are not a promise of safe extra doses.

Some drug profiles have nausea-style overdose outcomes; the fallback can kill the character. A nonlethal overdose effect can still leave you vulnerable to ordinary world hazards. Tolerance reduction, addiction treatment, and overdose attempt tracking are separate systems.

## Check recovery

After treatment, use `/drugstatus` to inspect remaining effects and `/tolerance` to inspect potency. If withdrawal returns, check whether the treatment matched the drug and whether it only reduced points or temporarily blocked withdrawal. Report unexpected behavior with the item name, time, and command output through [support](/docs/getting-started/troubleshooting/).

## New products and cosmetic flavors

Tobacco, nicotine, cigarettes, cigars, chewing tobacco, nicotine vapes, caffeine, and energy drinks have their own configured tolerance, addiction, and overdose behavior. Reusing the same vape still counts as repeated drug use. [Flavor infusion](/docs/gameplay/flavor-infusion/) retains the original drug ID and effects; adding a flavor does not reset tolerance, addiction, withdrawal, or remaining puffs.

[Purity](/docs/gameplay/drug-production/#purity-and-refining) scales drug durations but does not reset tolerance or addiction. A [hidden added dose](/docs/gameplay/drug-production/#combining-an-additional-drug-dose) separately tracks the added drug's tolerance, addiction, and overdose behavior, including on the next puff of a laced vape or cart.
