---
icon: 'minecraft:item/brewing_stand'
title: 'Drug production and brewing'
description: 'Process harvests into tobacco products, caffeine, cannabis ingredients, and finished items.'
keywords: 'drugs flavors infusion production nicotine caffeine cannabis'
date_created: '2026-11-03'
last_updated: '2026-11-03'
extra_buttons:
  - label: 'Growing ingredients'
    href: '/docs/gameplay/drug-crops/'
  - label: 'Flavor infusion'
    href: '/docs/gameplay/flavor-infusion/'
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
---

Production uses custom harvested ingredients, processing stations, and assembly recipes. Open `/drugs`, select the base product, then choose its unflavored recipe when a flavor category opens. Recipe previews show crafting layouts, cooking times, or the base bottle and brewing ingredient. Click supported custom ingredients to follow their production or growing guide.

Times and layouts below describe plugin defaults. Inspect the live menu for server settings.

## Tobacco and nicotine

Grow [Tobacco Leaves](/docs/gameplay/drug-crops/) before processing them. Ordinary dried kelp cannot replace the custom leaves.

| Product              | Default process                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Tobacco              | Smoke harvested Tobacco Leaves in a smoker for 10 seconds.                                                       |
| Nicotine             | Process harvested Tobacco Leaves in a furnace for 20 seconds.                                                    |
| Cigarette            | Craft one paper beside one processed Tobacco.                                                                    |
| Cigar                | Craft three processed Tobacco above three leaf litter.                                                           |
| Chewing Tobacco      | Craft harvested Tobacco Leaves and sugar in the upper row, with paper below; check the exact layout in `/drugs`. |
| Nicotine Vape Liquid | Brew a water bottle with Nicotine.                                                                               |
| Nicotine Vape        | Assemble glass, redstone, a stone button, copper ingot, and Nicotine Vape Liquid.                                |

Vape assembly uses this layout:

```text
Empty     Glass       Empty
Redstone  Vape Liquid Stone Button
Empty     Copper      Empty
```

A vape needs the brewed custom liquid; ordinary water bottles and loose nicotine cannot replace it. A new vape has **32 puffs by default**. See [bongs, cartridges, and vapes](/docs/gameplay/bongs-and-carts/) for use and durability.

## Coffee and energy drinks

Grow custom **Coffee Beans** from the coffee crop. Process harvested beans in a furnace for **10 seconds** to make **Pure Caffeine**. Brew an **awkward potion with Pure Caffeine** to make an **Energy Drink**.

Coffee flavor infusion uses the harvested beans directly, before refining them into caffeine. Ordinary cocoa beans are the Chocolate flavor ingredient instead.

Caffeine and energy drinks have their own tolerance, addiction, and overdose settings. Their speed and haste effects do not remove those drawbacks; see [tolerance and recovery](/docs/gameplay/tolerance-and-recovery/).

## Cannabis intermediates and finished products

Use harvested **Cannabis Buds**, not planting ferns. Keep strain identities consistent throughout production.

| Product          | Default process                                                               |
| ---------------- | ----------------------------------------------------------------------------- |
| Infused Dough    | Shapeless crafting: wheat + sugar + harvested Cannabis Buds.                  |
| Edible           | Smoke Infused Dough in a smoker for 10 seconds.                               |
| Cannabis Extract | Brew an awkward potion with harvested Cannabis Buds.                          |
| CBD              | Brew a water bottle with harvested Cannabis Buds.                             |
| Cart             | Assemble glass, redstone, a stone button, copper ingot, and Cannabis Extract. |

Cart assembly follows the vape layout above with **Cannabis Extract** in the center. The dough, extract, edible, CBD, and cart retain their supplied strain. CBD is a recovery product, not a flavor ingredient; see [recovery](/docs/gameplay/tolerance-and-recovery/).

## Brewing correctly

Place base bottles in the bottom slots of a brewing stand and the custom ingredient in the top slot. Supply blaze powder as fuel. Brewing takes **20 seconds**. Water and awkward potion bases must be ordinary potions of the required type. Already-brewed custom liquids cannot be reused as plain base bottles to duplicate products.

Nicotine must be the custom drug item, and cannabis brewing requires the matching harvested buds. The menu also includes Infused Dough, Cannabis Extract, and Vape Liquid so you can inspect intermediate steps.

## Other processing

Salvia uses a **campfire** with its custom harvested input and takes **30 seconds** by default. Its delayed visual effects are described in [consumables](/docs/gameplay/consumables/).

After making an eligible finished product, add a cosmetic variant through [cauldron flavor infusion](/docs/gameplay/flavor-infusion/). Flavor infusion is separate from these production and brewing chains.
