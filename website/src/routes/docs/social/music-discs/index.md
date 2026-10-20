---
icon: 'minecraft:item/music_disc_cat'
title: 'Custom music discs'
description: 'Burn music, build jukebox queues, and control screens, speakers, and visualizers.'
keywords: 'vc-addon-discs disc burn search erase playlist jukebox jellyfin screens visualizer speakers horns'
date_created: '2026-10-17'
last_updated: '2026-10-20'
extra_buttons:
  - label: 'Getting help'
    href: '/docs/getting-started/troubleshooting/'
---

## Prepare your client and disc

Install **Plasmo Voice or Simple Voice Chat** for your Minecraft version and mod loader, and connect to voice before testing music. Both clients can receive custom-disc audio. See [proximity voice chat](/docs/social/voice-chat/) for setup. Unmodified Bedrock clients cannot install these Java voice mods.

Hold a music disc in your main hand. Command permissions still apply. Luminara does not require a special burnable tag, and the default burnable-disc crafting recipe is disabled. Burned discs gain an enchantment glint. Burning replaces the item lore with the song name; erasing removes that lore.

## Find and burn audio

| Command                                           | Purpose                                                                    |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| `/disc search <query>`                            | Search YouTube for a song                                                  |
| `/disc burn <url> [name]`                         | Burn supported audio onto the held disc, optionally naming it              |
| `/disc erase`                                     | Remove custom audio and restore an ordinary disc or horn                   |
| `/disc playlist <playlisturl> [shuffle\|reverse]` | Prepare a playlist for burning into a chest of discs                       |
| `/disc cancel [player]`                           | Stop goat-horn playback; stopping another player requires extra permission |

Insert a burned disc into a jukebox. Audio sources include YouTube videos/live streams, SoundCloud, Bandcamp, Vimeo, Twitch streams, and direct HTTP audio URLs. Direct files can use MP3, FLAC, WAV, AAC, OGG, supported MP4/M4A or WebM/Matroska audio, and M3U/PLS stream playlists. Availability depends on the remote service.

## Audio range and volume

Luminara enables **beacon-style pyramid amplification** beneath jukeboxes. Build complete square layers from beacon-base blocks directly below the jukebox; each lower layer extends one block farther on every side.

| Complete pyramid layers | Jukebox audio range |
| ----------------------- | ------------------- |
| None                    | **64 blocks**       |
| 1 (3×3)                 | **96 blocks**       |
| 2 (add 5×5 below)       | **128 blocks**      |
| 3 (add 7×7 below)       | **192 blocks**      |
| 4 (add 9×9 below)       | **256 blocks**      |

The configured fixed range of 65 blocks applies only when pyramid amplification is disabled. Range is calculated when a song starts, so restart playback after changing the pyramid.

The Plasmo Voice source line defaults to **50% volume**, adjustable in the client mod settings. Jukebox volume is a separate playback control. Mono conversion is disabled, preserving stereo playback. Distance visualization is enabled for jukeboxes and horns; players see it only with **Visualize Voice Distance** enabled in their client.

Goat horns have a **15-block** range and **no configured duration limit**. Hold a horn to burn it, then use it to play its audio; `/disc cancel` stops it. On Minecraft 26.3, burned horns lack the vanilla use animation; erasing restores the original instrument.

## Build a chest queue

1. Place a single or double chest directly above a jukebox.
2. Put burned discs in the chest in the order you want to hear them. Ordinary discs remain stored but are skipped.
3. Playback starts when burned discs are added or the chest is edited/closed, including hopper additions. Use **Play chest** in the controls to restart a stopped queue.

Discs stay in the chest while playing. Adding, removing, or moving them updates the queue in slot order. Removing the current disc lets its song finish. Right-clicking the jukebox with a disc stores one in the chest; a full chest leaves it in your hand.

To burn an entire playlist, put individual, unstacked music discs in the chest, run `/disc playlist <playlisturl>`, and right-click that chest within **two minutes** while the jukebox is empty. Existing burned discs are overwritten. Non-disc items and stacks are skipped; available discs determine how many tracks are burned. Add `shuffle` to choose random playlist entries without repeats, or `reverse` to start at the last entry.

