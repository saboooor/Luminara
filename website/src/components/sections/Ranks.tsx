import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import Crown from 'lucide-icons-qwik/icons/Crown';
import * as Ranks from '~/components/ranks';
import { paidRanks } from '~/components/paid-ranks';

export default component$(() => {
  return (
    <section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center pt-20">
      <h1 class="my-2 flex items-center gap-3 text-2xl font-extrabold">
        <Crown size={32} />
        Ranks
      </h1>
      <p class="border-lum-border/10 text-lum-text-secondary mb-4 border-b pb-4">
        Different ranks are available on Luminara SMP, each with their own
        unique perks and benefits. Ranks can be obtained by voting for the
        server on various server listing websites. The more you vote, the higher
        rank you can achieve, unlocking more perks and benefits along the way.
      </p>
      <div class="mb-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.bee class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.bee class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Bee</h3>
              <p class="text-lum-text-secondary">Starter Rank</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">2 Homes</p>
          <p class="text-lum-text-secondary">1 Creative Plot</p>
          <p class="text-lum-text-secondary">1 Auction House Slot</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">noenter</p>
          <p class="text-lum-text-secondary">noenterplayer</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.turtle class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.turtle class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Turtle</h3>
              <p class="text-lum-text-secondary">6 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">2 Creative Plots</p>
          <p class="text-lum-text-secondary">/suicide</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">trappeddestination</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.panda class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.panda class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Panda</h3>
              <p class="text-lum-text-secondary">18 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">3 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">nofluidflow</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.dolphin class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.dolphin class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Dolphin
              </h3>
              <p class="text-lum-text-secondary">36 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">4 Creative Plots</p>
          <p class="text-lum-text-secondary">/nick</p>
          <p class="text-lum-text-secondary">/hat</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.frog class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.frog class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Frog</h3>
              <p class="text-lum-text-secondary">66 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">5 Creative Plots</p>
          <p class="text-lum-text-secondary">/craft</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">noitemdrop</p>
          <p class="text-lum-text-secondary">nomobspawntype PHANTOM</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.armadillo class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.armadillo class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Armadillo
              </h3>
              <p class="text-lum-text-secondary">100 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">6 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">exitmessage</p>
          <p class="text-lum-text-secondary">entermessage</p>
          <p class="text-lum-text-secondary">noelytra</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.axolotl class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.axolotl class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Axolotl
              </h3>
              <p class="text-lum-text-secondary">200 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">7 Creative Plots</p>
          <p class="text-lum-text-secondary">/ptime</p>
          <p class="text-lum-text-secondary">/pweather</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">novehicle</p>
          <p class="text-lum-text-secondary">playertime</p>
          <p class="text-lum-text-secondary">playerweather</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.mooshroom class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.mooshroom class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Mooshroom
              </h3>
              <p class="text-lum-text-secondary">350 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">8 Creative Plots</p>
          <p class="text-lum-text-secondary">/rest</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">keepinventory</p>
          <p class="text-lum-text-secondary">keeplevel</p>
          <p class="text-lum-text-secondary">nohunger</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.glowSquid class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.glowSquid class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Glow Squid
              </h3>
              <p class="text-lum-text-secondary">550 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">4 Homes</p>
          <p class="text-lum-text-secondary">9 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p class="text-lum-text-secondary">changebiome</p>
          <p class="text-lum-text-secondary">noenderpearl</p>
          <p class="text-lum-text-secondary">noflight</p>
          <p class="text-lum-text-secondary">ownerfly</p>
          <p class="text-lum-text-secondary">ownermemberfly (/fly in claims)</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.ocelot class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.ocelot class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Ocelot</h3>
              <p class="text-lum-text-secondary">800 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">10 Creative Plots</p>
          <p class="text-lum-text-secondary">/nick formatting</p>
          <p class="text-lum-text-secondary">/enderchest</p>
          <p class="text-lum-text-secondary">/condense</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.allay class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.allay class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">Allay</h3>
              <p class="text-lum-text-secondary">1500 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">8 Homes</p>
          <p class="text-lum-text-secondary">12 Creative Plots</p>
          <p class="text-lum-text-secondary">Image Maps</p>
          <p class="text-lum-text-secondary">/speed</p>
          <p class="text-lum-text-secondary">/stack</p>
        </div>
        <div class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!">
          <Ranks.bee class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
          <div class="flex items-center gap-4">
            <Ranks.sniffer class="h-auto w-12" />
            <div>
              <h3 class="flex items-center gap-2 text-2xl font-bold">
                Sniffer
              </h3>
              <p class="text-lum-text-secondary">2000 votes</p>
            </div>
          </div>
          <h4>Perks</h4>
          <p class="text-lum-text-secondary">14 Creative Plots</p>
          <p class="text-lum-text-secondary">/ranknick (Custom Rank)</p>
        </div>
      </div>
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {paidRanks.map((rank) => {
          const Icon = rank.icon;
          return (
            <Link
              key={rank.name}
              href="/store"
              class="lum-card lum-grad-bg-lum-card-bg relative overflow-clip duration-200!"
            >
              <Icon class="absolute inset-0 -z-1 h-full w-full scale-150 object-cover opacity-20 blur-xl saturate-200" />
              <div class="flex items-center gap-4">
                <Icon class="h-auto w-12" />
                <div>
                  <h3 class="flex items-center gap-2 text-2xl font-bold">
                    {rank.name}
                  </h3>
                  <p class="text-lum-text-secondary">{rank.pricing}</p>
                  <p class="text-lum-text-secondary">Click to learn more, there are too many perks to list here!</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
});
