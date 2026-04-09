import { component$ } from '@qwik.dev/core';
import * as Ranks from '~/components/ranks';

export default component$(() => {
  return (
    <section class="flex flex-col min-h-screen justify-center pt-20 max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Ranks
      </h1>
      <h2 class="mb-6 text-xl">
        Different ranks give different perks!
      </h2>
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.bee class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Bee
              </h3>
              <p class="text-lum-text-secondary">
                Starter Rank
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">3 Homes</p>
          <p class="text-lum-text-secondary">1 Creative Plot</p>
          <p class="text-lum-text-secondary">1 Auction House Slot</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">noenter</p>
          <p class="text-lum-text-secondary">noenterplayer</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.turtle class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Turtle
              </h3>
              <p class="text-lum-text-secondary">
                6 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">6 Homes</p>
          <p class="text-lum-text-secondary">2 Creative Plots</p>
          <p class="text-lum-text-secondary">/suicide</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">trappeddestination</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.panda class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Panda
              </h3>
              <p class="text-lum-text-secondary">
                18 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">9 Homes</p>
          <p class="text-lum-text-secondary">3 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">nofluidflow</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.dolphin class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Dolphin
              </h3>
              <p class="text-lum-text-secondary">
                36 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">12 Homes</p>
          <p class="text-lum-text-secondary">4 Creative Plots</p>
          <p class="text-lum-text-secondary">/nick</p>
          <p class="text-lum-text-secondary">/hat</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.frog class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Frog
              </h3>
              <p class="text-lum-text-secondary">
                66 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">15 Homes</p>
          <p class="text-lum-text-secondary">5 Creative Plots</p>
          <p class="text-lum-text-secondary">/craft</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">noitemdrop</p>
          <p class="text-lum-text-secondary">nomobspawntype PHANTOM</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.armadillo class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Armadillo
              </h3>
              <p class="text-lum-text-secondary">
                100 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">18 Homes</p>
          <p class="text-lum-text-secondary">6 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">exitmessage</p>
          <p class="text-lum-text-secondary">entermessage</p>
          <p class="text-lum-text-secondary">noelytra</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.axolotl class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Axolotl
              </h3>
              <p class="text-lum-text-secondary">
                200 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">21 Homes</p>
          <p class="text-lum-text-secondary">7 Creative Plots</p>
          <p class="text-lum-text-secondary">/ptime</p>
          <p class="text-lum-text-secondary">/pweather</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">novehicle</p>
          <p class="text-lum-text-secondary">playertime</p>
          <p class="text-lum-text-secondary">playerweather</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.mooshroom class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Mooshroom
              </h3>
              <p class="text-lum-text-secondary">
                350 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">24 Homes</p>
          <p class="text-lum-text-secondary">8 Creative Plots</p>
          <p class="text-lum-text-secondary">/rest</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">keepinventory</p>
          <p class="text-lum-text-secondary">keeplevel</p>
          <p class="text-lum-text-secondary">nohunger</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.glowSquid class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Glow Squid
              </h3>
              <p class="text-lum-text-secondary">
                550 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">27 Homes</p>
          <p class="text-lum-text-secondary">9 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">changebiome</p>
          <p class="text-lum-text-secondary">noenderpearl</p>
          <p class="text-lum-text-secondary">noflight</p>
          <p class="text-lum-text-secondary">ownerfly</p>
          <p class="text-lum-text-secondary">ownermemberfly (/fly in claims)</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.ocelot class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Ocelot
              </h3>
              <p class="text-lum-text-secondary">
                800 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">30 Homes</p>
          <p class="text-lum-text-secondary">10 Creative Plots</p>
          <p class="text-lum-text-secondary">/nick formatting</p>
          <p class="text-lum-text-secondary">/enderchest</p>
          <p class="text-lum-text-secondary">/condense</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.allay class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Allay
              </h3>
              <p class="text-lum-text-secondary">
                1500 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">36 Homes</p>
          <p class="text-lum-text-secondary">12 Creative Plots</p>
          <p class="text-lum-text-secondary">Image Maps</p>
          <p class="text-lum-text-secondary">/speed</p>
          <p class="text-lum-text-secondary">/stack</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.sniffer class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Sniffer
              </h3>
              <p class="text-lum-text-secondary">
                2000 votes
              </p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">40 Homes</p>
          <p class="text-lum-text-secondary">14 Creative Plots</p>
          <p class="text-lum-text-secondary">/ranknick (Custom Rank)</p>
        </div>
      </div>
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.enderDragon class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Ender Dragon
              </h3>
              <p class="text-lum-text-secondary">
                $5/mo / $10/qtr / $35/yr
              </p>
            </div>
          </div>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.wither class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Wither
              </h3>
              <p class="text-lum-text-secondary">
                $7/mo / $16/qtr / $57/yr
              </p>
            </div>
          </div>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative">
          <div class="flex items-center gap-4">
            <Ranks.moobloom class="w-12 h-auto" />
            <div>
              <h3 class="flex items-center gap-2 font-bold text-2xl">
                Moobloom
              </h3>
              <p class="text-lum-text-secondary">
                $9/mo / $24/qtr / $80/yr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});