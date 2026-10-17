---
icon: 'minecraft:item/ender_pearl'
title: 'Removing and recovering tags'
description: 'Take off a prefix or emoji and claim returned items.'
keywords: 'lumitags unset claim tag remove return prefix suffix'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Remove a tag

| Command                  | What it removes                |
| ------------------------ | ------------------------------ |
| `/lumitags unset`        | Your current prefix            |
| `/lumitags unset prefix` | Your current prefix explicitly |
| `/lumitags unset suffix` | Your current emoji or suffix   |

Removing your own tag does not require permission to create custom tags. Prefix and suffix ownership are independent, so taking off an emoji does not also take off your text prefix.

## Where the item goes

If the tag was applied from a tracked tag item, replacing or removing that same type returns the exact item. A command-created tag does not create a collectible item when removed.

For example, redeem prefix A, then redeem prefix B. A is returned, while B becomes the active prefix. Remove B and its item is returned too. Repeating the removal command does not generate extra items.

## A return is missing

Make space and use `/lumitags claim`. Queued returns can also be delivered when you join. Full inventories and offline returns wait rather than requiring you to remove the tag again.

Very old items applied before ownership tracking was available cannot necessarily be reconstructed. Changes made directly outside the tag system do not follow this return lifecycle. If a tracked return remains missing, report the item and the replacement/removal action you used.

Related: [redeeming tag items](/docs/social/tag-items/).
