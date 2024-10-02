import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(32px)';
    backDrop.style.transform = 'scale(1.32)';
  });

  return (
    <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100lvh - 64px);">
      <div class="p-10 sm:p-16 drop-shadow-xl rounded-xl text-orange-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Downloads
        </h1>
        <p class="mb-6 shadow-outline">
          Want to download old Nether Depths worlds or the resource pack? you're at the right place!
        </p>
        <div class="mt-6 mb-12 grid lg:grid-cols-2 gap-3 justify-center">
          <a href="https://github.com/saboooor/Nether-Depths/raw/main/Resource%20Packs/NDJava/NDJava.zip" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Resource Pack
          </a>
          <a href="https://mega.nz/file/6hNSkRTR#eIfUUm4EdQgcKfJSDOGMEgTMcwfg6zZ6NdWoSMTslNQ" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Jul 13 2020 Reset | 1.15 - 232 MB
          </a>
          <a href="https://mega.nz/file/Wx1kXZjR#sCO1TYkOupuYvRivRrho4NvRWTIn2cP8erGmVP2pkEA" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Feb 3 2021 Reset | 1.16 - 712 MB
          </a>
          <a href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            May 26 2022 Reset | 1.18 - 1.1 GB
          </a>
          <a href="https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Jan 20 2023 Slimefun Shutdown | 1.19 - 3.3 GB
          </a>
          <a href="https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE" class="flex transition rounded-xl bg-luminescent-600/80 hover:bg-luminescent-600 border-luminescent-600 px-6 py-3 font-bold text-luminescent-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Jun 13 2023 Zen Reset | 1.19 - 134 MB
          </a>
        </div>
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
