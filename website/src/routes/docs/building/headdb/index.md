---
icon: 'minecraft:item/player_head'
title: 'Decorative heads with HeadDB'
description: 'Browse, search, and save decorative heads for your builds.'
keywords: 'headdb hdb heads decorations favorites player heads categories search'
date_created: '2026-10-20'
last_updated: '2026-10-20'
extra_buttons:
  - label: 'Building guides'
    href: '/docs/building/'
---

## Find a decoration

Use `/hdb` to open HeadDB, browse categories, or search with `/hdb search <query>`. Try a build theme such as “food” or “plants”. Results support filtering, sorting, and paging. Favorite heads you want to find again.

## Obtain and place heads

Choose a head through the menu, then place it as decoration. **Custom heads and player-head lookup are enabled**. External player lookup is allowed, so the catalog is not limited to players currently online. Your account still needs the relevant obtain/category permissions; the configuration does not establish a universal purchase price.

## Access and help

Use `/hdb help` for available commands. If browsing or obtaining a head is denied, ask staff to check access. HeadDB provides `headdb.basic` for standard use, `headdb.category.<category-id>` for category access, and `headdb.admin` for administrators.

The catalog loads from cache at startup, refreshes on startup, and refreshes every **six hours**. Player-head lookups are cached for **12 hours**; failed lookups for **10 minutes**. If a newly changed skin is still old, allow for that cache before reporting a missing head.
