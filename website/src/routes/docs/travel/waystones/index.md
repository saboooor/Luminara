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

Public stones require that first visit. A global stone, when global travel is available, can appear without discovery. An owner's private stone cannot be activated or used by anyone else, even if they visited it before it became private.

## Travel from a stone

Destination buttons show the selected icon, owner, world, and any travel cost. World labels and icons can be customized by the server. Java uses native Minecraft dialogs and sprite icons; Bedrock players connected through Floodgate use forms with the same actions.

1. Right-click the anchor to open the destination menu. Owners may need the Travel action in management.
2. Choose a destination you have access to.
3. Read the displayed travel cost before selecting the destination.
4. If a warmup is enabled, stay still and avoid damage until you arrive.

Warmup and cooldown depend on server settings; the plugin defaults to no delay for either. Movement or damage interrupts an enabled warmup. Dismount and stop gliding before trying to travel. The destination needs enough headroom, safe ground nearby, and space inside the world border. A blocked landing, missing destination world, or cancelled teleport does not charge the normal travel cost.

XP costs use **levels**, not a fixed number of XP points. Money may also be charged if shown in the menu. XP payments preserve progress toward your next level. Money uses the economy provider’s currency formatting. Creative travel is free. The quoted cost is more useful than estimating from distance yourself.

## Travel without standing at a stone

Carry a [warp scroll](/docs/travel/warp-scrolls/). Command travel from anywhere is optional, so `/lumistones` is not a guaranteed replacement for visiting a stone or using a scroll. `/lumistones list` can show available destination names and IDs.

## Why is a destination missing?

You may not have activated it, its owner may have made it private, or travel between its world and yours may be unavailable. Travel is limited to worlds enabled by the server. A natural waystone is discovered by clicking it too; passing a structure does not activate every stone inside.

Natural stones can appear in newly generated villages, temples, outposts, ancient cities, and end cities when generation is enabled. Finding a structure does not guarantee a stone, and older explored terrain is not retrofitted. Only administrators can manage or retrieve these ownerless stones.

A protected claim may still allow discovery and travel, depending on server settings. It does not grant permission to edit or break the stone.

{/* audience:website */}

Next: [craft and place a waystone](/docs/travel/placing-waystones/) or [manage your own stone](/docs/travel/managing-waystones/).

{/* /audience */}
