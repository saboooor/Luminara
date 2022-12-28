import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100vh - 64px);">
        <div class="p-10 backdrop-blur-xl rounded-2xl bg-black/40 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div class="font-bold text-orange-100 text-3xl sm:text-5xl mb-6" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
            <h1 class="mb-3">
              Surpass the <span class="text-red-400">limits</span>
            </h1>
            <h1>
              of the <span class="text-red-500">Nether.</span>
            </h1>
          </div>
          <a class="cursor-pointer text-gray-200/40" onClick$={async () => {
            const copyResponse = document.getElementById('copy')!;
            const text = 'play.netherdepths.com';
            try {
              await navigator.clipboard.writeText(text);
              copyResponse.innerText=`Copied ${text} successfully!`;
            }
            catch(err) {
              copyResponse.innerText=`Failed to copy ${text}\n${err}`;
            }
          }}>
            <img class="z-10 mb-2" width={612} height={74} src="https://api.loohpjames.com/serverbanner.png?ip=play.netherdepths.com;backgroundurl=transparent;width=612" alt="Nether Depths" />
            <span class="uppercase text-sm" id="copy">Click to copy IP</span>
          </a>
          <div class="mt-6 grid sm:flex gap-3 justify-center">
            <div class="shadow">
              <a href="#start" class="flex transition duration-200 rounded-2xl backdrop-blur-lg bg-red-600/80 hover:bg-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-10 md:text-lg whitespace-nowrap">
                Get Started!
              </a>
            </div>
            <div class="shadow">
              <a href="/discord" class="flex transition duration-200 rounded-2xl backdrop-blur-lg bg-indigo-900/80 hover:bg-indigo-900 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-10 md:text-lg whitespace-nowrap">
                Join the Discord Server!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-auto backdrop-blur-lg bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
        <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-12 items-center justify-center" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
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
      <section class="mx-auto backdrop-blur-lg bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
        <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-12 items-center justify-center" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
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
      <section class="mx-auto backdrop-blur-lg bg-black/50 rounded-2xl max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mb-16">
        <div class="font-bold text-orange-100 text-2xl sm:text-3xl mb-6 p-12 items-center justify-center" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
          <h1 class="mb-8 sm:mb-16">
            Features
          </h1>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Custom Terrain</h2>
              <p class="text-lg font-normal mb-2">Tired of boring minecraft generation? Nether Depths has beautiful, big, terrain generation. Go explore!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Custom Structures</h2>
              <p class="text-lg font-normal mb-2">Bored of the old minecraft structures? Nether Depths has bigger, better, cleaner structures. Go explore!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Dispenser Tools</h2>
              <p class="text-lg font-normal mb-2">Wanna break things but are too lazy to do it yourself? Make dispensers do them for you, put a tool in a dispenser to break blocks in front of it!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">AngelChest</h2>
              <p class="text-sm font-normal mb-2">When you die, your items are added into a chest at your death location. You will be given a map to locate your death location. You can also do /actp to tp there!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">ChestShop</h2>
              <p class="text-lg font-normal mb-2">Sell anything for any price with Chest Shops! You can sell at your own custom warp with /iwarp create or at /warp shops!</p>
              <a class="button is-info is-rounded is-outlined" href="https://dev.bukkit.org/projects/chestshop#title-1-1">Learn How...</a>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Rideable Mobs</h2>
              <p class="text-lg font-normal mb-2">You can ride any of the select mobs with a special token you can get from vote crates! Including flying glow squids, fishes, bees, and dogs/cats! Whichever one you prefer.</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Teleportable Mobs</h2>
              <p class="text-lg font-normal mb-2">You can teleport any rideable mob with you while riding it!Useful if you want to transport villagers in boats.</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Community Server</h2>
              <p class="text-lg font-normal mb-2">Please join the Discord or Guilded Server for important updates! All announcements are there.</p>
              <a class="button is-info is-rounded is-outlined" href="./discord">Discord</a>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Vote Crates</h2>
              <p class="text-lg font-normal mb-2">Get crate keys for crates that give you many different rewards like armor, money, and more!</p>
              <a class="button is-info is-rounded is-outlined" href="./vote">Vote here to get them!</a>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Sit Anywhere</h2>
              <p class="text-lg font-normal mb-2">Sit, lay or crawl anywhere with /sit, /crawl, and /lay. You can also right click stairs with a free hand to sit!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Claims</h2>
              <p class="text-lg font-normal mb-2">Claim your base to avoid grief! How? Just take a golden shovel and mark the corners! You can also play around with various claim flags with /gpflags</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">PvPToggle</h2>
              <p class="text-lg font-normal mb-2">Tired of PvPing and don't want others to kill you? Do /pvp off to disable PvP!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Jobs</h2>
              <p class="text-lg font-normal mb-2">Do various jobs to earn money with /jobs and get money from doing different actions in the server!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Custom Music Discs</h2>
              <p class="text-lg font-normal mb-2">Get Custom Music Discs from a Music Disc Crate to jam with your friends at a nearby Jukebox with over 20 different discs!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Donation Perks</h2>
              <p class="text-lg font-normal mb-2">You can donate to get some perks like /stack, /condense, custom armor stands, and more!</p>
              <a class="button is-info is-rounded is-outlined" href="https://netherdepths.tebex.io">Learn More...</a>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Marriage</h2>
              <p class="text-lg font-normal mb-2">Love someone so much that you want to marry them in the server? Marry them with /marry [name]!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">DrSleep</h2>
              <p class="text-lg font-normal mb-2">Easily skip the night with the need of only 1 player to sleep! Want to keep the night? do /nosleep!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Aurelium Skills</h2>
              <p class="text-lg font-normal mb-2">Earn experience in different aspects of Minecraft and get special abilities!</p>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl mb-2">Chat Races</h2>
              <p class="text-lg font-normal mb-2">Earn money for racing others in chat, answering various questions, unscrambling words, and more!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home',
};
