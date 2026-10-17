---
icon: 'minecraft:item/golden_shovel'
title: 'Claiming land'
description: 'Protect a base, inspect boundaries, and expand without leaving gaps.'
keywords: 'griefprevention golden shovel claim blocks claimslist abandon resize'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Sharing a claim'
    href: '/docs/protection/trusting-players/'
  - label: 'Claim settings and flags'
    href: '/docs/protection/claim-flags/'
---

## Make a claim

Hold a **golden shovel** and right-click two opposite corners of the area you want to protect. Read the result in chat and inspect the outline. Claim blocks limit the area you can reserve; `/claimslist` shows your claims and available allowance.

{/* audience:website */}

<img src="/images/docs/claim-corners.svg" alt="Top-down claim diagram: select opposite corners around both your home and farm with a golden shovel" width="800" height="460" loading="lazy" decoding="async" />

{/* /audience */}

Use a stick to inspect land ownership. Do this before building near someone else's base. A claim cannot overlap an existing claim or an area where claiming is prohibited.

## Claim allowance and worlds

You start with **100 claim blocks** and accrue **100 per hour of active play**, up to 1,000,000 accrued blocks. Idle time does not earn blocks. Buying claim blocks costs **$0.50 per block** and selling them returns **$0.40 per block**; command access still depends on your permissions.

Claiming is enabled in `world`, `world_nether`, `world_the_end`, and `resworld`. It is disabled in `spawn`, `plot`, `minigames`, `resworld_nether`, and `resworld_the_end`. Other area protections can still prevent a claim.

A new player's chest can create a small automatic claim with a radius of four blocks when space and allowance permit. Inspect its boundary and expand it before relying on it for your whole base.

Unused claims can expire after **14 days**. The general inactivity cleanup is set to **60 days**, with exemptions for owners with at least 10,000 total claim blocks or 5,000 bonus blocks. Do not use a claim as a promise of permanent storage.

## Resize carefully

With the golden shovel, click an existing claim corner and then its new location. Check the new outline covers your walls, storage, farm, and planned extensions. If you lack enough claim blocks, the resize fails rather than granting a partial extension.

## Check before leaving

Walk around the boundary and inspect it. A home or waystone does not create a claim. A locked chest protects that container, not the surrounding build.

## Share or release land

Use [trust levels](/docs/protection/trusting-players/) to let friends help. To release a claim, stand inside it and use `/abandonclaim` only when you intend to remove its protection. Move valuables first.

For additional local settings, see [claim flags](/docs/protection/claim-flags/).
