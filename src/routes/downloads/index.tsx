import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col justify-center gap-8" style="min-height: calc(100lvh - 64px);">
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Downloads
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Want to download old Nether Depths worlds? you're at the right place!
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="https://mega.nz/file/6hNSkRTR#eIfUUm4EdQgcKfJSDOGMEgTMcwfg6zZ6NdWoSMTslNQ" class="lum-btn">
          Jul 13 2020 Reset | 1.15 - 232 MB
        </a>
        <a href="https://mega.nz/file/Wx1kXZjR#sCO1TYkOupuYvRivRrho4NvRWTIn2cP8erGmVP2pkEA" class="lum-btn">
          Feb 3 2021 Reset | 1.16 - 712 MB
        </a>
        <a href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k" class="lum-btn">
          May 26 2022 Reset | 1.18 - 1.1 GB
        </a>
        <a href="https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE" class="lum-btn">
          Jan 20 2023 Slimefun Shutdown | 1.19 - 3.3 GB
        </a>
        <a href="https://mega.nz/file/blNl0ZiB#h3NLZlB0GYeyrnrvWZzi9DZiLrjryJ1b3GZhIWP0ctE" class="lum-btn">
          Jun 13 2023 Zen Reset | 1.19 - 134 MB
        </a>
        <a href="https://mega.nz/file/mtcR3CpQ#-V8MD-7llQsdodsCMsyV5wkPIUlnHToHyxWZ-bdfZww" class="lum-btn">
          Jul 6 2023 Shutdown | 1.20 - 134 MB
        </a>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Downloads',
  meta: [
    {
      name: 'description',
      content: 'Download old Nether Depths worlds here. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content: 'Download old Nether Depths worlds here. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
