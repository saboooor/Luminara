import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

import Logo from '~/images/logo.png?jsx';
import Megaphone from '~/images/icons/megaphone.png?jsx';
import Cart from '~/images/icons/cart.png?jsx';
import Keys from '~/images/icons/keys.png?jsx';
import OpenBook from '~/images/icons/open_book.png?jsx';
import { LogoDiscord, LogoPurpur } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/mc.luminescent.dev');
    const srvdata = await srvjson.json();
    if (!srvdata.online || srvdata.protocol == 1) {
      store.online = false;
    }
    else {
      store.online = true;
      store.players = srvdata.players.online;
      store.version = srvdata.protocol_name;
    }
    const discordjson = await fetch('https://discord.com/api/guilds/865519986806095902/widget.json');
    const discorddata = await discordjson.json();
    store.discordonline = discorddata.presence_count;
  });

  return (
    <>
      <div class="flex flex-col h-[calc(100svh-9rem)]">
        <div class="lg:hidden relative floating max-w-72 mx-auto mb-5">
          <Logo class="w-3/4 mx-auto" />
        </div>
        <div class="sm:grid grid-cols-2 lg:grid-cols-3 gap-10 mx-auto justify-center items-center drop-shadow-2xl ">
          <button onClick$={() => {
            navigator.clipboard.writeText('mc.luminescent.dev').catch(() => {
              const response = document.getElementById('response-desktop') as HTMLParagraphElement;
              response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
              setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
            });
          }} class="hidden sm:flex justify-end gap-5 items-center text-right font-medium group transition-all duration-300 hover:saturate-150">
            <div>
              <p class="text-green-300 font-bold">
                {store.online === null && 'LOADING...'}
                {store.online && `${store.players == 1 ? store.players + ' PLAYER ONLINE - ' : store.players + ' PLAYERS ONLINE - '} ${store.version}`}
                {store.online === false && 'SERVER OFFLINE'}
              </p>
              <div class="h-5 text-sm mt-0.5 overflow-hidden">
                <div class="transition-all duration-300 group-hover:-translate-y-5 group-focus:-translate-y-10">
                  <p>
                    MC.LUMINESCENT.DEV
                  </p>
                  <p>
                    CLICK TO COPY IP
                  </p>
                  <p id="response-desktop">
                    COPIED SUCCESSFULLY
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 transition-all duration-300 group-hover:gap-3">
              <LogoPurpur width={48} class="text-green-300"/>
              <div class="bg-green-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(134 239 172))' }} />
            </div>
          </button>
          <div class="hidden relative lg:flex floating mx-auto w-3/4">
            <Logo class="w-3/4 mx-auto" />
          </div>
          <a href="/discord" class="hidden sm:flex gap-5 items-center font-medium group transition-all duration-300 hover:saturate-150">
            <div class="flex flex-col gap-2 transition-all duration-300 group-hover:gap-3">
              <LogoDiscord width={48} class="text-indigo-300" />
              <div class="bg-indigo-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(165 180 252))' }} />
            </div>
            <div>
              <p class="text-indigo-300 font-bold">
                {store.discordonline === null && 'LOADING...'}
                {store.discordonline && `${store.discordonline} USERS ONLINE`}
              </p>
              <p class="text-sm mt-0.5">
                CLICK TO JOIN
              </p>
            </div>
          </a>
        </div>
        <div class="flex flex-col sm:flex-row flex-1 sm:gap-5 w-full sm:w-3/4 max-w-7xl px-10 sm:px-0 mx-auto justify-between my-10 sm:items-center text-2xl lg:text-3xl hover:text-white drop-shadow-xl">
          <button onClick$={() => {
            navigator.clipboard.writeText('play.aethersmp.com').catch(() => {
              const response = document.getElementById('response-mobile') as HTMLParagraphElement;
              response.textContent = 'FAILED TO COPY';
              setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
            });
          }}  class="sm:hidden flex gap-5 items-center font-medium text-left group transition-all duration-300 hover:saturate-150">
            <div class="flex flex-col gap-2 transition-all duration-300 group-hover:scale-125">
              <LogoPurpur width={48} class="text-green-300" />
              <div class="bg-green-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(134 239 172))' }} />
            </div>
            <div>
              <p class="text-green-300 font-bold text-sm">
                {store.online === null && 'LOADING...'}
                {store.online && `${store.players} PLAYERS ONLINE - ${store.version}`}
                {store.online === false && 'SERVER OFFLINE'}
              </p>
              <div class="h-4 text-xs mt-0.5 overflow-hidden">
                <div class="transition-all duration-300 group-hover:-translate-y-4 group-focus:-translate-y-8">
                  <p>
                    PLAY.AETHERSMP.COM
                  </p>
                  <p>
                    CLICK TO COPY IP
                  </p>
                  <p id="response-mobile">
                    COPIED SUCCESSFULLY
                  </p>
                </div>
              </div>
            </div>
          </button>
          <a href="/discord" class="sm:hidden flex gap-5 items-center font-medium group transition-all duration-300 hover:saturate-150">
            <div class="flex flex-col gap-2 transition-all duration-300 group-hover:scale-125">
              <LogoDiscord width={48} class="text-indigo-300" />
              <div class="bg-indigo-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(165 180 252))' }} />
            </div>
            <div>
              <p class="text-indigo-300 font-bold text-sm">
                {store.discordonline === null && 'LOADING...'}
                {store.discordonline && `${store.discordonline} USERS ONLINE`}
              </p>
              <p class="text-xs mt-0.5">
                CLICK TO JOIN
              </p>
            </div>
          </a>
          <a href="/discord" class="hidden lg:flex gap-5 lg:gap-10 sm:flex-col items-center transition-all duration-500 group hover:scale-110 hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150">
            <LogoDiscord class="text-indigo-300 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-5 w-12 h-12 lg:w-44 lg:h-44" />
            Discord
          </a>
          <Link href="/announcements" class="flex gap-5 lg:gap-10 sm:flex-col items-center transition-all duration-500 group sm:hover:scale-110 sm:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150">
            <Megaphone class="transition-all duration-500 group-hover:scale-125 lg:group-hover:-translate-y-5 w-12 lg:w-44" />
            Announcements
          </Link>
          <a href="https://store.aethersmp.com" class="flex gap-5 lg:gap-10 sm:flex-col items-center transition-all duration-500 group sm:hover:scale-110 sm:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150">
            <Cart class="transition-all duration-500 group-hover:scale-125 lg:group-hover:-translate-y-5 w-12 lg:w-44" />
            Store
          </a>
          <Link href="/vote" class="flex gap-5 lg:gap-10 sm:flex-col items-center transition-all duration-500 group sm:hover:scale-110 sm:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150">
            <Keys class="transition-all duration-500 group-hover:scale-125 lg:group-hover:-translate-y-5 w-12 lg:w-44" />
            Vote
          </Link>
          <Link href="/rules" class="flex gap-5 lg:gap-10 sm:flex-col items-center transition-all duration-500 group sm:hover:scale-110 sm:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150">
            <OpenBook class="transition-all duration-500 group-hover:scale-125 lg:group-hover:-translate-y-5 w-12 lg:w-44" />
            Rules
          </Link>
        </div>
      </div>
      <div id="start" class="mb-32" />
      <Why />
      <Features />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content: 'Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
