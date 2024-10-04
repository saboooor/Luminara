import { component$ } from '@builder.io/qwik';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-8">
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Features
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Dispenser Tools</Header>
          <p class="text-lg font-normal mb-2">Wanna break things but are too lazy to do it yourself? Make dispensers do them for you, put a tool in a dispenser to break blocks in front of it!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>AngelChest</Header>
          <p class="text-lg font-normal mb-2">When you die, your items are added into a chest at your death location. You will be given a map to locate your death location. You can also do /actp to tp there!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>ChestShop</Header>
          <p class="text-lg font-normal mb-4">Sell anything for any price with Chest Shops! You can sell at your own custom warp with /iwarp create or at /warp shops!</p>
          <a href="https://dev.bukkit.org/projects/chestshop#title-1-1" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
              Learn How...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Rideable Mobs</Header>
          <p class="text-lg font-normal mb-2">You can ride any of the select mobs with a special token you can get from vote crates! Including flying glow squids, fishes, bees, and dogs/cats! Whichever one you prefer.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Teleportable Mobs</Header>
          <p class="text-lg font-normal mb-2">You can teleport any rideable mob with you while riding it! Useful if you want to transport villagers in boats.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Community Server</Header>
          <p class="text-lg font-normal mb-4">Please join the Discord server for important updates! All announcements are there.</p>
          <a href="/discord" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
              Discord
          </a>
        </div>
        {/*
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Vote Crates</Header>
          <p class="text-lg font-normal mb-4">Get crate keys for crates that give you many different rewards like armor, money, and more!</p>
          <a href="/vote" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
              Vote to get them!
          </a>
        </div>
        */}
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Sit Anywhere</Header>
          <p class="text-lg font-normal mb-2">Sit, lay or crawl anywhere with /sit, /crawl, and /lay. You can also right click stairs with a free hand to sit!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Claims</Header>
          <p class="text-lg font-normal mb-2">Claim your base to avoid grief! How? Just take a golden shovel and mark the corners! You can also play around with various claim flags with /gpflags</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Jobs</Header>
          <p class="text-lg font-normal mb-2">Do various jobs to earn money with /jobs and get money from doing different actions in the server!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Donation Perks</Header>
          <p class="text-lg font-normal mb-4">You can donate to get some perks like /stack, /condense, custom armor stands, and more!</p>
          <a href="https://netherdepths.tebex.io" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
            Learn More...
          </a>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Marriage</Header>
          <p class="text-lg font-normal mb-2">Love someone so much that you want to marry them in the server? Marry them with /marry [name]!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>DrSleep</Header>
          <p class="text-lg font-normal mb-2">Easily skip the night with the need of only 1 player to sleep! Want to keep the night? do /nosleep!</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200">
          <Header>Aurelium Skills</Header>
          <p class="text-lg font-normal mb-2">Earn experience in different aspects of Minecraft and get special abilities!</p>
        </div>
      </div>
    </section>
  );
});