---
icon: 'minecraft:item/glass'
title: 'Using bongs and cartridges'
description: 'Place a bong, supply Cannabis Buds, and track equipment durability.'
keywords: 'drugs bongs and carts crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Cannabis strains'
    href: '/docs/gameplay/cannabis-strains/'
  - label: 'Tolerance and recovery'
    href: '/docs/gameplay/tolerance-and-recovery/'
---

## Craft a bong

Open `/drugs` and select the bong for its current recipe. The default layout uses glass, a blaze rod, flint and steel, and a water bucket:

```text
Empty      Glass  Empty
Blaze Rod  Glass  Flint and Steel
Empty      Water  Empty
```

Hold the crafted bong and right-click the **top of a solid block**. The space above must be clear. A bong is placed equipment; right-clicking the side of a block will not place it.

## Supply buds and use it

Hold **harvested Cannabis Buds** in your main hand or offhand, then right-click the placed bong. A planting fern is not bong input. Each use consumes one bud outside Creative mode and applies cannabis effects using that bud's strain.

The default bong uses the blunt effect profile, so its effects also interact with that profile's tolerance and addiction. It is not a separate route around those systems. Use `/tolerance` and `/drugstatus` to inspect the result.

The default cooldown is **1.5 seconds** per player. A warm-bong message means you need to wait before another use.

## Durability and moving

A new bong has **24 uses by default**. The action bar shows remaining durability after use; the bong breaks after its last hit. Punch a placed bong to pick it up in Survival. Its remaining durability is preserved, so replacing it does not refill it. Removing its supporting block also causes it to drop.

## Cartridges

A cart is a handheld finished cannabis item. Hold it in your main hand and right-click to use it. Each use reduces its remaining durability; the default is **16 uses per cartridge**. Its lore and the action bar show remaining uses. The cartridge is consumed when depleted.

Each hit applies the normal cart tolerance/addiction handling. Repeated hits are repeated uses even though you are holding the same item. Partially used cartridges are rejected by cartel buyers; carts also have no sale price by default.

Durability and cooldown numbers are plugin defaults and can be changed by the server. Inspect the item and in-game messages for current behavior.
