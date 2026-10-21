---
icon: 'minecraft:item/book'
title: 'Drug commands and achievements'
description: 'Find player commands, check active effects, and track native advancement progress.'
keywords: 'drugs drug progression crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Consumables'
    href: '/docs/gameplay/consumables/'
  - label: 'Tolerance and recovery'
    href: '/docs/gameplay/tolerance-and-recovery/'
---

## Player command reference

| Command                          | What it does                                                                           |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `/drugs`                         | Opens the item menu; click an item to inspect its recipe.                              |
| `/drugs help`                    | Shows actions available to your permissions.                                           |
| `/drugs growing`                 | Opens a crop picker dialog with planting and harvesting guides.                        |
| `/strains`                       | Opens the cannabis strain index.                                                       |
| `/tolerance`                     | Lists tolerance, maximums, and current potency for registered drugs.                   |
| `/drugstatus` or `/drugs status` | Lists current drug, withdrawal, and other potion effects with durations and strengths. |
| `/drugs achievements`            | Explains how to open the Drugs advancement tab.                                        |
| `/cartel reject`                 | Rejects your current enforcer demand.                                                  |

Farm actions are available through the nearby controller's menu, including area selection, contracts, output chests, and overflow. Use that menu rather than trying to operate a distant farm through its internal button commands.

Use `/drugs growing <crop>` to open a specific growing dialog. In recipe previews, click a harvested ingredient to see the guide and return with **Back to recipe**.

## Read status correctly

`/drugstatus` includes active effects and supported LSD/salvia onset delays. An effect with no recorded origin is shown as **source unknown**. This can include potion effects that the drug tracker did not attribute to an item.

The sober message means no active drug or potion effects remain. It does not promise zero tolerance or no addiction. Check `/tolerance` separately; see [recovery](/docs/gameplay/tolerance-and-recovery/) for persistent conditions.

## Open advancements

Open Minecraft's **Advancements** screen, normally **L** on Java Edition, and select the **Drugs** tab. Use your controls menu if you rebound the key. Progress uses Minecraft's native advancement display and unlock notifications, rather than a separate `/drugs` achievements inventory.

## Types of milestones

Default progression includes first use, trying every registered drug, using an item at maximum tolerance, reaching maximum tolerance on three drugs, and letting a maxed drug decay back to zero. Overdose outcome milestones also exist. Additional crafting and use-count milestones can be configured by the server.

Read the in-game advancement description for its actual requirement. Some milestones involve harmful character effects or death; unlocking an advancement does not remove those consequences. Ordinary item crafting and collection can be managed independently of chasing every milestone.

## Report a problem

Include the command, item and strain name, relevant status output, expected result, and what happened. For crop issues include the empty-hand growth readout; for farm issues include the controller settings and worker access; for sales include the buyer or demand and whether the dropped items remained. Send these details through [support](/docs/getting-started/troubleshooting/).
