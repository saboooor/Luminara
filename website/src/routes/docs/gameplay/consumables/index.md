---
icon: 'minecraft:item/honey_bottle'
title: 'Custom consumables and effects'
description: 'Inspect recipes, use finished drugs, and understand active effects and delayed visuals.'
keywords: 'drugs consumables crafting effects farming'
date_created: '2026-10-17'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Tolerance and recovery'
    href: '/docs/gameplay/tolerance-and-recovery/'
  - label: 'Growing ingredients'
    href: '/docs/gameplay/drug-crops/'
  - label: 'Bongs and carts'
    href: '/docs/gameplay/bongs-and-carts/'
---

Luminara has a fictional Minecraft drug system with temporary buffs, drawbacks, tolerance, addiction, withdrawal, and overdose effects. These guides describe gameplay mechanics.

## Make and use a finished item

1. Open `/drugs` to browse drugs, recovery items, and equipment.
2. Click an item to inspect its current recipe. Click a harvested ingredient in its crafting grid to open a growing dialog; use **Back to recipe** to return. Use the page arrows for more items.
3. Grow any required [custom ingredients](/docs/gameplay/drug-crops/). Ordinary starter materials and planting stock cannot replace harvests.
4. Craft the finished item, inspect its description, hold it in your **main hand**, and **right-click** to use it.
5. Check `/drugstatus` for active effects and `/tolerance` for persistent tolerance.

Most finished drugs consume one item per use. Carts instead lose one remaining use. A renamed vanilla item is not equivalent to the crafted custom item.

## Drug families

The table describes bundled base profiles. Strains, tolerance, and server configuration can change the result; inspect live items and recipes.

| Drug or form               | Base gameplay behavior                                     |
| -------------------------- | ---------------------------------------------------------- |
| Heroin                     | Strength and Resistance with Slowness.                     |
| Fent                       | Strength, Absorption, and Resistance with strong Slowness. |
| Meth                       | Speed and Haste with Weakness.                             |
| Cocaine                    | Saturation, Speed, and Strength.                           |
| Molly                      | Regeneration and Absorption with Glowing.                  |
| Glue                       | Poison and Mining Fatigue.                                 |
| Shrooms                    | Jump Boost and Luck with Nausea.                           |
| Joint, blunt, edible, cart | Cannabis effects depend on the supplied strain.            |
| LSD                        | Delayed client-side portal visuals and nausea.             |
| Salvia                     | Delayed dirt-block disguise effect.                        |

A beneficial effect does not cancel the drug's drawback, addiction tracking, or overdose behavior. See [tolerance and recovery](/docs/gameplay/tolerance-and-recovery/) before repeatedly using the same item.

## Delayed hallucinogen effects

LSD defaults to a **5-second onset** and **180-second duration**. Salvia defaults to a **3-second onset** and **45-second duration**. These are configurable. Use `/drugstatus` to check pending onset instead of assuming a delayed item failed.

The LSD portal trip is a visual effect rather than an instruction to build or enter a portal. Salvia's disguise is an effect on the character; it does not give you a dirt block to place.

## Understand what is active

`/drugstatus` and `/drugs status` list tracked drugs, withdrawal, other potion effects, remaining durations, strengths, and supported onset delays. Effects without a recorded source are labeled source unknown.

A sober message describes current effects. Tolerance and addiction can remain after the active effect ends. Recovery items target particular persistent conditions, so do not assume an expired visual effect has reset your character.

For reusable cannabis equipment, read [bongs and cartridges](/docs/gameplay/bongs-and-carts/). For selling finished items, read [cartel trading](/docs/gameplay/cartel-trading/).
