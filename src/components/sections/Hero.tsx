import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { ChevronDownIcon } from 'qwik-feather-icons';

export default component$(() => {
  return (
    <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100vh - 64px);">
      <div class="p-10 sm:p-16 backdrop-blur-2xl rounded-xl bg-black/30 outline outline-2 outline-black/30 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div class="font-bold text-orange-100 text-3xl sm:text-5xl mb-6" style="filter: drop-shadow(0 2rem 2rem rgba(239, 68, 68, 0.5));">
          <h1 class="mb-3">
            Surpass the <span class="text-red-400">limits</span>
          </h1>
          <h1>
            of the <span class="text-red-500">Nether.</span>
          </h1>
        </div>
        <div class="cursor-pointer text-gray-200" onClick$={async () => {
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
        </div>
        <div class="mt-6 grid sm:flex gap-3 justify-center">
          <div class="cursor-pointer flex gap-4 items-center transition duration-200 rounded-xl bg-red-600/80 hover:bg-red-600 px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap" onClick$={() => {
            document.getElementById('start')?.scrollIntoView();
          }}>
            <ChevronDownIcon /> Get Started!
          </div>
          <Link href="/discord" class="flex transition duration-200 rounded-xl bg-indigo-900/80 hover:bg-indigo-900 px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap">
            Join the Discord Server!
          </Link>
        </div>
      </div>
    </section>
  );
});