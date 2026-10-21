---
icon: 'minecraft:item/music_disc_cat'
title: 'Custom music discs'
description: 'Burn playlists, mix songs with AutoMix, and control audio effects, screens, speakers, lights, and holograms.'
keywords: 'vc-addon-discs disc burn playlist Spotify Apple Music AutoMix mixing filters jukebox Jellyfin subtitles screens visualizer speakers lights holograms horns'
date_created: '2026-10-17'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Getting help'
    href: '/docs/getting-started/troubleshooting/'
---

## Prepare your client and disc

Install **Plasmo Voice or Simple Voice Chat** for your Minecraft version and mod loader, and connect to voice before testing music. Both clients can receive custom-disc audio. See [proximity voice chat](/docs/social/voice-chat/) for setup. Unmodified Bedrock clients cannot install these Java voice mods.

Hold a music disc in your main hand. Command permissions still apply. Luminara does not require a special burnable tag, and the default burnable-disc crafting recipe is disabled. Burned discs gain an enchantment glint. Burning replaces the item lore with the song name; erasing removes that lore.

## Find and burn audio

| Command                                                       | Purpose                                                                    |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `/disc search <query>`                                        | Search YouTube for a song                                                  |
| `/disc burn <url> [name]`                                     | Burn supported audio onto the held disc, optionally naming it              |
| `/disc erase`                                                 | Remove custom audio and restore an ordinary disc or horn                   |
| `/disc playlist <playlisturl> [shuffle\|reverse] [overwrite]` | Prepare a playlist for burning into a chest of discs                       |
| `/disc cancel [player]`                                       | Stop goat-horn playback; stopping another player requires extra permission |

Insert a burned disc into a jukebox. Audio sources include your connected Jellyfin library, YouTube videos/live streams, SoundCloud, Bandcamp, Vimeo, Twitch streams, and direct HTTP audio URLs. Direct files can use MP3, FLAC, WAV, AAC, OGG, supported MP4/M4A or WebM/Matroska audio, and M3U/PLS stream playlists. Availability depends on the remote service.

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
3. Right-click the jukebox and choose **Play chest** to start the queue. Opening, closing, clicking, or dragging items in the chest does not start playback. Playlist burning, hopper additions, and inserting a disc through the jukebox can still start an idle queue.

Discs stay in the chest while playing. Adding, removing, or moving them updates the queue in slot order. Removing the current disc lets its song finish. Right-clicking the jukebox with a disc stores one in the chest; a full chest leaves it in your hand.

To burn an entire playlist, put individual, unstacked music discs in the chest, run `/disc playlist <playlisturl>`, and right-click that chest within **two minutes** while the jukebox is empty. Existing burned discs are preserved by default; add `overwrite` to replace their songs, for example `/disc playlist <playlisturl> shuffle overwrite`. Non-disc items and stacks are skipped; available discs determine how many tracks are burned. Add `shuffle` to choose random playlist entries without repeats, or `reverse` to start at the last entry.

Queues play once by default. Enable **Loop** to repeat or **Shuffle** to visit every disc in random order each pass. Loop also repeats a standalone burned disc. Breaking the chest or jukebox stops playback. When a jukebox chunk unloads, the plugin remembers the current disc, song position, and pause state. Loading that chunk again resumes standalone discs and chest queues even with Loop off. A moved queue disc is located again; a removed or replaced disc is not resumed. These playback snapshots last only for the current server session and are lost on restart or plugin reload. Non-seekable streams reconnect without seeking.

### Spotify and Apple Music playlists

Public Spotify and Apple Music playlist links work with `/disc playlist`, including Spotify regional share links, `spotify:playlist:ID`, and short Apple Music links such as `https://music.apple.com/ca/playlist/pl.u-ID`.

The command first reads song names and artists. **Matching happens only when you right-click the chest**, and only enough songs are matched for its eligible discs. Shuffle/reverse is applied before choosing those songs. Existing custom discs are excluded unless you explicitly use `overwrite`. If the selected chest slots change while songs are being matched, retry the chest click. Repeated clicks do not start duplicate matching jobs.

