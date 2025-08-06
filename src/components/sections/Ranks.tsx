import { component$ } from '@builder.io/qwik';
import * as Ranks from '~/components/ranks';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Ranks
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Different ranks give different perks!
      </p>
      <div class="grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="my-0! flex items-center gap-2">
            Player
          </h3>
          <p>
            Starter Rank
          </p>
          <Ranks.steve class="py-10" />
          <h4>Perks</h4>
          <p>3 Homes</p>
          <p>1 Creative Plot</p>
          <p>1 Auction House Slot</p>
          <h4>Claim Flags</h4>
          <p>noenter</p>
          <p>noenterplayer</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Skeleton
          </h3>
          <p>
            6 votes
          </p>
          <Ranks.skeleton class="py-10" />
          <h4>Perks</h4>
          <p>6 Homes</p>
          <p>2 Creative Plots</p>
          <p>/suicide</p>
          <h4>Claim Flags</h4>
          <p>trappeddestination</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Enderman
          </h3>
          <p>
            12 votes
          </p>
          <Ranks.enderman class="py-10" />
          <h4>Perks</h4>
          <p>9 Homes</p>
          <p>3 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p>nofluidflow</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Breeze
          </h3>
          <p>
            24 votes
          </p>
          <Ranks.blaze class="py-10" />
          <h4>Perks</h4>
          <p>12 Homes</p>
          <p>4 Creative Plots</p>
          <p>/nick</p>
          <p>/hat</p>
          <h4>Claim Flags</h4>
          <p>nofirespread</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Strider
          </h3>
          <p>
            48 votes
          </p>
          <Ranks.strider class="py-10" />
          <h4>Perks</h4>
          <p>15 Homes</p>
          <p>5 Creative Plots</p>
          <p>/craft</p>
          <h4>Claim Flags</h4>
          <p>noitemdrop</p>
          <p>nofiredamage</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Armadillo
          </h3>
          <p>
            84 votes
          </p>
          <Ranks.hoglin class="py-10" />
          <h4>Perks</h4>
          <p>18 Homes</p>
          <p>6 Creative Plots</p>
          <h4>Claim Flags</h4>
          <p>exitmessage</p>
          <p>entermessage</p>
          <p>noelytra</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Axolotl
          </h3>
          <p>
            148 votes
          </p>
          <Ranks.axolotl class="py-10" />
          <h4>Perks</h4>
          <p>21 Homes</p>
          <p>7 Creative Plots</p>
          <p>/ptime</p>
          <p>/pweather</p>
          <h4>Claim Flags</h4>
          <p>novehicle</p>
          <p>playertime</p>
          <p>playerweather</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Warden
          </h3>
          <p>
            260 votes
          </p>
          <Ranks.warden class="py-10" />
          <h4>Perks</h4>
          <p>24 Homes</p>
          <p>8 Creative Plots</p>
          <p>/rest</p>
          <h4>Claim Flags</h4>
          <p>keepinventory</p>
          <p>keeplevel</p>
          <p>nohunger</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Glow Squid
          </h3>
          <p>
            456 votes
          </p>
          <Ranks.glowSquid class="py-10" />
          <h4>Perks</h4>
          <p>27 Homes</p>
          <p>9 Creative Plots</p>
          <p>/ranknick (Custom Rank)</p>
          <h4>Claim Flags</h4>
          <p>changebiome</p>
          <p>noenderpearl</p>
          <p>noflight</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Ocelot
          </h3>
          <p>
            796 votes
          </p>
          <Ranks.ocelot class="py-10" />
          <h4>Perks</h4>
          <p>30 Homes</p>
          <p>10 Creative Plots</p>
          <p>/nick formatting</p>
          <p>/enderchest</p>
          <p>/condense</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Allay
          </h3>
          <p>
            1394 votes
          </p>
          <Ranks.allay class="py-10" />
          <h4>Perks</h4>
          <p>36 Homes</p>
          <p>12 Creative Plots</p>
          <p>Image Maps</p>
          <p>/speed</p>
          <p>/stack</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            Sniffer
          </h3>
          <p>
            2440 Votes
          </p>
          <Ranks.sniffer class="py-10" />
          <h4>Perks</h4>
          <p>40 Homes</p>
          <p>14 Creative Plots</p>
        </div>
      </div>
      <div class="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            VIP
          </h3>
          <p>
            $3/mo / $8/3mo / $30/yr
          </p>
          <Ranks.enderDragon class="py-10" />
          <a href="https://luminara.tebex.io/category/ranks" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            MVP
          </h3>
          <p>
            $5/mo / $14/3mo / $54/yr
          </p>
          <Ranks.wither class="py-10" />
          <a href="https://luminara.tebex.io/category/mvp" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out gap-0">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            G.O.A.T
          </h3>
          <p>
            $7/mo / $20/3mo / $78/yr
          </p>
          <Ranks.moobloom class="py-10" />
          <a href="https://luminara.tebex.io/category/goat" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
      </div>
    </section>
  );
});