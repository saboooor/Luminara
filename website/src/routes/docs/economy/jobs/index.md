---
icon: 'minecraft:item/iron_pickaxe'
title: 'Jobs and earning money'
description: 'Choose work, inspect paid actions, and track job progression.'
keywords: 'jobs browse join info stats leave income work'
date_created: '2026-10-17'
last_updated: '2026-10-17'
---

## Choose a job

Open `/jobs browse` to see the available jobs. Pick one that matches how you play, then inspect `/jobs info <job>` for its paid actions. Join with `/jobs join <job>` when you have an available job slot.

The default limit is **two jobs** and jobs are not joined automatically. Inspect each job’s paid actions; not every mining, farming, or combat action earns money.

## Understand progression

`/jobs stats` shows your job progress. Job experience and money rewards are distinct from [skill XP](/docs/progression/skills/). An action can level a skill without paying your job, or pay your job without increasing a particular skill.

## Payments and limits

Job income has a **15% tax deducted from the payment**. Payments are batched with a five-second delay, so your balance may not update on every action.

Your job income limit is `2000 + 2000 × (total job level / 100)` over a **120-minute** period. Points and job XP have separate limits and reset periods. Check the limit message before assuming a job stopped working.

Payments are allowed in the survival and resource worlds: `world`, `world_nether`, `world_aether`, `world_the_end`, `resworld`, `resworld_nether`, `resworld_aether`, and `resworld_the_end`. Creative play does not pay; exploration while flying or gliding does not pay either.

Daily quests are enabled with one skip and a skip cost of **$1,500**. Read the confirmation before spending money.

## If you are not getting paid

Check that you joined the job, used an eligible material or action, and are in an allowed area. Some actions have anti-farming restrictions. Check the job's information and any limit messages before rebuilding a farm.

## Change careers

Use `/jobs leave <job>` to leave. Read the warning before confirming: progression loss or other penalties can apply. Inspect your current stats first so you understand what is changing.

Next, sell surplus goods through [shop signs](/docs/economy/chest-shops/) or the [auction house](/docs/economy/auction-selling/).
