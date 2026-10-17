---
icon: 'minecraft:item/iron_ingot'
title: 'Vehicle damage and repairs'
description: 'Recognize missing body parts and understand the repair process.'
keywords: 'whips health damage repair missing parts'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Health and visible damage

Vehicle health is enabled, and damage transfer to the rider is enabled with a **0.8 multiplier**. Collisions and combat can damage a vehicle and hurt its rider. As damage rises, cosmetic parts can disappear. Missing body parts do not turn the remaining model into a narrower vehicle; seats and driving geometry still matter.

Showroom models are exempt from normal damage. A custom model built as one indivisible piece can remain visually complete until destruction, so appearance alone is not a health meter.

## Repairing

Stop using a badly damaged vehicle and follow the server's repair route. `/whips repair` is permission-gated; it is not a free repair entitlement for every owner. When an authorized repair restores health, dismount and remount to rebuild missing model parts.

Pickup and replacement do not erase the vehicle's saved damage. Avoid repeatedly repacking it as a repair attempt. If the vehicle or its cargo behaves unexpectedly, stop and record its type, location, and last action for [support](/docs/getting-started/troubleshooting/).