Queues play once by default. Enable **Loop** to repeat or **Shuffle** to visit every disc in random order each pass. Loop also repeats a standalone burned disc. Breaking the chest/jukebox, unloading its chunk, or restarting stops playback; queues do not automatically resume.

## Use the jukebox controls

Right-click a jukebox containing a custom disc or running a queue to open its playback dialog. Sneak-right-click opens controls only when both hands are empty, so you can still place blocks while holding items.

- Pause/resume, stop, replay, or explicitly eject a standalone disc.
- Select a numbered queue track to jump to it; selecting the current track restarts it. **Refresh** updates queue buttons after chest changes.
- Adjust volume from **0–100%**. Use **Seek** for steps of 15/30 seconds, one minute, or five minutes on seekable tracks. Linked video follows the new position; live streams cannot seek.
- Open **Crossfade settings** to enable/disable transitions or set **0–30 seconds** with the -1s/+1s buttons. New jukeboxes default to three seconds. Changes affect upcoming transitions; live streams transition normally.

The floating hologram shows progress and elapsed/total time, or **LIVE** for streams. Closing the dialog leaves music playing. Controls require play/control access, staying within **eight blocks**, and reopening after two minutes or a track/disc change. Older servers without Paper dialogs use clickable chat controls.

## Add speakers and bass lamps

Place a note block directly beside the jukebox for physical stereo: the note block plays the original left channel and the jukebox the right. If several touch it, selection follows north/east/south/west order. Alternatively, choose **Link note block** in the controls and click a note block within **32 blocks** in the same world. An explicit link takes priority; **Unlink note block** restores adjacent detection.

Use **Stereo** to swap channels or disable the split. Speaker placement and channel changes apply at the next song or playback restart. Mono recordings play from both speakers. Removing either active speaker stops playback.

For bass lighting, place ordinary redstone lamps, choose **Link bass lamp**, and click a lamp within **32 blocks** within two minutes. Repeat for more lamps; each lamp has one source. Use **Unlink bass lamp** to remove a link. Lamps react to bass and reset on pause/stop while respecting ordinary redstone power. Breaking a lamp or its jukebox clears the link.

## Set up visualizers and holograms

Open **Visualizer settings** to add up to **eight** visualizers per jukebox. Choose frequency bars or a speaker driver that pulses with bass. Each can have its own facing, size, offset, and enabled state. These displays require Minecraft 1.19.4 or newer.

Hold a **stick**, look at the jukebox or its chest within **six blocks**, then run `/disc visualizer edit` or `/disc hologram`. Menus also offer **Move / resize in world** and **Move hologram in world**.

| Input                         | Action                                                        |
| ----------------------------- | ------------------------------------------------------------- |
| Right-click                   | Grab or release the selected display; look or walk to move it |
| Scroll while grabbed          | Move it closer or farther away                                |
| Sneak while moving            | Snap to quarter-block steps                                   |
| Left-click / sneak-left-click | Select the visualizer you look at / cycle visualizers         |
| Scroll while released         | Resize the visualizer; sneak-scroll adjusts width             |
| Swap-hand key (normally F)    | Rotate the selected visualizer 90 degrees                     |
| Sneak-right-click             | Finish and save                                               |

`/disc visualizer add bars|speaker`, `remove`, `next`, `type`, `toggle`, `reset`, and `rotate` manage the selected visualizer. `/disc visualizer done` or `/disc hologram done` ends editing. `/disc hologram gui` opens hologram settings; `move`, `offset <x> <y> <z>`, and `reset` provide command positioning.

Only one person can edit a jukebox at a time. Switching items, leaving, disconnecting, or five minutes of inactivity ends editing. Disabled visualizers can appear as editing previews without becoming enabled for playback.

Mining a jukebox preserves volume, loop/shuffle, stereo, crossfade, hologram/visualizer settings, and physical links on its dropped item, marked **Saved jukebox settings**. Replacing it restores that setup, including creative-mode drops. Music and chest contents do not travel with it. Lamps and frames remain in place; links restore only when the original targets are still available and satisfy their range/link restrictions.

## Build an item-frame video screen

1. Place a rectangular wall grid of item frames or glow item frames.
2. Run `/disc screen create [name]` and right-click two diagonally opposite corner frames. For a 1×1 screen, click the same frame twice with a brief pause.
3. Click a jukebox to link it, or run `/disc screen finish` to finish without linking.

