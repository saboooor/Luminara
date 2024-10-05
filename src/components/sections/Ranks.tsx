import { component$ } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';
import * as Ranks from '~/components/ranks';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col gap-8">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Ranks
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Different ranks give different perks!
      </p>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-5">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="Starter rank">Player</Header>
          <Ranks.steve class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>3 Homes</p>
          <p>1 Creative Plot</p>
          <p>1 Auction House Slot</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>noenter</p>
          <p>noenterplayer</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="6 votes">Skeleton</Header>
          <Ranks.skeleton class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>6 Homes</p>
          <p>2 Creative Plots</p>
          <p>/suicide</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>trappeddestination</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="12 votes">Enderman</Header>
          <Ranks.enderman class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>9 Homes</p>
          <p>3 Creative Plots</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>nofluidflow</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="24 votes">Blaze</Header>
          <Ranks.blaze class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>12 Homes</p>
          <p>4 Creative Plots</p>
          <p>/nick</p>
          <p>/hat</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>nofirespread</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="48 votes">Strider</Header>
          <Ranks.strider class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>15 Homes</p>
          <p>5 Creative Plots</p>
          <p>/craft</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>noitemdrop</p>
          <p>nofiredamage</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="84 votes">Hoglin</Header>
          <Ranks.hoglin class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>18 Homes</p>
          <p>6 Creative Plots</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>exitmessage</p>
          <p>entermessage</p>
          <p>noelytra</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="148 votes">Axolotl</Header>
          <Ranks.axolotl class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>21 Homes</p>
          <p>7 Creative Plots</p>
          <p>/ptime</p>
          <p>/pweather</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>novehicle</p>
          <p>playertime</p>
          <p>playerweather</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="260 votes">Warden</Header>
          <Ranks.warden class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>24 Homes</p>
          <p>8 Creative Plots</p>
          <p>/rest</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>keepinventory</p>
          <p>keeplevel</p>
          <p>nohunger</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="456 votes">Glow Squid</Header>
          <Ranks.glowSquid class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>27 Homes</p>
          <p>9 Creative Plots</p>
          <p>/ranknick (Custom Rank)</p>
          <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
          <p>changebiome</p>
          <p>noenderpearl</p>
          <p>noflight</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="796 votes">Ocelot</Header>
          <Ranks.ocelot class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>30 Homes</p>
          <p>10 Creative Plots</p>
          <p>/nick formatting</p>
          <p>/enderchest</p>
          <p>/condense</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="1394 votes">Allay</Header>
          <Ranks.allay class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>36 Homes</p>
          <p>12 Creative Plots</p>
          <p>Image Maps</p>
          <p>/speed</p>
          <p>/stack</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="2440 votes">Sniffer</Header>
          <p class="text-center">2440 Votes</p>
          <Ranks.sniffer class="py-10" />
          <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
          <p>40 Homes</p>
          <p>14 Creative Plots</p>
        </div>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="$3/mo / $8/3mo / $30/yr">VIP</Header>
          <Ranks.enderDragon class="py-10" />
          <a href="https://netherdepths.tebex.io/category/ranks" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="$5/mo / $14/3mo / $54/yr">MVP</Header>
          <Ranks.wither class="py-10" />
          <a href="https://netherdepths.tebex.io/category/mvp" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header subheader="$7/mo / $20/3mo / $78/yr">G.O.A.T</Header>
          <Ranks.moobloom class="py-10" />
          <a href="https://netherdepths.tebex.io/category/goat" target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
      </div>
    </section>
  );
});