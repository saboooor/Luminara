---
icon: 'minecraft:item/diamond'
title: 'Buying and bidding at auction'
description: 'Find listings, compare buyouts, and place a deliberate bid.'
keywords: 'best_auction auction ah bid buyout search buy'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Browse listings

Open `/ah` or `/auction`. Java uses a dialog at the entrance; Bedrock can use a native form. Categories and individual listings can still open inventory screens. Search with `/ah search <keyword>` or the menu's search field.

Inspect the item itself, not only its display name. Check quantity, enchantments, condition, seller, listing ID, and time remaining. Prices belong to the listing's offered stack.

## Bid or buy now

A starting/current bid and a buyout are different prices. A bid competes with other bids until the auction resolves; a buyout purchases immediately through the listing's buyout action when offered.

To bid by command, use `/ah bid <id> <amount>`. For example, `/ah bid 42 250` submits a bid of 250 on listing 42, subject to its current requirements. Read and complete any confirmation prompt before assuming the bid was accepted.

Do not bid on an ID copied from an old screenshot without checking the live item. Another player may have raised the bid or completed a purchase.

## Collect the result

Check [auction mail](/docs/economy/auction-mail/) for items and refunds. A successful auction event can leave a delivery waiting there rather than placing it straight into a full inventory.

For selling your own items, see [creating a listing](/docs/economy/auction-selling/).
