---
icon: 'minecraft:item/honey_bottle'
title: 'Custom consumables and effects'
description: 'Inspect recipes, use finished drugs, and understand active effects and delayed visuals.'
keywords: 'drugs consumables crafting effects farming'
date_created: '2026-10-17'
last_updated: '2026-11-05'
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

1. Open `/drugs` and choose a category to browse drugs, recovery items, and equipment.
2. Click an item to inspect its current recipe. Products with flavors first open a category: choose the unflavored item for its base recipe, or a flavor for cauldron infusion instructions. Click a harvested ingredient in its crafting grid to open a growing dialog; use **Back to recipe** to return. Custom ingredients and custom items in your inventory can also be clicked while viewing a recipe to open their own recipes. Use the page arrows for more items.
3. Grow any required [custom ingredients](/docs/gameplay/drug-crops/). Ordinary starter materials and planting stock cannot replace harvests.
4. Craft the finished item, inspect its description, hold it and **right-click** to use it. Drug items support either hand; use the main hand for recovery items and the hand-specific cauldron workflows.
5. Check `/drugstatus` for active effects and `/tolerance` for persistent tolerance.

Most finished drugs consume one item per use. Carts and nicotine vapes instead lose one remaining use per hit. A renamed vanilla item is not equivalent to the crafted custom item.

## Drug families

The table describes bundled base profiles. Strains, tolerance, and server configuration can change the result; inspect live items and recipes.

| Drug or form                                               | Base gameplay behavior                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| Heroin                                                     | Strength and Resistance with Slowness.                                      |
| Fent                                                       | Strength, Absorption, and Resistance with strong Slowness.                  |
| Meth                                                       | Speed and Haste with Weakness.                                              |
| Cocaine                                                    | Saturation, Speed, and Strength.                                            |
| Molly                                                      | Regeneration and Absorption with Glowing.                                   |
| Glue                                                       | Poison and Mining Fatigue.                                                  |
| Shrooms                                                    | Jump Boost and Luck with Nausea.                                            |
| Joint, blunt, edible, cart                                 | Cannabis effects depend on the supplied strain.                             |
| Tobacco, cigarette, cigar, chewing tobacco, nicotine, vape | Haste, Speed, and Saturation; some profiles also cause Nausea.              |
| Pure Caffeine, Energy Drink                                | Speed and Haste with their own tolerance, addiction, and overdose handling. |
| LSD                                                        | Delayed client-side portal visuals and nausea.                              |
| Salvia                                                     | Delayed dirt-block disguise effect.                                         |

A beneficial effect does not cancel the drug's drawback, addiction tracking, or overdose behavior. See [tolerance and recovery](/docs/gameplay/tolerance-and-recovery/) before repeatedly using the same item.

## Sensory and chat effects

Drug use can also produce smoke and coughing, racing-heart sounds, paranoia, psychedelic visuals, opioid nodding, or stumbling, depending on the drug. These accompany the active effects; they do not replace tolerance or withdrawal.

When chat effects are enabled, the first two eligible words of public chat change while the relevant drug effects are active:

| Active drug family                             | Speech effect   | Example    |
| ---------------------------------------------- | --------------- | ---------- |
| Meth, cocaine, molly, caffeine, energy drink   | Stuttering      | `h-hello`  |
| Joint, blunt, cart, edible, heroin, fent, glue | Drawn-out words | `hellooo`  |
| LSD, shrooms, salvia                           | Pauses          | `hello...` |

Chat changes follow active drug effects and their onset, rather than tolerance alone. They stop when the relevant effects end. Staff can disable them.

Edibles have a **10-second onset by default** and announce when they kick in. Use `/drugstatus` to check the pending onset.

## Delayed hallucinogen effects

LSD defaults to a **5-second onset** and **180-second duration**. Salvia defaults to a **3-second onset** and **45-second duration**. These are configurable. Use `/drugstatus` to check pending onset instead of assuming a delayed item failed.

The LSD portal trip is a visual effect rather than an instruction to build or enter a portal. Salvia's disguise is an effect on the character; it does not give you a dirt block to place.

## Understand what is active

`/drugstatus` and `/drugs status` list tracked drugs, withdrawal, other potion effects, remaining durations, strengths, and supported onset delays. Effects without a recorded source are labeled source unknown.

A sober message describes current effects. Tolerance and addiction can remain after the active effect ends. Recovery items target particular persistent conditions, so do not assume an expired visual effect has reset your character.

For reusable cannabis equipment, read [bongs and cartridges](/docs/gameplay/bongs-and-carts/). For selling finished items, read [cartel trading](/docs/gameplay/cartel-trading/).

## Production, flavors, and custom textures

[Tobacco, nicotine, coffee, energy drinks, and cannabis products](/docs/gameplay/drug-production/) now use processing and brewing chains alongside crafting. Vapes start with **32 puffs**, carts with **16**, and bongs with **24 uses** by default.

[Cauldron infusion](/docs/gameplay/flavor-infusion/) adds cosmetic flavors without changing effects, cannabis strain, or remaining uses. Flavors stay under their base product in `/drugs`. The current resource pack has distinct models for drugs, recovery items, bongs, intermediates, crop harvests and seeds, flavored variants, and farm tools. Vanilla items and crop blocks retain their normal appearance. Older items may keep previous model metadata; newly created items receive the current models.

## Purity and additional doses

A product's **purity** affects its duration and sale value, with 90% as the normal baseline. Refine finished drugs with quartz at a cauldron; see [purity and refining](/docs/gameplay/drug-production/#purity-and-refining).

Items can also carry a hidden added dose of another drug. It has its own effects, tolerance, addiction, and overdose behavior and is not identified by the item's name, lore, or texture. Read [combining an additional dose](/docs/gameplay/drug-production/#combining-an-additional-drug-dose) before using or trading combined products.
