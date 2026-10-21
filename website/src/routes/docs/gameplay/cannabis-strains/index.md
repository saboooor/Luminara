---
icon: 'minecraft:item/fern'
title: 'Cannabis strains and mutations'
description: 'Grow planting ferns, harvest buds, and preserve strain identity through crafting.'
keywords: 'drugs cannabis strains crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Bongs and carts'
    href: '/docs/gameplay/bongs-and-carts/'
  - label: 'Growing ingredients'
    href: '/docs/gameplay/drug-crops/'
---

## Ferns, buds, and finished items

| Item                          | Purpose                                                  |
| ----------------------------- | -------------------------------------------------------- |
| Planting fern                 | Starts a cannabis plant and carries its strain identity. |
| Cannabis Buds                 | Harvested recipe ingredient and bong input.              |
| Joint, blunt, edible, or cart | Finished consumable made from buds.                      |
| CBD                           | Cannabis recovery item made using buds.                  |

An ordinary fern can start the cannabis growing system, but it does not substitute for harvested buds in recipes. Separate planting stock from harvests in your storage.

## Grow cannabis

Right-click hydrated farmland with a fern. Keep the light level at least **9**, and leave space for it to become a two-block large fern. Default active growing time is **10 minutes**. Empty-hand right-click shows progress and paused conditions. Dry soil, darkness, and unloaded chunks pause growth; bone meal does not skip the timer.

Harvest the mature large fern **with shears** to obtain **two Cannabis Buds and a planting fern**. Mature plants have a 10% chance of an extra planting fern. Breaking an immature plant with shears returns planting stock without buds. Breaking cannabis without shears returns neither buds nor planting stock.

## Browse strain effects

Use `/strains` for the paginated strain index. Entries are grouped into **Common, Uncommon, Rare, and Legendary** tiers. Use the previous/next arrows to browse. Inspect each entry for its effects and mutation chance.

Strains affect the cannabis product's effects. Reggie has an unknown/random debuff behavior rather than one guaranteed fixed effect. Rarity is a collection tier; inspect the actual effects when choosing a strain.

## Inheritance and mutation

Planting ferns carry strain identity. When harvesting, the returned planting stock can inherit or mutate according to the parent strain's configured mutation rules. The harvested buds retain the harvested plant's strain, while the returned fern can carry a different child strain. Check both before putting them away.

Mutation chances and available outcomes vary by strain. Replant returned stock and inspect its identity to build a collection. The extra-seed chance and the mutation rules are separate mechanics; an extra fern does not guarantee a new strain.

## Craft one strain at a time

Buds pass their strain identity into supported cannabis products. Keep all strain-tagged ingredients in a recipe consistent. Mixing different strain identities clears the crafting result rather than creating a blended product.

If a cannabis recipe produces no result, first check the live recipe through `/drugs`, then check that you used buds and that their strain names match. Bongs also use the supplied bud's strain; see [bongs and cartridges](/docs/gameplay/bongs-and-carts/).
