---
icon: 'minecraft:item/emerald'
title: 'Cartel buyers and enforcer demands'
description: 'Sell finished drug items and understand timed cartel delivery encounters.'
keywords: 'drugs cartel trading crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
  - label: 'Commands and achievements'
    href: '/docs/gameplay/drug-progression/'
---

## Sell to a buyer

Find a stationary cartel buyer and right-click for delivery instructions. There is no selling inventory menu. Stand nearby and **throw finished drug items within two blocks of the buyer**. Accepted items are removed from the dropped stack and the sale is deposited into your balance.

Only genuine player-dropped registered drug items are accepted. Planting stock, harvested ingredients, renamed vanilla items, and partially used cartridges are not eligible. A drug also needs an enabled sale price; carts have no default sale price. Prices can differ by drug and strain.

If a sale does not happen, check the item type, drop distance, and your proximity to the buyer. An unsuccessful economy deposit leaves the items on the ground. Retrieve unaccepted items instead of assuming they were sold. Check [money commands](/docs/economy/money/) to confirm your balance.

## An enforcer approaches

Roaming enforcers can approach Survival or Adventure players with a demand for a particular drug and quantity. The demand and deadline appear when the NPC gets close enough to speak. Defaults are **8–32 items** and **90 seconds**, with warnings during the countdown; server settings can change these values.

Read the exact drug and remaining amount. Throw that drug within **two blocks of your enforcer** to deliver. Smaller deliveries accumulate and are paid as accepted. Other drugs and other players' drops do not count, and selling to a stationary buyer does not satisfy an enforcer demand. Extra items beyond the demand remain on the ground.

## Complete, reject, or miss a demand

Deliver the full quantity before the deadline to complete the encounter. Partial deliveries already accepted remain paid even if you later fail or reject it.

Choose **Reject demand** in the dialogue or use `/cartel reject` to refuse your own encounter immediately. Closing the dialogue does not reject it. Rejection counts like expiry: it adds a refusal and applies the encounter's configured failure consequences. The default failure is dialogue; servers can configure damage.

Consecutive refusals make later encounters more demanding. By default, **15 refusals** cap the deadline at **45 seconds**, and **20 refusals** cap it at **30 seconds**, with angrier dialogue. Full completion resets the streak; partial delivery does not. The streak survives reconnects and restarts.

## Called-off encounters

An encounter can be called off when the enforcer cannot reach you, you die or disconnect, you change world or travel far away, or the economy becomes unavailable. Called-off encounters neither add to nor reset the refusal streak. Reloading cartel settings also calls off active demands.

Automatic appearance rates, cooldowns, prices, quantities, and consequences depend on server settings. NPC creation and price management are staff actions; players only need the delivery interaction and `/cartel reject`.
