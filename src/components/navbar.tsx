import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="z-20 fixed top-1 sm:top-4 w-screen">
      <div class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 backdrop-blur-lg bg-black/50 rounded-2xl">
        <div class="relative flex h-20 items-center justify-between">
          <div class="flex flex-1 items-center sm:items-stretch justify-start">
            <a href="/" class="transition duration-200 hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl p-2 flex items-center">
            <img class="h-12 hidden sm:flex md:hidden lg:flex" src={`/logo.png`} alt="Nether Depths" />
            <img class="h-12 flex sm:hidden md:flex lg:hidden" src={`/icon.png`} alt="Nether Depths" />
          </a>
          </div>
          <div class="hidden md:flex flex-1 space-x-2 items-center justify-end md:items-stretch">
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">Announcements</a>
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">Rules</a>
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">Vote</a>
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">Ranks</a>
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">Store</a>
            <a href="/" class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">More</a>
          </div>
          <div class="flex md:hidden flex-1 items-center justify-end md:items-stretch">
            <button type="button" id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="pointer-events-auto inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:text-white focus:outline-none focus:bg-red-600/20" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden px-2 pb-6" id="mobile-menu">
          <div class="space-y-1">
            <a href="/forks" class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
              Announcements
            </a>
            <a href="/resume" class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
              Rules
            </a>
            <a href="/filehost" class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
              Vote
            </a>
            <a href="/zoo" class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
              Ranks
            </a>
            <a href="https://github.com/saboooor" class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
              Store
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
});
