---
icon: 'minecraft:item/ender_pearl'
title: 'Discovering and using waystones'
description: 'Activate destinations, choose a route, and complete a safe teleport.'
keywords: 'lumistones ls teleport discovery xp cost'
date_created: '2026-10-17'
last_updated: '2026-10-22'
extra_buttons:
  - label: 'Warp scrolls'
    href: '/docs/travel/warp-scrolls/'
  - label: 'Craft and place a waystone'
    href: '/docs/travel/placing-waystones/'
  - label: 'Manage your own stone'
    href: '/docs/travel/managing-waystones/'
---

Waystones are physical monuments that form a travel network. Finding one is only the first step: **right-click its wall anchor to discover it for your character**.

## Discover a destination

Visit a stone and click its base. It becomes available in your travel menu, and its name and rune overlays become visible to you. You discover your own newly placed stone automatically. Another player's discovery does not unlock it for you.

Public stones require that first visit. **Global travel is enabled**: a Global stone can appear without discovering that individual stone, but you must still have visited its world. An owner's private stone cannot be activated or used by anyone else, even if they visited it before it became private.

## Travel from a stone

Destination buttons show the selected icon, owner, world, and any travel cost. World labels and icons can be customized by the server. Java uses native Minecraft dialogs and sprite icons; Bedrock players connected through Floodgate use forms with the same actions.

1. Right-click the anchor to open the destination menu. Owners may need the Travel action in management.
2. Choose a destination you have access to.
3. Read the displayed travel cost before selecting the destination.
4. Travel immediately: waystones have **no warmup or cooldown** here.

There is no movement-or-damage warmup to wait through. Dismount and stop gliding before trying to travel. The destination needs enough headroom, safe ground nearby, and space inside the world border. A blocked landing, missing destination world, or cancelled teleport does not charge the normal travel cost.

**Normal waystone travel costs no XP here.** The configured XP charging switch is off. Making a stone Global is a separate **$5,000 owner purchase**, not a fee for every visitor’s trip.

## Travel without standing at a stone

Carry a [warp scroll](/docs/travel/warp-scrolls/). **Command travel from anywhere is disabled**, so `/lumistones` does not replace visiting a stone or using a scroll. `/lumistones list` can show available destination names and IDs.

## Why is a destination missing?

You may not have activated it, its owner may have made it private, or travel between its world and yours may be unavailable. Travel is enabled in **Overworld, Nether, and End**, including cross-world travel. You must first visit the destination world by another route; a Global stone does not bypass that world-discovery requirement. A natural waystone is discovered by clicking it too; passing a structure does not activate every stone inside.

Natural generation is enabled in the three waystone worlds: village structures have a **25%** chance, desert and jungle temples **15%**, and outposts, ancient cities, and end cities **10%**. A structure is not guaranteed to contain a stone. Only administrators can manage or retrieve these ownerless stones.

A protected claim may still allow discovery and travel, depending on server settings. It does not grant permission to edit or break the stone.

{/* audience:website */}

Next: [craft and place a waystone](/docs/travel/placing-waystones/) or [manage your own stone](/docs/travel/managing-waystones/).

{/* /audience */}
