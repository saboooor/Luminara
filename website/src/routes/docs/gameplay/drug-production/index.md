---
icon: 'minecraft:item/brewing_stand'
title: 'Drug production and brewing'
description: 'Process harvests into tobacco products, caffeine, cannabis ingredients, and finished items.'
keywords: 'drugs flavors infusion production nicotine caffeine cannabis'
date_created: '2026-11-03'
last_updated: '2026-11-05'
extra_buttons:
  - label: 'Growing ingredients'
    href: '/docs/gameplay/drug-crops/'
  - label: 'Flavor infusion'
    href: '/docs/gameplay/flavor-infusion/'
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
---

Production uses custom harvested ingredients, processing stations, and assembly recipes. Open `/drugs`, choose a category and base product, then choose its unflavored recipe when a flavor category opens. Recipe previews show crafting layouts, cooking times, or the base bottle and brewing ingredient. Click custom ingredients to open their recipes, or harvested ingredients to open their growing guides. While a recipe is open, custom items in your own inventory also open their recipes. These clicks browse instructions without consuming or moving items.

Luminara’s configured processing times are **10 seconds for smoked Tobacco, 20 seconds for furnace Nicotine, 10 seconds for furnace Caffeine, and 30 seconds for campfire Salvia**. Use custom harvests in those stations; the recipe menu covers the assembly and brewing steps.

## Tobacco and nicotine

Grow [Tobacco Leaves](/docs/gameplay/drug-crops/) before processing them. Ordinary dried kelp cannot replace the custom leaves.

| Product              | Process                                                                                                          |
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

A vape needs the brewed custom liquid; ordinary water bottles and loose nicotine cannot replace it. A new vape has **32 puffs**. See [bongs, cartridges, and vapes](/docs/gameplay/bongs-and-carts/) for use and durability.

## Coffee and energy drinks

Grow custom **Coffee Beans** from the coffee crop. Process harvested beans in a furnace for **10 seconds** to make **Pure Caffeine**. Brew an **awkward potion with Pure Caffeine** to make an **Energy Drink**.

Coffee flavor infusion uses the harvested beans directly, before refining them into caffeine. Ordinary cocoa beans are the Chocolate flavor ingredient instead.

Caffeine and energy drinks have their own tolerance, addiction, and overdose settings. Their speed and haste effects do not remove those drawbacks; see [tolerance and recovery](/docs/gameplay/tolerance-and-recovery/).

## Cannabis intermediates and finished products

Use harvested **Cannabis Buds**, not cannabis plants. Keep strain identities consistent throughout production.

| Product          | Process                                                                       |
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

Salvia uses a **campfire** with its custom harvested input and takes **30 seconds**. Its delayed visual effects are described in [consumables](/docs/gameplay/consumables/).

After making an eligible finished product, add a cosmetic variant through [cauldron flavor infusion](/docs/gameplay/flavor-infusion/). Flavor infusion is separate from these production and brewing chains.

## Purity and refining

Purity is an item quality grade shown in its lore. Ordinary production and older items without a recorded grade use **90%**, the neutral baseline. Drug effect durations and cartel sale values scale by **purity ÷ 90**. A 100% item has about 11.1% more duration and sale value than the baseline; purity does not increase potion amplifier levels or reset tolerance.

To refine a finished drug:

1. Hold **exactly one drug item in your main hand**.
2. Hold **ordinary quartz in your offhand**.
3. **Sneak-right-click an empty or water-filled cauldron**.

Refining is enabled. Each refinement consumes **one quartz** and adds **five purity points**, up to **100%**. Inspect the resulting purity line before refining again.

Crafting, cooking, brewing, and automatic crafting carry purity into supported products from the average grade of the consumed drug, harvest, or intermediate input slots. Ordinary materials do not dilute that average, and larger stacks in a slot do not add extra weight. Flavoring preserves the grade, strain, and remaining uses.

## Combining an additional drug dose

At an empty or water-filled cauldron, hold **one finished drug in your main hand** and **a different finished drug in your offhand**, then **sneak-right-click**. This consumes one offhand item and adds one dose of that drug to the held item.

The added dose is hidden: the item receives no lacing label, name change, or texture marker. Its existing purity line does not reveal the added drug. Appearance alone therefore cannot identify whether an item contains an additional dose.

Each item can hold one added dose. The drugs must differ, and already-laced items cannot be combined again or used as additives. Single-use products apply both drugs when consumed. Carts and nicotine vapes apply the added dose on their **next puff only**, keeping their normal remaining puff count.

The added drug retains its own strain and purity and uses its own effects, tolerance, addiction, and overdose handling. It is not a cosmetic flavor. Flavor infusion and refining preserve hidden lacing; production rejects laced inputs when processing would discard their added dose. See [tolerance and recovery](/docs/gameplay/tolerance-and-recovery/) for private risk warnings.
