---
icon: 'minecraft:item/emerald'
title: 'Buying and running chest shops'
description: 'Read shop signs, set up stock, and price bundles correctly.'
keywords: 'chestshop notifier sign buying selling stock B S'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Read a shop sign

A shop sign shows the owner, bundle quantity, price, and item. **B** is the price for a customer to buy; **S** is the amount a customer receives when selling to the shop. A shop may offer only one direction.

The price applies to the displayed quantity. If the quantity is 16, buying once purchases a bundle of 16 rather than one item.

{/* audience:website */}

<img src="/images/docs/chest-shop-sign.svg" alt="Example sign: YourName, 16, B 100:50 S, Stone. Customers buy 16 stone for 100 or sell 16 stone for 50" width="800" height="460" loading="lazy" decoding="async" />

{/* /audience */}

## Buy or sell

By standard controls, right-click buys and left-click sells. Read the sign and transaction message. A transaction can be reduced or fail if stock, balance, or inventory space is insufficient.

## Containers, prices, and fees

Shops support chests, trapped chests, and barrels. Creation is free and shop transaction tax is **0%**. Prices support two decimal places. A shop cannot offer a selling price higher than its buying price.

Partial transactions are enabled, so a trade may complete for less than the displayed bundle when stock, funds, or space limit the transaction. Read the completed quantity in chat. Empty shops are not automatically removed.

## Create a shop

Place a stock chest in an area where you can build, and attach a shop sign. The standard four lines are:

| Line | Example                   |
| ---- | ------------------------- |
| 1    | Leave blank for your name |
| 2    | `16`                      |
| 3    | `B 100:50 S`              |
| 4    | `Stone`                   |

This offers 16 stone for 100 and buys 16 stone for 50. Start with one simple item and test the sign before stocking valuables. Keep money available for buy orders, and protect the surrounding land.

An empty shop or a shop with no funds cannot complete its advertised trade.
