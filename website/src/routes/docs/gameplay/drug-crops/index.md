---
icon: 'minecraft:item/wheat_seeds'
title: 'Growing drug ingredients'
description: 'Craft seeds, maintain growing conditions, and harvest custom recipe ingredients.'
keywords: 'drugs drug crops crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Cannabis strains'
    href: '/docs/gameplay/cannabis-strains/'
  - label: 'Farm workers'
    href: '/docs/gameplay/drug-farms/'
---

## Choose a crop

Combine **one wheat seed with the starter item** in a shapeless crafting recipe to make a crop seed. These are fictional Minecraft crafting systems.

| Crop      | Starter item  | Harvest used for | Default active growth time |
| --------- | ------------- | ---------------- | -------------------------- |
| Poppy     | Poppy         | Heroin and fent  | 10 minutes                 |
| Mushroom  | Red mushroom  | Shrooms          | 8 minutes                  |
| Ephedra   | Quartz        | Meth             | 15 minutes                 |
| Coca      | Vine          | Cocaine          | 15 minutes                 |
| Sassafras | Magenta dye   | Molly            | 15 minutes                 |
| Ergot     | Spore blossom | LSD              | 20 minutes                 |
| Salvia    | Lilac         | Salvia           | 10 minutes                 |
| Resin     | Bone meal     | Glue             | 10 minutes                 |

These times are plugin defaults; server settings can change them. Cannabis uses planting ferns instead of this seed recipe; see [cannabis strains](/docs/gameplay/cannabis-strains/).

## Plant and monitor

Till soil, hydrate the farmland, and right-click it with the custom seed. Provide light level **9 or higher**. Right-click a planted crop with an empty hand to see its progress bar, percentage, remaining active growth time, and reasons it is paused.

The timer counts active growing time. Dry farmland, insufficient light, and unloaded chunks pause growth. Bone meal cannot fast-forward it. Crop progress is saved across restarts.

## Harvest and replant

Break a fully mature ingredient crop to receive **two harvested ingredients and one reusable seed**. Mature crops have a **10% chance of one additional seed**. Breaking an immature plant returns only its seed; waiting is necessary to obtain recipe ingredients.

Save planting stock for the next crop. Farm workers can reuse seeds automatically; see [farm controllers](/docs/gameplay/drug-farms/).

## Craft with the harvest

Open `/drugs` and click a finished drug to view its current recipe. The crop ingredients must be the custom harvested items. An ordinary poppy, quartz, vine, fern, or other starter material cannot replace its corresponding harvest. Planting seeds also cannot replace harvested ingredients. This requirement applies to automatic crafters too.

For example, the quartz used to create an ephedra seed is planting input. Grow that seed and use the ephedra harvest in the meth recipe where the custom ingredient is required.

## When a crop will not grow

- Check the empty-hand progress readout first.
- Hydrate the farmland and restore light level 9 or higher.
- Remain within loaded chunks while waiting.
- For cannabis, leave room for the upper half of the mature large fern.
- If crafting fails after harvesting, check that the item is the custom harvest and inspect the live recipe again.

If conditions look correct but progress remains stuck, report the crop type, location, progress readout, and time observed to [support](/docs/getting-started/troubleshooting/).
