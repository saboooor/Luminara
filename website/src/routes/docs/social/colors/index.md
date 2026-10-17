---
icon: 'minecraft:item/magenta_dye'
title: 'Colors and text formatting'
description: 'Use legacy color codes, hex colors, and MiniMessage gradients.'
keywords: 'colors colours formatting minimessage hex rgb gradient bold italic underline strikethrough magic reset einfo'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Armor visibility and item names'
    href: '/docs/social/armor-and-item-names/'
---

## Choose the right format

Formatting support depends on the command, text field, and your permissions. Legacy codes use an ampersand, such as `&aHello`. MiniMessage uses tags, such as `<green>Hello</green>`. Use the format accepted by the feature you are editing; these are two different syntaxes. If codes appear literally, check the format and your access before trying a longer message.

## Legacy colors

Place a code before the text to color everything after it. For example, `&6Gold &fWhite` changes from gold to white. Type a single ampersand before each code.

| Code | Color        | MiniMessage name |
| ---- | ------------ | ---------------- |
| `&0` | Black        | `black`          |
| `&1` | Dark blue    | `dark_blue`      |
| `&2` | Dark green   | `dark_green`     |
| `&3` | Dark aqua    | `dark_aqua`      |
| `&4` | Dark red     | `dark_red`       |
| `&5` | Dark purple  | `dark_purple`    |
| `&6` | Gold         | `gold`           |
| `&7` | Gray         | `gray`           |
| `&8` | Dark gray    | `dark_gray`      |
| `&9` | Blue         | `blue`           |
| `&a` | Green        | `green`          |
| `&b` | Aqua         | `aqua`           |
| `&c` | Red          | `red`            |
| `&d` | Light purple | `light_purple`   |
| `&e` | Yellow       | `yellow`         |
| `&f` | White        | `white`          |

## Legacy formatting

| Code | Effect                     | Example          |
| ---- | -------------------------- | ---------------- |
| `&k` | Obfuscated / magic text    | `&kSecret&r`     |
| `&l` | Bold                       | `&lBold&r`       |
| `&m` | Strikethrough              | `&mOld text&r`   |
| `&n` | Underline                  | `&nUnderlined&r` |
| `&o` | Italic                     | `&oItalic&r`     |
| `&r` | Reset color and formatting | `&cRed&r Normal` |

Put color before formatting: `&6&lGolden title&r`. Legacy color changes can clear existing decoration, so repeat the decoration after changing color if needed. Reset after styled text to keep later words plain.

## Hex colors

Hex colors use six digits in `RRGGBB` order: red, green, then blue. Each pair ranges from `00` to `ff`. For fields that accept legacy hex, use `&#55ffffHello`; MiniMessage uses `<#55ffff>Hello</#55ffff>`. Hex syntax varies between plugins, so a field accepting ordinary legacy codes may still reject hex.

## MiniMessage

In fields supporting MiniMessage, surround text with opening and closing tags:

- Color: `<gold>Hello</gold>` or `<#55ffff>Hello</#55ffff>`.
- Bold: `<bold>Hello</bold>`.
- Italic: `<italic>Hello</italic>`.
- Underline: `<underlined>Hello</underlined>`.
- Strikethrough: `<strikethrough>Hello</strikethrough>`.
- Magic text: `<obfuscated>Hello</obfuscated>`.

Nest styles as `<gold><bold>Golden title</bold></gold>`, closing the inner tag first. Explicit closing tags keep later text outside the style. `<reset>` clears open styles in the usual non-strict mode; strict MiniMessage requires matching closing tags and does not allow reset.

## Gradients and previews

A gradient changes color across the letters. For example, `<gradient:#ff8800:#ff55ff>Sunset</gradient>` blends orange into pink. `<rainbow>Hello</rainbow>` applies a rainbow in fields that allow that tag.

Use the [Birdflop RGB generator](https://www.birdflop.com/resources/rgb/) to choose colors, enter your text, and generate a gradient. Select an output format matching the destination field before copying the result. Use the [MiniMessage viewer](https://webui.advntr.dev/) to preview MiniMessage; a preview does not grant permission to use a style in game.

The [official MiniMessage format reference](https://docs.advntr.dev/minimessage/format.html) explains supported tags and nesting. Plugins may enable only a subset of tags. For item labels, see [item names](/docs/social/armor-and-item-names/).
