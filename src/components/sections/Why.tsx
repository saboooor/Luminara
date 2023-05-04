import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center">
        <h1 class="mb-6 sm:mb-14 text-center shadow-outline">
          Why <span class="text-red-400">Nether Depths?</span>
        </h1>
        <div class="grid lg:grid-cols-3 gap-5">
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-4">Quick Updates</h2>
            <p class="text-lg font-normal">We're always one of the first to update our Minecraft version and we're planning to update to 1.20 once it is released as soon as possible!</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-4">Friendly Community</h2>
            <p class="text-lg font-normal">Our community is friendly, helpful, and fun! There are so many memories to create in this server.</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-4">Bedrock-Compatible</h2>
            <p class="text-lg font-normal">On the go? No problem!</p>
            <p class="text-lg font-normal">You can join on Minecraft Bedrock Edition!</p>
            <p class="text-lg font-normal">IP: play.netherdepths.com PORT: 19132</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-10">Survival</h2>
            <p class="text-lg font-normal mb-2">Play the Main Survival Server</p>
            <p class="text-lg font-normal mb-2">Vehicles, Aurelium Skills, beautiful world gen, and more!</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-1">Minigames</h2>
            <p class="text-sm font-normal mb-4">/warp minigames</p>
            <p class="text-lg font-normal mb-2">Play various minigames with your friends or the community</p>
            <p class="text-lg font-normal mb-2">Spleef, Sumo, Elytra Run, and Parkour</p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl">
            <h2 class="text-xl sm:text-2xl mb-1">Creative</h2>
            <p class="text-sm font-normal mb-4">/warp creative</p>
            <p class="text-lg font-normal mb-2">Build with no interruption, useful if you want something peaceful or if you want to test something</p>
          </div>
        </div>
      </div>
    </section>
  );
});