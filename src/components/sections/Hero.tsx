import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { ChevronDown, LogoDiscord } from 'qwik-ionicons';

export default component$(() => {
  return (
    <section class="flex items-center pb-10 justify-center text-center" style="min-height: calc(100lvh - 64px);">
      <div class="radial-blur" />
      <div class="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl z-10 shadow-outline">
        <div class="font-bold text-orange-100 text-3xl sm:text-5xl mb-6">
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
          catch (err) {
            copyResponse.innerText=`Failed to copy ${text}\n${err}`;
          }
        }}>
          <img class="z-10 mb-2" width={612} height={74} src="https://api.loohpjames.com/serverbanner.png?ip=play.netherdepths.com;backgroundurl=transparent;width=612" alt="Nether Depths" />
          <span class="uppercase text-sm" id="copy">Click to copy IP (1.20)</span>
        </div>
        <div class="mt-6 grid sm:flex gap-3 justify-center">
          <Link href="/discord" class="flex gap-4 transition font-bold text-indigo-400 md:text-lg whitespace-nowrap">
            <LogoDiscord width="24" class="fill-current" /> Join the Discord Server!
          </Link>
        </div>
      </div>
      <div class="absolute bottom-8 cursor-pointer flex gap-4 items-center font-bold text-white md:text-lg z-10 animate-bounce shadow-outline" onClick$={() => {
        document.getElementById('start')?.scrollIntoView();
      }}>
        <ChevronDown width="24" class="fill-current" /> Learn More
      </div>
    </section>
  );
});