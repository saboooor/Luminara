---
icon: 'minecraft:item/diamond_axe'
title: 'Animated tree felling'
description: 'Chop natural trees, manage axe durability, and stay clear of falling trunks.'
keywords: 'lumitimber timber toggle axe natural tree durability replant falling danger'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Leveling your skills'
    href: '/docs/progression/skills/'
---

## Fell a tree

Use an axe on a natural tree's trunk. When the tree is eligible, its logs and attached leaves can fall together in an animated topple instead of requiring you to climb and break every block.

Use `/timber` or `/timber toggle` to switch your own tree felling on or off. Turn it off when you want precise single-block work, then turn it back on when gathering wood.

## Protect your axe

The felling cooldown is **20 ticks** (one second at normal speed), with durability charged per log and tool protection enabled. Detection accepts at most **150 logs** and requires at least **five leaves**; cutting the absolute base is not required.

A whole tree can cost durability for many logs, not just the log you clicked. Unbreaking is respected, but you still need enough remaining durability for a large tree. Tool protection can refuse a fell that your axe cannot survive.

There is also a cooldown between chops. If a second tree does not fall immediately, check the cooldown and the axe before clicking repeatedly.

## Stay out of the fall path

There is a **25% chance** of a fall toward the player. A falling tree can deal **7 health points** (3.5 hearts before other damage handling), and domino chains can include up to **eight trees**. The fall animation lasts **52 ticks**.

Falling trees can damage players and trigger nearby trees to fall. The tree is not guaranteed to fall away from you. Clear a retreat path and avoid chopping above someone else's work area.

## Drops and replanting

Tree drops are not directly inserted by LumiTimber. Replanting is enabled but only uses available drops, and a replanted sapling has **three seconds of protection**. Drop2Inventory is separately enabled by default for block and mob drops; use `/drop2inv` to toggle collection. Full-inventory overflow drops on the ground, and fishing drops and XP are not auto-collected.

Loot can land where the falling pieces finish, so look beyond the stump. Replanting can use a matching sapling from the actual drops; a sapling is not guaranteed after every fell. Check the ground and replant manually when necessary.

## Why did it refuse?

The detector looks for a supported natural tree with enough leaves. Placed logs, persistent decorative leaves, excessive size, an unsuitable trunk, or protected blocks can stop it. The system is not intended to dismantle log buildings.

A tree-felling toggle is separate from a skill's mana ability. See [skills](/docs/progression/skills/) if you are trying to activate an ability rather than the ordinary tree animation.
