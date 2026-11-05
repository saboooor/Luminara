---
icon: 'minecraft:item/cauldron'
title: 'Flavor infusion'
description: 'Infuse products at a cauldron and browse all thirteen flavors.'
keywords: 'drugs flavors infusion production nicotine caffeine cannabis'
date_created: '2026-11-03'
last_updated: '2026-11-05'
extra_buttons:
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
  - label: 'Production chains'
    href: '/docs/gameplay/drug-production/'
  - label: 'Bongs, carts, and vapes'
    href: '/docs/gameplay/bongs-and-carts/'
---

Flavor is a cosmetic variant of an existing product. It changes the name, flavor lore, and supported resource-pack texture while preserving the original drug, cannabis strain, effects, and remaining uses. It does not reset tolerance, addiction, or overdose handling.

## Find flavors in the menu

Open `/drugs` and select a base product such as a vape, edible, or cart. Products with enabled flavors open a category containing their available variants. Select a flavor to see its ingredient and infusion instructions. While viewing those instructions, click the base custom product to open its production recipe. The category also has an unflavored item button for the base recipe and a back button for the product category. Page arrows appear when needed.

Flavors are grouped under their base products rather than listed as separate drugs in the main menu. Products without flavors still open their recipe directly. Closing a flavor instruction view returns to its product category.

## Infuse at a cauldron

1. Place an **empty or water-filled cauldron**. Lava and powder-snow cauldrons do not work.
2. Hold **exactly one unflavored finished product in your main hand**. Split a stack first.
3. Hold the matching **flavor ingredient in your offhand**.
4. **Sneak and right-click the cauldron**.

One ingredient is consumed and the held product becomes flavored. The cauldron and its water are not consumed. This interaction does not use a crafting grid, brewing stand, or vanilla recipe-book entry. Sneak-right-clicking this station with a product is reserved for infusion, so it does not also use the drug.

Partly used vapes and carts can be infused, but their remaining puff count stays the same. Infusion cannot refill them. Already-flavored products cannot be flavored again or have their flavors mixed.

## All default combinations

The table lists plugin defaults. Server settings can disable flavors or change their names, ingredients, and supported products; the live `/drugs` menu is the reference for what is enabled.

| Flavor    | Ingredient             | Supported products                                                     |
| --------- | ---------------------- | ---------------------------------------------------------------------- |
| Berry     | Sweet berries          | Vape, cart, edible, joint, blunt, energy drink                         |
| Apple     | Apple                  | Vape, cart, edible, energy drink                                       |
| Melon     | Melon slice            | Vape, cart, edible, energy drink                                       |
| Honey     | Honeycomb              | Vape, edible, joint, blunt, tobacco, chewing tobacco, cigar, cigarette |
| Chocolate | Cocoa beans            | Edible, cigar, tobacco                                                 |
| Vanilla   | Sugar                  | Vape, edible, cigar                                                    |
| Cherry    | Glow berries           | Vape, cart, edible, tobacco                                            |
| Citrus    | Orange dye             | Vape, cart, energy drink                                               |
| Mint      | Kelp                   | Vape, chewing tobacco, joint                                           |
| Cinnamon  | Brown dye              | Edible, tobacco, cigar                                                 |
| Coffee    | Harvested Coffee Beans | Vape, edible, tobacco                                                  |
| Grape     | Purple dye             | Vape, cart, blunt, energy drink                                        |
| Peach     | Pink dye               | Vape, cart, edible                                                     |

Most flavors require an ordinary ingredient without custom item metadata. Renamed items and other custom consumables are not substitutes. Coffee specifically requires the plugin’s harvested **Coffee Beans**; ordinary cocoa beans cannot replace them. These are fictional Minecraft ingredient substitutions.

## Appearance and troubleshooting

The resource pack includes all thirteen flavor palettes for vapes, carts, edibles, joints, blunts, energy drinks, tobacco, chewing tobacco, cigars, and cigarettes. Each variant uses its product silhouette, a flavor color, and an ingredient badge. A texture being present does not mean that combination is enabled for infusion.

If infusion fails, check the selected product’s flavor instructions, hold only one unflavored product, use the correct hands, and sneak-right-click an empty or water cauldron. Use ordinary unrenamed ingredients unless the instructions require a custom harvest. For Coffee, grow and harvest the coffee crop first.

Enable the current server resource pack to see the models. Older flavored items can retain their previous appearance; infuse a new unflavored item to obtain current model metadata. Missing textures do not turn vanilla lookalikes into genuine plugin items.

## Purity and lacing at the same station

Cauldrons also support [refining and lacing](/docs/gameplay/drug-production/#purity-and-refining). Quartz in the offhand refines purity by default; a different finished drug adds one hidden dose. Use the flavor ingredient shown in the menu when you intend to add a flavor. These are separate operations. Flavor infusion preserves purity and any hidden added dose as well as strain and remaining uses.
