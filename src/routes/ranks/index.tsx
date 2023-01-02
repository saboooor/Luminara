import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { ranks } from '~/components/ranks';

export default component$(() => {
  return (
    <>
      <section class="mx-auto backdrop-blur-2xl bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16 mt-24">
        <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-10 xl:p-16 items-center justify-center">
          <div class="mb-8 sm:mb-16">
            <h1 class="mb-2">
              Nether Depths Ranks
            </h1>
            <p class="font-normal text-xl">
              Different ranks give different perks!
            </p>
          </div>
          <div class="grid gap-10">
            <div class="grid gap-10 lg:grid-cols-4">
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Player</h2>
                <p class="text-center">Starter Rank</p>
                <picture>
                  <source srcSet={ranks.steve.avif} type="image/avif" />
                  {/* <source srcSet={ranks.steve.webp} type="image/webp" /> */}
                  <img
                    src={ranks.steve.placeholder}
                    class="w-full"
                    alt="Hero Background"
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
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Skeleton</h2>
                <p class="text-center">6 Votes</p>
                <picture>
                  <source srcSet={ranks.skeleton.avif} type="image/avif" />
                  {/* <source srcSet={ranks.skeleton.webp} type="image/webp" /> */}
                  <img
                    src={ranks.skeleton.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Enderman</h2>
                <p class="text-center">12 Votes</p>
                <picture>
                  <source srcSet={ranks.enderman.avif} type="image/avif" />
                  {/* <source srcSet={ranks.enderman.webp} type="image/webp" /> */}
                  <img
                    src={ranks.enderman.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Blaze</h2>
                <p class="text-center">24 Votes</p>
                <picture>
                  <source srcSet={ranks.blaze.avif} type="image/avif" />
                  {/* <source srcSet={ranks.blaze.webp} type="image/webp" /> */}
                  <img
                    src={ranks.blaze.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Strider</h2>
                <p class="text-center">48 Votes</p>
                <picture>
                  <source srcSet={ranks.strider.avif} type="image/avif" />
                  {/* <source srcSet={ranks.strider.webp} type="image/webp" /> */}
                  <img
                    src={ranks.strider.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Hoglin</h2>
                <p class="text-center">84 Votes</p>
                <picture>
                  <source srcSet={ranks.hoglin.avif} type="image/avif" />
                  {/* <source srcSet={ranks.hoglin.webp} type="image/webp" /> */}
                  <img
                    src={ranks.hoglin.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Axolotl</h2>
                <p class="text-center">148 Votes</p>
                <picture>
                  <source srcSet={ranks.axolotl.avif} type="image/avif" />
                  {/* <source srcSet={ranks.axolotl.webp} type="image/webp" /> */}
                  <img
                    src={ranks.axolotl.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Warden</h2>
                <p class="text-center">260 Votes</p>
                <picture>
                  <source srcSet={ranks.warden.avif} type="image/avif" />
                  {/* <source srcSet={ranks.warden.webp} type="image/webp" /> */}
                  <img
                    src={ranks.warden.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Glow Squid</h2>
                <p class="text-center">456 Votes</p>
                <picture>
                  <source srcSet={ranks.glowSquid.avif} type="image/avif" />
                  {/* <source srcSet={ranks.glowSquid.webp} type="image/webp" /> */}
                  <img
                    src={ranks.glowSquid.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Claim Flags</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Ocelot</h2>
                <p class="text-center">796 Votes</p>
                <picture>
                  <source srcSet={ranks.ocelot.avif} type="image/avif" />
                  {/* <source srcSet={ranks.ocelot.webp} type="image/webp" /> */}
                  <img
                    src={ranks.ocelot.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">Allay</h2>
                <p class="text-center">1394 Votes</p>
                <picture>
                  <source srcSet={ranks.allay.avif} type="image/avif" />
                  {/* <source srcSet={ranks.allay.webp} type="image/webp" /> */}
                  <img
                    src={ranks.allay.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">VIP</h2>
                <p class="text-center">$3.49/mo OR $8.89/quarter</p>
                <picture>
                  <source srcSet={ranks.enderDragon.avif} type="image/avif" />
                  {/* <source srcSet={ranks.enderDragon.webp} type="image/webp" /> */}
                  <img
                    src={ranks.enderDragon.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">MVP</h2>
                <p class="text-center">$5.49/mo OR $14.89/quarter</p>
                <picture>
                  <source srcSet={ranks.wither.avif} type="image/avif" />
                  {/* <source srcSet={ranks.wither.webp} type="image/webp" /> */}
                  <img
                    src={ranks.wither.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
              </div>
              <div class="text-base font-normal">
                <h2 class="text-xl sm:text-2xl text-center font-bold">GOAT</h2>
                <p class="text-center">$7.69/mo OR $20.49/quarter</p>
                <picture>
                  <source srcSet={ranks.copperGolem.avif} type="image/avif" />
                  {/* <source srcSet={ranks.copperGolem.webp} type="image/webp" /> */}
                  <img
                    src={ranks.copperGolem.placeholder}
                    class="w-full"
                    alt="Hero Background"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <h2 class="text-lg sm:text-xl my-2 font-bold">Perks</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Rules',
};
