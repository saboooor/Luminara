---
icon: 'minecraft:item/name_tag'
title: 'Waystone privacy and appearance'
description: 'Rename, recolor, move, and control access to your travel stops.'
keywords: 'lumistones rename visibility private public global recolor owner head icon discoveries pickup'
date_created: '2026-10-17'
last_updated: '2026-10-22'
extra_buttons:
  - label: 'Discovering and using waystones'
    href: '/docs/travel/waystones/'
---

## Open management

Sneak-right-click your own stone with an **empty main hand**. This opens management rather than applying a new body block. Ordinary visitors can discover and travel; ownership is needed to edit or retrieve a stone.

Type a name and choose **Close** to save it. Other management buttons also save the edited name before opening their action or submenu. Escape leaves the draft unsaved. On Bedrock, select an action and submit the form; simply dismissing it does not submit edits.

Choose **Travel** to open destinations from management. **Discovered by** lists the players who have activated this stone, or tells you when nobody has discovered it yet.

## Choose who can travel

Open **Visibility** in management to choose one of three options. The menu marks the current selection.

| Access  | Who can discover and use it?                                         |
| ------- | -------------------------------------------------------------------- |
| Private | Only its owner                                                       |
| Public  | Players who visit and activate it                                    |
| Global  | Everyone, without first activating it, when global travel is enabled |

Choosing the current option leaves it unchanged and does not charge again. Global is marked disabled when the server does not allow it. When enabled, the menu shows the conversion price, which can use XP levels, money, or both. Each conversion to Global charges that price; moving an existing global stone does not charge it again.

Switching from Global to Public or Private opens a confirmation: the money and XP paid for global access will not be refunded. Private and Global cannot be active together. Returning to Public restores access for players who discovered it earlier.

The command alternative for owner-only access is `/lumistones private <id> true` or `/lumistones private <id> false`. Making a stone private removes its global status; turning off privacy on a Private stone makes it Public rather than purchasing Global access.

Private access also hides the name and runes from other players, including previous discoverers. It does not make the physical monument invisible or replace a land claim. Administrators can manage stones but cannot travel through another player's private stone.

## Change its icon and owner head

Choose **Change icon** and select an icon for this stone's destination button. The icon picker marks the current selection. Destination entries also identify the owner, helping visitors recognize a renamed stop.

Use **Show owner head** or **Hide owner head** to control the owner's head on the monument. Naturally generated stones have no player owner, so this option is absent. These appearance settings are separate from visibility.

## Change its material

Sneak-right-click with a block in your main hand to apply that material to the body. Survival use consumes one block; creative players keep theirs; applying the current material consumes nothing. The anchor remains a polished tuff wall. Changing material keeps the name, owner, visibility, icon, and discoveries. Material changes happen by clicking the stone, rather than through a recoloring crafting recipe.

## Retrieve it

Mine either polished tuff wall anchor to get the stone back as one item; the remaining anchors are removed too. There is no Retrieve button in management. Only its owner can normally retrieve it, and claim protection can still block breaking. In survival it drops nearby, so collect it. Creative breaking removes it without the survival item drop.

The item preserves its identity, owner, name, discoverers, Private/Public/Global setting, body material, anchor height, owner-head setting, and menu icon across restarts. Replacing it restores those settings, so visitors do not need to rediscover it. Owners can also use `/lumistones remove <id>` to retrieve it into their inventory; overflow drops nearby.

After moving a stone, check both arrival space and privacy before inviting visitors. See [travel basics](/docs/travel/waystones/) if someone cannot find it.
