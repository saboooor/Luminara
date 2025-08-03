import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

import Logo from '~/images/logo.png?jsx';
import Megaphone from '~/images/icons/megaphone.png?jsx';
import Cart from '~/images/icons/cart.png?jsx';
import Keys from '~/images/icons/keys.png?jsx';
import OpenBook from '~/images/icons/open_book.png?jsx';
import { Hoverable, LogoDiscord, LogoPurpur } from '@luminescent/ui-qwik';
import { ChevronDown } from 'lucide-icons-qwik';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/mc.luminescent.dev');
    const srvdata = await srvjson.json() as any;
    if (!srvdata.online || srvdata.protocol == 1) {
      store.online = false;
    }
    else {
      store.online = true;
      store.players = srvdata.players.online;
      store.version = srvdata.protocol_name;
    }
    const discordjson = await fetch('https://discord.com/api/guilds/865519986806095902/widget.json');
    const discorddata = await discordjson.json() as any;
    store.discordonline = discorddata.presence_count;
  });

  return (
    <>
      <div class="flex flex-col h-[calc(100svh-80px)] justify-center items-center">
        <div class="flex flex-col justify-center items-center lg:gap-[25svh] gap-5">
          <div class="lg:hidden relative floating max-w-72 mx-auto mt-5">
            <Logo class="w-3/4 mx-auto" />
          </div>
          <div class="sm:grid grid-cols-2 lg:grid-cols-3 gap-20 mx-auto drop-shadow-2xl">
            <div class="flex justify-end items-center">
              <button onClick$={() => {
                navigator.clipboard.writeText('mc.luminescent.dev').catch(() => {
                  const response = document.getElementById('response-desktop') as HTMLParagraphElement;
                  response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
                  setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
                });
              }} class="hidden sm:flex lum-btn lum-bg-transparent hover:lum-bg-transparent lum-pad-xl rounded-full justify-end gap-5 items-center text-right font-medium group transition-all duration-300 hover:saturate-150">
                <div>
                  <p class="text-green-300! font-bold">
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
                  <LogoPurpur size={48} class="text-green-300"/>
                  <div class="bg-green-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(134 239 172))' }} />
                </div>
              </button>
            </div>
            <div class="hidden lg:flex floating">
              <Logo />
            </div>
            <div class="flex justify-start items-center">
              <a href="/discord" class="lum-btn lum-bg-transparent hover:lum-bg-transparent lum-pad-xl rounded-full justify-start text-left hidden sm:flex gap-5 items-center font-medium group transition-all duration-300 hover:saturate-150">
                <div class="flex flex-col gap-2 transition-all duration-300 group-hover:gap-3">
                  <LogoDiscord size={48} class="text-indigo-300" />
                  <div class="bg-indigo-300 h-1 rounded-full mx-3" style={{ filter: 'drop-shadow(0 0 3px rgb(165 180 252))' }} />
                </div>
                <div>
                  <p class="text-indigo-300! font-bold">
                    {store.discordonline === null && 'LOADING...'}
                    {store.discordonline && `${store.discordonline} USERS ONLINE`}
                  </p>
                  <p class="text-sm mt-0.5">
                    CLICK TO JOIN
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row flex-1 gap-5 w-full sm:w-3/4 max-w-7xl mx-auto justify-center my-10 sm:items-center text-2xl lg:text-3xl hover:text-white drop-shadow-xl">
            <button onClick$={() => {
              navigator.clipboard.writeText('mc.luminescent.dev').catch(() => {
                const response = document.getElementById('response-mobile') as HTMLParagraphElement;
                response.textContent = 'FAILED TO COPY';
                setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
              });
            }}  class="sm:hidden flex lum-btn lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 items-center font-medium text-left group transition-all duration-300 hover:saturate-150">
              <div class="flex flex-col gap-2 transition-all duration-300 group-hover:scale-125">
                <LogoPurpur size={48} class="text-green-300" />
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
                      MC.LUMINESCENT.DEV
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
            <a href="/discord" class="sm:hidden flex lum-btn lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 items-center font-medium text-left group transition-all duration-300 hover:saturate-150">
              <div class="flex flex-col gap-2 transition-all duration-300 group-hover:scale-125">
                <LogoDiscord size={48} class="text-indigo-300" />
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
            <div class="flex flex-col lg:flex-row w-full justify-between gap-4">
              <Link href="/announcements" class="flex lum-btn !text-xl lg:!text-2xl lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 lg:gap-10 lg:flex-col items-center transition-all duration-500 hover:duration-200 group lg:hover:scale-110 lg:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150"
                onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)} onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
              >
                <Megaphone class="transition-all duration-500 group-hover:duration-300 lg:group-hover:-translate-y-5 w-12 h-12 lg:w-44 lg:h-44" />
                Announcements
              </Link>
              <a href="https://luminara.tebex.io" class="flex lum-btn !text-xl lg:!text-2xl lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 lg:gap-10 lg:flex-col items-center transition-all duration-500 hover:duration-200 group lg:hover:scale-110 lg:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150"
                onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)} onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
              >
                <Cart class="transition-all duration-500 group-hover:duration-300 lg:group-hover:-translate-y-5 w-12 h-12 lg:w-44 lg:h-44" />
                Store
              </a>
              <Link href="/vote" class="flex lum-btn !text-xl lg:!text-2xl lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 lg:gap-10 lg:flex-col items-center transition-all duration-500 hover:duration-200 group lg:hover:scale-110 lg:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150"
                onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)} onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
              >
                <Keys class="transition-all duration-500 group-hover:duration-300 lg:group-hover:-translate-y-5 w-12 h-12 lg:w-44 lg:h-44" />
                Vote
              </Link>
              <Link href="/rules" class="flex lum-btn !text-xl lg:!text-2xl lum-bg-transparent hover:lum-bg-transparent lg:lum-pad-equal-5xl rounded-3xl gap-5 lg:gap-10 lg:flex-col items-center transition-all duration-500 hover:duration-200 group lg:hover:scale-110 lg:hover:translate-y-2 hover:drop-shadow-2xl hover:saturate-150"
                onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)} onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
              >
                <OpenBook class="transition-all duration-500 group-hover:duration-300 lg:group-hover:-translate-y-5 w-12 h-12 lg:w-44 lg:h-44" />
                Rules
              </Link>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-6 sm:bottom-8 cursor-pointer flex gap-2 items-center font-bold text-white text-sm md:text-lg z-10 animate-bounce shadow-outline" onClick$={() => {
          document.getElementById('start')?.scrollIntoView();
        }}>
          <ChevronDown size={24} /> Learn More
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
