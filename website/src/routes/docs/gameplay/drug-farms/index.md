---
icon: 'minecraft:item/barrel'
title: 'Farm controllers and worker villagers'
description: 'Set up automated harvesting, manage output, and move farms with their settings.'
keywords: 'drugs drug farms crafting effects farming'
date_created: '2026-10-21'
last_updated: '2026-10-21'
extra_buttons:
  - label: 'Growing ingredients'
    href: '/docs/gameplay/drug-crops/'
  - label: 'Cannabis strains'
    href: '/docs/gameplay/cannabis-strains/'
---

## Build and place a controller

Open `/drugs` and select the Farm Controller to inspect its recipe. The default crafting layout is:

```text
Iron    Redstone  Iron
Copper  Barrel    Copper
Iron    Redstone  Iron
```

Place the controller barrel and right-click it to open the management menu. Existing composter controllers also remain usable.

## Select the growing area

1. Choose **Define Farm Area** to receive an arrow selection wand.
2. Use the wand to select two corners as instructed in game.
3. Keep the horizontal area within **16 × 16 blocks**. Include the crop positions; a selection on farmland also works for the crops directly above it.
4. Plant the initial crops yourself. Workers replant from the planting stock they harvest.

The controller manages drug crops, including cannabis, poppy, mushroom, ephedra, coca, sassafras, ergot, salvia, and resin. Ordinary wheat is left alone. Growing conditions still apply: automation does not replace water, lighting, or active growth time.

## Hire and position workers

Choose **Get Work Contract (1 emerald)**. Hold the contract in your main hand and right-click a villager. The contract is already linked to its farm; you do not need to look at the controller while assigning the villager.

Each farm supports up to **five villagers**. Assigned villagers become Farmers. Workers must be alive, loaded, and able to reach the crop. Provide walkable paths and standing space near plants; fencing a villager far from the plot does not make it contribute remotely.

Workers walk toward crops and harvest when close enough. More reachable workers increase the farm's per-cycle capacity, up to the five-worker limit. Exact throughput depends on server settings and travel time. **Start Farm / Stop Farm** controls whether the farm works.

## Store harvests in a chest

Choose **Set Output Chest**, then right-click a chest. Double chests work. Harvested ingredients and planting stock left after replanting go into that chest. Without an output chest, items drop at the controller. **Clear Output Chest** restores that behavior.

Use **Drop Chest Overflow: ON/OFF** to choose what happens when items do not fit:

| Setting         | Result                                              |
| --------------- | --------------------------------------------------- |
| ON, the default | Overflow drops at the controller.                   |
| OFF             | Overflow is discarded; workers continue harvesting. |

OFF does not pause harvesting or keep excess items for later. The choice belongs to this farm and survives restarts and moving its controller. If the linked chest is missing or its chunk is unloaded, output still drops at the controller with either setting.

## Pack and move a farm

Break the controller to receive a barrel item containing the farm identity, area, worker links, start/stop state, and overflow choice. The farm pauses while packed. Place it again to restore it; the selected area shifts by the same offset as the controller.

The output chest link stays at its original location, so relink it if your storage has moved. Villagers are not transported with the barrel. Workers that cannot be found as living, valid villagers at placement are removed, including workers in unloaded chunks. Keep intended workers loaded when restoring the controller.

Packed farms survive restarts and their work contracts remain valid. Contracts for farms that no longer exist are refunded for one emerald each when checked on joining or use.

## Troubleshoot a stopped farm

Check that the farm is started, has a defined region, has assigned valid villagers, and has mature supported crops. Then inspect crop water/light conditions and worker access. Workers need to be near enough to reach the work; a linked chest alone does not make a farm operate remotely. Also check the controller ground and chest before assuming harvests disappeared: output may be dropping, or overflow may be set to OFF.
