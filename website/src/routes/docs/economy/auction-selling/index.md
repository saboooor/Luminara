---
icon: 'minecraft:item/gold_ingot'
title: 'Selling at auction'
description: 'List the right stack, choose prices, and understand cancellation.'
keywords: 'best_auction auction ah sell list cancel fee'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Auction deliveries and refunds'
    href: '/docs/economy/auction-mail/'
---

## Prepare the item

Hold the exact stack you want to sell in your main hand. Split off anything you want to keep first. Check the item's name, quantity, enchantments, contents, and other custom details.

## Create a listing

Luminara allows **seven active listings per player**, lasting **228 hours (9 days 12 hours)**. Listings must contain **one item or a full stack**; arbitrary partial stacks are disabled. Split the held stack before listing it.

The installed auction uses these listing-fee calculations, rounded down before adding the fixed amount: **one item: 1% of starting price + $1**; **a full stack: 0.5% + $4**, capped at **$10,000**. For example, a $100 starting price costs **$2 for a single item** or **$4 for a full stack**. Read the confirmation for the exact fee. The separate percentage/minimum/maximum fee fields in the config are not used by this installed calculation.

Use `/ah sell <price> [buyout]`. The first value is the starting price. The optional buyout must be **higher** than that price.

For example, `/ah sell 100 300` starts bidding at 100 and offers an immediate buyout at 300. Omitting the second value creates a listing without that explicit buyout.

Check the listing fee, duration, and limit in the menu before confirming, then check that the correct item left your inventory and appears in your listing.

## Manage your sale

Use the auction screens to track the listing. `/ah cancel <id>` requests cancellation of your listing, subject to its current state and cancellation rules. Do not assume an active bid can always be undone or that every fee is refundable.

Cancelled, expired, or completed auctions can generate mailbox deliveries. Check [auction mail](/docs/economy/auction-mail/) before listing the same item again.

## A sensible first sale

Test with a small, ordinary stack. Compare similar live listings to understand bundle prices, and keep enough money for any listing fee. A high starting price can leave the item unsold until expiry.
