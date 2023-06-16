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
      <div class="p-10 sm:p-16 drop-shadow-xl rounded-xl text-orange-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Vote for <span class="text-red-500">Nether Depths!</span>
        </h1>
        <p class="mb-6 shadow-outline">
          Hold CTRL while clicking to open each site in multiple tabs
        </p>
        <p class="mb-6 shadow-outline">
          The blue buttons do not give any reward and are purely a way to support Nether Depths :)
        </p>
        <div class="mt-6 mb-12 flex flex-wrap gap-3 justify-center">
          <a href="https://bit.ly/NetherVote-MCSL" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSL
          </a>
          <a href="https://bit.ly/NetherVote-MCSO" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSO
          </a>
          <a href="https://bit.ly/NetherVote-MCSN" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSN
          </a>
          <a href="https://bit.ly/NetherVote-MCMP" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCMP
          </a>
          <a href="https://bit.ly/NetherVote-MCPS" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCPS
          </a>
          <a href="https://bit.ly/NetherVote-TMCS" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TMCS
          </a>
          <a href="https://bit.ly/NetherVote-CF" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            CurseForge
          </a>
          <a href="https://bit.ly/NetherVote-SMCN" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            SMCN
          </a>
          <a href="https://bit.ly/NetherVote-MCSH" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            MCSH
          </a>
          <a href="https://bit.ly/NetherVote-PMC"  class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            PMC
          </a>
          <a href="https://bit.ly/NetherVote-TOPG" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TopG
          </a>
          <a href="https://top.gg/servers/865519986806095902/vote" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Top.gg
          </a>
        </div>

      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Vote',
  meta: [
    {
      name: 'description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
    {
      name: 'og:description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
  ],
};