Songs are matched to YouTube results for playback; matches can be a different recording. The plugin does not stream subscription audio from Spotify or Apple Music. Public imports need no player login or API token, but private or region-blocked playlists may not work. Spotify's public embed supplies at most **100 entries**; the command warns if a longer playlist may be incomplete. Apple Music imports the entries exposed by its page and warns when its advertised count is larger. Public-page formats can change. Staff can optionally configure API credentials for paginated imports up to 1,000 songs; Spotify access-token renewal is manual.

## Use the jukebox controls

Right-click a jukebox containing a custom disc or running a queue to open its playback dialog. Sneak-right-click opens controls only when both hands are empty, so you can still place blocks while holding items.

- Pause/resume, stop, replay, or explicitly eject a standalone disc.
- Select a numbered queue track to jump to it; selecting the current track restarts it. **Refresh** updates queue buttons after chest changes.
- Adjust volume from **0–100%**. Use **Seek** for steps of 15/30 seconds, one minute, or five minutes on seekable tracks. Linked video follows the new position; live streams cannot seek.
- Open **Mixing** to enable/disable transitions or set **0–30 seconds** with the -1s/+1s buttons. New jukeboxes default to three seconds. Changes affect upcoming transitions; live streams transition normally.

The main hologram shows progress and elapsed/total time, or **LIVE** for streams. **Manage holograms** controls it and the separate queue display. Closing the dialog leaves music playing. Controls require play/control access, staying within **eight blocks**, and reopening after two minutes or a track/disc change. Older servers without Paper dialogs use clickable chat controls.

## Mixing and AutoMix

Open **Mixing** in jukebox controls. Fixed crossfades default to **three seconds**, can be set from **0–30 seconds**, and can be toggled off. AutoMix is **off by default** and overrides the fixed duration while enabled.

With AutoMix on, the plugin analyzes the current song and compares eight-second sections in the next song's first minute. It looks for compatible tempos, confident beats, and similar energy, and can cue into a later section when that makes a better match. A quiet or uncertain current section starts a fresh analysis window after eight seconds. Analysis is bounded, so slow remote loading can still leave a normal fade or a gap.

A confident transition combines:

- A **16-beat blend**, capped at 16 seconds and shortened for short songs.
- Beat-aligned incoming audio and a wider overlap that keeps both songs audible through the middle.
- Gradual, pitch-preserving **tempo matching**: the faster song slows and the slower song speeds toward a shared tempo, with automatic adjustments limited to ±8%. After the overlap, the incoming song returns to its configured tempo over four seconds.
- A **bass handover**, plus an incoming high-pass sweep that opens up and an outgoing low-pass sweep that removes treble. Temporary changes reset afterward and preserve manual effects.
- Attenuation of a louder incoming song; quiet tracks are not automatically boosted above the selected playback volume.

AutoMix can also mix out early during the current song's last third, within its final **45 seconds**, when the live section has a particularly strong beat, close tempo, and similar energy. The full overlap must fit; this is not an automatic skip at a fixed percentage.

The hologram and playback controls show analysis status. **✨** means a beat-matched plan is ready, with its transition type, duration, and **next at** cue. **Mix out at** identifies an earlier exit from the current song. Once announced, the song-pair plan remains committed despite ordinary analysis fluctuations, automatic tempo recovery, or seeking within the same song. Changing the song pair or configured speed/tempo, or disabling AutoMix, can reset it. A strong earlier-exit opportunity can upgrade an end-of-song plan once.

Uncertain or mismatched beats use a short smooth fade without automatic tempo/filter sweeps. A missing sparkle does not mean transitions are disabled. This is beat-based mixing; it does not detect harmonic keys or musical phrases.

Skipping or selecting a queue track keeps the current song playing while its replacement loads, then blends using the available mix plan or crossfade setting. With Loop off, skipping the last song fades to silence. Pause/buffering freeze the transmitted-audio fade clock; Stop cancels playback and preparation. If a next song fails to load or decode, its disc is unburned and the queue tries the following song while current playback continues. An uncertain beat alone never erases a disc. Jellyfin connection failures are handled separately, as described below.

