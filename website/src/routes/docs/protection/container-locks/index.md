---
icon: 'minecraft:item/tripwire_hook'
title: 'Locking containers and doors'
description: 'Protect individual blocks and understand how locks interact with claims.'
keywords: 'bolt chest lock unlock info door protection'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Buying and running chest shops'
    href: '/docs/economy/chest-shops/'
---

## Protect a block

Use `/bolt lock`, then interact with the chest, door, or other supported target as instructed in chat. `/bolt info` lets you inspect a protection. Use the full command prefix so claim commands with similar names are not confused with lock commands.

**Automatic Bolt locking is disabled** for chests, barrels, furnaces, doors, item frames, and armor stands. Lock them manually and inspect the result. Claim protection is separate from a Bolt lock.

## Share deliberately

Use `/bolt help` to inspect the available access-management syntax before sharing. Decide whether you want to grant access to one protection or trust someone more broadly. A global trust entry can affect more than the chest you are currently looking at.

Claim trust does not automatically remove a separate lock. If your friend can build but cannot open storage, inspect that storage's lock as well as the claim's trust list.

## Remove a lock

Use `/bolt unlock` and interact with a protection you own. Only do this when you intend to remove its individual protection. Unlocking a container does not turn the surrounding claim into public land.

For a public shop, follow [shop setup](/docs/economy/chest-shops/) rather than giving strangers general access to your stock chest.