Videos from that jukebox's tracks play across the frames with black letterboxing where needed. Pause and seeking follow the audio. Frames in registered screens are protected from rotation/removal. Standard Minecraft map colors work without an extra screen mod; the optional **screen-companion** Fabric client provides full color.

| Command                          | Purpose                                  |
| -------------------------------- | ---------------------------------------- |
| `/disc screen list`              | List screens and linked jukeboxes        |
| `/disc screen link <name>`       | Link a screen to the jukebox you look at |
| `/disc screen unlink <name>`     | Remove the jukebox link                  |
| `/disc screen play <name> <url>` | Manually play a video                    |
| `/disc screen stop [name]`       | Stop screen playback                     |
| `/disc screen clear [name]`      | Clear the display to black               |
| `/disc screen delete <name>`     | Delete its configuration                 |
| `/disc screen cancel`            | Cancel an unfinished selection           |

Screens are enabled on Luminara at **30 FPS**, with video updates sent to viewers within **48 blocks**. Standard map rendering uses ordered dithering at strength **12** for smoother gradients. Full-color delivery to compatible Fabric screen-companion clients is enabled at JPEG quality **85**. The screen viewing range is separate from the jukebox audio range.

Screen management requires permission, and rendering uses server-side `ffmpeg`. Automatic portable FFmpeg installation is enabled if it is missing; staff can also use `/disc screen install-ffmpeg`. The configured YouTube video resolver is `yt-dlp`, when available. Network loading can delay video after a seek.

## Connect a Jellyfin library

Run `/disc jellyfin` or `/disc jellyfin connect [server-url]`, including any reverse-proxy base path. Follow the private chat prompts for the server URL, username, and password; use `<empty>` for a passwordless account or `cancel` to exit. Prompts expire after two minutes. Enter passwords only when prompted, never as command arguments.

Hold a burnable disc and choose media from the browser. Use `/disc jellyfin browse` to reopen it, `/disc jellyfin search <text>` to filter, `/disc jellyfin cancel` to cancel input, or `/disc jellyfin disconnect` to remove the saved connection.

The library supports music, audiobooks, movies, episodes, music videos, and home videos. Video audio requires Jellyfin audio-transcoding permission; linked screens also need permission to play the original video. Video audio transcodes cannot seek, while supported original audio files can. The Minecraft server must be able to reach your Jellyfin server; use its final URL and HTTPS for remote connections.

Discs can be shared and use the owner's saved connection even while the owner is offline. Passwords are not saved; server-side access tokens are. The disc contains a random reference rather than credentials. Disconnecting or revoking the token breaks access until the same server/account reconnects. A different account does not unlock existing discs.

## Permissions and troubleshooting

Playback and controls are available by default in the plugin. Burning, searching, erasing, playlists, Jellyfin, screen management, and horn cancellation default to operators unless granted by the server. Permissions use `pv.addon.discs.*`, with matching `vc.addon.discs.*` aliases. Playlists require both `playlist` and `burn`; Jellyfin burning also requires `jellyfin` and `burn`. Controls and display editing require `control` and `play`.

If silent, check your voice connection, output device, voice/source volume, jukebox volume, distance, and pause state. Compare a known-working disc and another nearby listener. Protection plugins can block chest or jukebox interactions.

An ordinary remote track that fails lookup or stalls can lose its custom audio and be skipped. Jellyfin connection failures preserve the disc reference and stop the queue; check the owner's connection before retrying. Remote audio lookup/startup times out after 30 seconds; Jellyfin transcoding startup can take up to 60 seconds.

YouTube OAuth2 and a remote cipher service are enabled in this configuration. For YouTube login or player-script errors, report the exact message to staff. Staff can inspect `/disc oauth status`, authorize using `/disc oauth` (the pairing code appears in the server console), or force reauthorization with `/disc oauth force`. `/disc reload` reloads runtime settings without interrupting music; source, proxy, YouTube, and recipe settings require a restart. Never include pairing codes, tokens, or passwords in support reports.

Use [support](/docs/getting-started/troubleshooting/) with your client/version, source, and error message if playback still fails.
