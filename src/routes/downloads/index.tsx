import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useClientEffect$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(50px)';
    backDrop.style.transform = `scale(1.5)`;
  })

  return (
    <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100vh - 64px);">
      <div class="p-10 sm:p-16 drop-shadow-xl rounded-xl text-orange-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <h1 class="font-bold text-3xl sm:text-5xl mb-3" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
          World Downloads
        </h1>
        <p class="mb-6">
          Want to download old Nether Depths worlds? you're at the right place!
        </p>
        <div class="mt-6 mb-12 grid lg:grid-cols-2 gap-3 justify-center">
          <a href="https://mega.nz/file/6hNSkRTR#eIfUUm4EdQgcKfJSDOGMEgTMcwfg6zZ6NdWoSMTslNQ" class="flex transition duration-200 rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Jul 13 2020 Reset | 1.15 - 232 MB
          </a>
          <a href="https://mega.nz/file/Wx1kXZjR#sCO1TYkOupuYvRivRrho4NvRWTIn2cP8erGmVP2pkEA" class="flex transition duration-200 rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Feb 3 2021 Reset | 1.16 - 712 MB
          </a>
          <a href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k" class="flex transition duration-200 rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            May 26 2022 Reset | 1.18 - 1.1 GB
          </a>
          <a href="https://mega.nz/file/34klnLCY#3-KFSVDcwBrBdH998AEb1rFyjxfOGAen5jlihgBQp3k" class="flex transition duration-200 rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border-2 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Jan 20 2023 Slimefun Shutdown | 1.19 - 3.3 GB
          </a>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Vote',
};
