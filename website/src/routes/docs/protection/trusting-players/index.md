---
icon: 'minecraft:item/emerald'
title: 'Sharing a claim'
description: 'Grant the access a friend needs and revoke it when plans change.'
keywords: 'griefprevention trust accesstrust containertrust permissiontrust untrust'
date_created: '2026-10-17'
last_updated: '2026-10-17'
extra_buttons:
  - label: 'Locking containers and doors'
    href: '/docs/protection/container-locks/'
---

## Choose the right access

Stand **inside the specific claim** before changing trust. Running trust commands outside your claims can affect all of them.

| Command                     | Access                                    |
| --------------------------- | ----------------------------------------- |
| `/accesstrust <player>`     | Basic access such as doors and buttons    |
| `/containertrust <player>`  | Containers and related interactions       |
| `/trust <player>`           | Building and breaking                     |
| `/permissiontrust <player>` | Ability to share their access with others |
| `/trustlist`                | Inspect the claim's trust list            |
| `/untrust <player>`         | Remove that player's trust                |

Building trust is a large grant. Give access or container trust when that is all someone needs. Be especially careful with permission trust, since it lets someone extend access beyond your original invite.

## Check both protection layers

A trusted builder may still be unable to open an individually locked chest. [Container locks](/docs/protection/container-locks/) and claim trust are separate controls.

## After a shared project

Review `/trustlist` and remove access that is no longer needed. Recheck separate claims and container locks too. Do not publish blanket public access to solve a single friend's permissions problem.
