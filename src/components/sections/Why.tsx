import { component$ } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-8">
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Why <span class="text-pink-400">Luminara SMP?</span>
      </h1>
      <div class="grid lg:grid-cols-3 gap-5">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Quick Updates</Header>
          <p class="text-lg font-normal">We're always one of the first to update our Minecraft version and we're planning to update to 1.22 once it is released as soon as possible!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Friendly Community</Header>
          <p class="text-lg font-normal">Our community is friendly, helpful, and fun! There are so many memories to create in this server.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Bedrock-Compatible</Header>
          <p class="text-lg font-normal">On the go? No problem!</p>
          <p class="text-lg font-normal">You can join on Minecraft Bedrock Edition!</p>
          <p class="text-lg font-normal">IP: mc.luminescent.dev PORT: 19132</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header subheader="Play the Main Survival Server">Survival</Header>
          <p class="text-lg font-normal">Vehicles, Aurelium Skills, beautiful world gen, and more!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header subheader="/warp minigames">Minigames</Header>
          <p class="text-lg font-normal">Play various minigames with your friends or the community</p>
          <p class="text-lg font-normal">Spleef, Sumo, Elytra Run, and Parkour</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header subheader="/warp creative">Creative</Header>
          <p class="text-lg font-normal">Build with no interruption, useful if you want something peaceful or if you want to test something</p>
        </div>
      </div>
    </section>
  );
});