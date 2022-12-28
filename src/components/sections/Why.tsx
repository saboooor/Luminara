import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="mx-auto backdrop-blur-2xl bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
      <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-10 xl:p-16 items-center justify-center" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
        <h1 class="mb-8 sm:mb-16">
          Why <span class="text-red-400">Nether Depths?</span>
        </h1>
        <div class="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 class="text-xl sm:text-2xl mb-4">Quick Updates</h2>
            <p class="text-lg font-normal">We're always one of the first to update our Minecraft version and we're planning to update to 1.20 once it is released as soon as possible!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-4">Friendly Community</h2>
            <p class="text-lg font-normal">Our community is friendly, helpful, and fun! There are so many memories to create in this server.</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-4">Bedrock-Compatible</h2>
            <p class="text-lg font-normal">On the go? No problem!</p>
            <p class="text-lg font-normal">You can join on Minecraft Bedrock Edition!</p>
            <p class="text-lg font-normal">IP: play.netherdepths.com PORT: 19132</p>
          </div>
        </div>
      </div>
    </section>
  );
});