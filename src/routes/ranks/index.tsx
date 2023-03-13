import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { ranks } from '~/components/ranks';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(50px)';
    backDrop.style.transform = 'scale(1.5)';
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center drop-shadow-xl">
        <h1 class="mb-4">
          <span class="text-red-400">Nether Depths</span> Ranks
        </h1>
        <p class="mb-6 sm:mb-14 font-normal text-xl">
          Different ranks give different perks!
        </p>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-5">
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Player</h2>
            <p class="text-center">Starter Rank</p>
            <picture>
              <source srcSet={ranks.steve.avif} type="image/avif" />
              <source srcSet={ranks.steve.webp} type="image/webp" />
              <img
                src={ranks.steve.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>3 Homes</p>
            <p>1 Creative Plot</p>
            <p>1 Auction House Slot</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>noenter</p>
            <p>noenterplayer</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Skeleton</h2>
            <p class="text-center">6 Votes</p>
            <picture>
              <source srcSet={ranks.skeleton.avif} type="image/avif" />
              <source srcSet={ranks.skeleton.webp} type="image/webp" />
              <img
                src={ranks.skeleton.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>6 Homes</p>
            <p>2 Creative Plots</p>
            <p>/suicide</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>trappeddestination</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Enderman</h2>
            <p class="text-center">12 Votes</p>
            <picture>
              <source srcSet={ranks.enderman.avif} type="image/avif" />
              <source srcSet={ranks.enderman.webp} type="image/webp" />
              <img
                src={ranks.enderman.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>9 Homes</p>
            <p>3 Creative Plots</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>nofluidflow</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Blaze</h2>
            <p class="text-center">24 Votes</p>
            <picture>
              <source srcSet={ranks.blaze.avif} type="image/avif" />
              <source srcSet={ranks.blaze.webp} type="image/webp" />
              <img
                src={ranks.blaze.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>12 Homes</p>
            <p>4 Creative Plots</p>
            <p>/nick</p>
            <p>/hat</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>nofirespread</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Strider</h2>
            <p class="text-center">48 Votes</p>
            <picture>
              <source srcSet={ranks.strider.avif} type="image/avif" />
              <source srcSet={ranks.strider.webp} type="image/webp" />
              <img
                src={ranks.strider.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>15 Homes</p>
            <p>5 Creative Plots</p>
            <p>/craft</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>noitemdrop</p>
            <p>nofiredamage</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Hoglin</h2>
            <p class="text-center">84 Votes</p>
            <picture>
              <source srcSet={ranks.hoglin.avif} type="image/avif" />
              <source srcSet={ranks.hoglin.webp} type="image/webp" />
              <img
                src={ranks.hoglin.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>18 Homes</p>
            <p>6 Creative Plots</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>exitmessage</p>
            <p>entermessage</p>
            <p>noelytra</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Axolotl</h2>
            <p class="text-center">148 Votes</p>
            <picture>
              <source srcSet={ranks.axolotl.avif} type="image/avif" />
              <source srcSet={ranks.axolotl.webp} type="image/webp" />
              <img
                src={ranks.axolotl.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
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
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Warden</h2>
            <p class="text-center">260 Votes</p>
            <picture>
              <source srcSet={ranks.warden.avif} type="image/avif" />
              <source srcSet={ranks.warden.webp} type="image/webp" />
              <img
                src={ranks.warden.placeholder}
                class="w-full p-6"
                alt="Warden Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>24 Homes</p>
            <p>8 Creative Plots</p>
            <p>/rest</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>keepinventory</p>
            <p>keeplevel</p>
            <p>nohunger</p>
          </div>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Glow Squid</h2>
            <p class="text-center">456 Votes</p>
            <picture>
              <source srcSet={ranks.glowSquid.avif} type="image/avif" />
              <source srcSet={ranks.glowSquid.webp} type="image/webp" />
              <img
                src={ranks.glowSquid.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>27 Homes</p>
            <p>9 Creative Plots</p>
            <p>/ranknick (Custom Rank)</p>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
            <p>changebiome</p>
            <p>noenderpearl</p>
            <p>noflight</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Ocelot</h2>
            <p class="text-center">796 Votes</p>
            <picture>
              <source srcSet={ranks.ocelot.avif} type="image/avif" />
              <source srcSet={ranks.ocelot.webp} type="image/webp" />
              <img
                src={ranks.ocelot.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>30 Homes</p>
            <p>10 Creative Plots</p>
            <p>/nick formatting</p>
            <p>/enderchest</p>
            <p>/condense</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">Allay</h2>
            <p class="text-center">1394 Votes</p>
            <picture>
              <source srcSet={ranks.allay.avif} type="image/avif" />
              <source srcSet={ranks.allay.webp} type="image/webp" />
              <img
                src={ranks.allay.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p>36 Homes</p>
            <p>12 Creative Plots</p>
            <p>Image Maps</p>
            <p>/speed</p>
            <p>/stack</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">VIP</h2>
            <p class="text-center">$3.49/mo OR $8.89/quarter</p>
            <picture>
              <source srcSet={ranks.enderDragon.avif} type="image/avif" />
              <source srcSet={ranks.enderDragon.webp} type="image/webp" />
              <img
                src={ranks.enderDragon.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p class="mb-6">Too much to describe in this tiny little box!</p>
            <a href="https://netherdepths.tebex.io/" class="transition duration-200 rounded-xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Learn More...
            </a>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">MVP</h2>
            <p class="text-center">$5.49/mo OR $14.89/quarter</p>
            <picture>
              <source srcSet={ranks.wither.avif} type="image/avif" />
              <source srcSet={ranks.wither.webp} type="image/webp" />
              <img
                src={ranks.wither.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p class="mb-6">Too much to describe in this tiny little box!</p>
            <a href="https://netherdepths.tebex.io/" class="transition duration-200 rounded-xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Learn More...
            </a>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl sm:text-2xl text-center font-bold">GOAT</h2>
            <p class="text-center">$7.69/mo OR $20.49/quarter</p>
            <picture>
              <source srcSet={ranks.flowerCow.avif} type="image/avif" />
              <source srcSet={ranks.flowerCow.webp} type="image/webp" />
              <img
                src={ranks.flowerCow.placeholder}
                class="w-full p-6"
                alt="Rank Icon"
                loading="eager"
                decoding="async"
              />
            </picture>
            <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
            <p class="mb-6">Too much to describe in this tiny little box!</p>
            <a href="https://netherdepths.tebex.io/" class="transition duration-200 rounded-xl bg-red-700/80 hover:bg-red-700 px-6 py-3 font-bold text-red-100 text-lg whitespace-nowrap">
              Learn More...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Ranks',
};