## Audio effects and filters

Open **Audio effects** for equalizer presets and independent effects. Settings apply to the jukebox, are shared by both voice backends, and are saved with it.

| Control or command                                                                                           | Effect                                                   |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| Equalizer presets; `/disc effect bass`, `boost`, `maxed`, `party`, `pop`, `radio`, `soft`, `treb`, or `flat` | Choose a frequency balance; `flat` clears EQ             |
| Tempo ±5%; `/disc effect tempo <0.5-2.0>`                                                                    | Change tempo while preserving pitch                      |
| Pitch ±1 semitone; `/disc effect pitch <-12 to 12>`                                                          | Transpose pitch while preserving tempo                   |
| Low-pass cutoff button; `/disc effect lowpass <20-20000\|off>`                                               | Remove frequencies above the cutoff, in Hz               |
| High-pass cutoff button; `/disc effect highpass <20-20000\|off>`                                             | Remove frequencies below the cutoff, in Hz               |
| `/disc effect 8d`                                                                                            | Toggle rotating stereo panning                           |
| `/disc effect echo`                                                                                          | Toggle echo                                              |
| `/disc effect underwater`                                                                                    | Toggle a muffled underwater effect                       |
| `/disc effect tremolo`                                                                                       | Toggle rhythmic volume modulation                        |
| `/disc effect vibrato`                                                                                       | Toggle pitch modulation                                  |
| `/disc effect nightcore`                                                                                     | Toggle 1.25× speed and pitch together                    |
| `/disc effect vaporwave`                                                                                     | Toggle 0.8× speed and pitch together                     |
| `/disc effect gui`                                                                                           | Open the effects menu                                    |
| `/disc effect clear`                                                                                         | Reset effects, EQ, tempo, pitch, and manual pass filters |

Low-pass and high-pass can be combined. Menu buttons cycle through cutoffs; commands set an exact value between **20 and 20,000 Hz** or turn that filter off. AutoMix sweeps are separate from these manual cutoffs. Reset tempo & pitch in the menu resets those two controls without clearing other effects. Large manual tempo/pitch changes can sound less natural than AutoMix's small adjustments.

Seekable, finite songs also have conservative **silent-edge trimming**: only completely zero-valued decoded audio at their beginning/end is skipped. Quiet music and pauses inside songs stay intact. Detection checks up to **15 seconds per edge**, has an eight-second total scan budget, and caches results. If the ending cannot be verified, it stays unchanged. Live streams are not scanned. Displayed positions retain the original song timestamps; seek bounds and the playable ending reflect the detected trim.

## Speakers and linked lights

Open **Speaker setup**, choose **Link left note block** and **Link right note block**, and click two distinct note blocks within **32 blocks** in the same world. Linking a channel selects **Note block L / Note block R** mode. Both links must be available before playback starts; only those note blocks emit audio, and the jukebox itself stays silent.

Use the **Stereo** button to toggle this mode or turn it off, and the separate unlink buttons to release either speaker. Speaker placement and channel changes apply at the next song or playback restart. Mono recordings play from both speakers. Removing an active speaker stops playback. Audio playback controls affect both speakers together.

### Linked lights

Open **Lights**, choose a response, and right-click a placed light within **32 blocks** and **two minutes**. Each light has one jukebox source; several lights can share the same source. Selecting a new response and clicking an already linked light changes its band. Use **Unlink light** to release it.

Responses are **Bass**, **Mids**, **Highs**, **Deep bass**, **Low mids**, **Vocal range**, **Sparkle**, and **Full spectrum**. Vocal range is a frequency range, not isolated vocals; Sparkle follows bright high frequencies.

Supported blocks include redstone lamps, copper bulbs, glowstone, sea lanterns, shroomlights, froglights, jack o'lanterns, magma blocks, crying obsidian, redstone blocks, and beacons. Blocks with a native lit state use it; always-lit blocks temporarily become black concrete while off. Redstone blocks provide power while on. Beacons stay in place and need an empty space immediately above them for a temporary black-concrete beam shutter, plus their usual valid base and clear beam path.

