---
icon: 'minecraft:item/music_disc_cat'
title: 'Custom music discs'
description: 'Find a track, burn a disc, and troubleshoot playback.'
keywords: 'pv-addon-discs disc burn search erase jukebox custom audio music'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Getting help'
    href: '/docs/getting-started/troubleshooting/'
---

## Prepare your client and disc

Custom audio playback requires the supported **Plasmo Voice client**. A working voice bridge for conversation does not by itself establish custom-disc support on every voice client or on unmodified Bedrock.

Hold a music disc in your hand before using the burn controls. Command access and burnable-disc restrictions can apply.

## Choose audio

| Command                   | Purpose                                 |
| ------------------------- | --------------------------------------- |
| `/disc search <query>`    | Search for a track                      |
| `/disc burn <url> [name]` | Put supported audio on the held disc    |
| `/disc erase`             | Return a custom disc to an ordinary one |

Use a track and volume appropriate for a shared area. Insert the finished disc into a jukebox for nearby listeners with compatible clients.

Jukebox audio has a range of **65 blocks**. Beacon-style range amplification is disabled. Goat-horn audio is enabled with a **15-block** range and a maximum duration of **1,000 seconds**. A special burnable tag is not required, and the default burnable-disc crafting recipe is disabled.

## If it is silent

Check your audio client, volume, and distance first. A search result or remote URL can stop working even when the physical disc remains. Test a known-working disc before assuming the jukebox is broken.

If only one listener cannot hear it, compare client setup. If everyone loses playback for the same source, report the source and message through [support](/docs/getting-started/troubleshooting/).
