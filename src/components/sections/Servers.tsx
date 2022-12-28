import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="mx-auto backdrop-blur-2xl bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
      <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-10 xl:p-16 items-center justify-center">
        <h1 class="mb-8 sm:mb-16">
          Experiences
        </h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Survival</h2>
            <p class="text-sm font-normal mb-4">Do /server Survival to join!</p>
            <p class="text-lg font-normal mb-2">Play the Main Survival Server</p>
            <p class="text-lg font-normal mb-2">Slimefun, Vehicles, Spawners, Aurelium Skills, and more!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Zen</h2>
            <p class="text-sm font-normal mb-4">Do /server Zen to join!</p>
            <p class="text-lg font-normal mb-2">A less chaotic version of Survival</p>
            <p class="text-lg font-normal mb-2">No game-changing plugins, beautiful biome / structure generation, and more!</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Minigames</h2>
            <p class="text-sm font-normal mb-4">Do /warp Minigames in Survival to join!</p>
            <p class="text-lg font-normal mb-2">Play various minigames with your friends or the community</p>
            <p class="text-lg font-normal mb-2">Spleef, Sumo, Elytra Run, and Parkour</p>
          </div>
          <div>
            <h2 class="text-xl sm:text-2xl mb-2">Creative</h2>
            <p class="text-sm font-normal mb-4">Do /server Creative to join!</p>
            <p class="text-lg font-normal mb-2">Build things with nothing interrupting you, useful if you want something peaceful to get things off your mind, or test things</p>
          </div>
        </div>
      </div>
    </section>
  );
});