Lights reset on pause/stop, chunk unload, and plugin shutdown. Original block data is restored when released; ordinary redstone power still applies to native lit blocks. Breaking a light or its jukebox clears the link. Lights operate independently of visualizers.

## Set up visualizers and holograms

Open **Visualizer settings** to add up to **eight** visualizers per jukebox. Choose frequency bars or a speaker driver that pulses with bass. Each can have its own facing, size, offset, and enabled state. These displays require Minecraft 1.19.4 or newer.

Hold a **stick**, look at the jukebox or its chest within **six blocks**, then run `/disc visualizer edit` or `/disc hologram`. Visualizer settings offer **Move / resize in world**. **Manage holograms** offers **Move main hologram** and **Move queue hologram**, with separate reset buttons.

| Input                         | Action                                                        |
| ----------------------------- | ------------------------------------------------------------- |
| Right-click                   | Grab or release the selected display; look or walk to move it |
| Scroll while grabbed          | Move it closer or farther away                                |
| Sneak while moving            | Snap to quarter-block steps                                   |
| Left-click / sneak-left-click | Select the visualizer you look at / cycle visualizers         |
| Scroll while released         | Resize the visualizer; sneak-scroll adjusts width             |
| Swap-hand key (normally F)    | Rotate the selected visualizer 90 degrees                     |
| Sneak-right-click             | Finish and save                                               |

`/disc visualizer add bars|speaker`, `remove`, `next`, `type`, `toggle`, `reset`, and `rotate` manage the selected visualizer. `/disc visualizer done` or `/disc hologram done` ends editing. `/disc hologram gui` opens **Manage holograms**; `move`, `offset <x> <y> <z>`, and `reset` provide command positioning.

Only one person can edit a jukebox at a time. Switching items, leaving, disconnecting, or five minutes of inactivity ends editing. Disabled visualizers can appear as editing previews without becoming enabled for playback.

Mining a jukebox preserves volume, loop/shuffle, stereo, crossfade, AutoMix, audio effects and filter cutoffs, both hologram positions/visibility, visualizer settings, and physical links on its dropped item, marked **Saved jukebox settings**. Replacing it restores that setup, including creative-mode drops. Music and chest contents do not travel with it. Lamps and frames remain in place; links restore only when the original targets are still available and satisfy their range/link restrictions.

### Main and queue holograms

Open **Manage holograms** to enable/disable the **main playback hologram** and **queue hologram** independently. The queue display shows up to five tracks in chest order, marks the current song, and counts further entries. Shuffle can play them in a different order. The queue hologram appears while a chest queue is playing.

Each hologram has its own saved position, move action, and reset button. Moving one leaves the other in place. Disabled displays can appear temporarily as editing previews. Visibility and position choices persist across restarts and travel with saved jukebox items.

## Build an item-frame video screen

1. Place a rectangular wall grid of item frames or glow item frames.
2. Run `/disc screen create [name]` and right-click two diagonally opposite corner frames. For a 1×1 screen, click the same frame twice with a brief pause.
3. Click a jukebox to link it, or run `/disc screen finish` to finish without linking.

Videos from that jukebox's tracks play across the frames with black letterboxing where needed. Pause and seeking follow the audio. Frames in registered screens are protected from rotation/removal. Standard Minecraft map colors work without an extra screen mod; the optional **screen-companion** Fabric client provides full color. HDR10/PQ and HLG video is automatically tone-mapped for display; ordinary SDR video keeps its normal color transfer. Screens preserve aspect ratio and use letterboxing where needed.

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

### Subtitles

For Jellyfin video, open **Screen → Subtitles** to turn captions on/off, use automatic selection, or choose an available language, SDH, or forced track. Captions appear as text over the lower part of the item-frame screen on Minecraft 1.19.4+. Changing tracks does not restart playback. Text-based subtitles are supported through Jellyfin's SRT conversion; image subtitles such as PGS/DVD need a text alternative.

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
