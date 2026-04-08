import { $, component$, useOnWindow, useStore, useVisibleTask$ } from '@qwik.dev/core';
import { type DocumentHead } from '@qwik.dev/router';

import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

import Logo from '~/images/logo.png?jsx';
import { Loader2 } from 'lucide-icons-qwik';
import { SiDiscord } from 'simple-icons-qwik';
import { Purpur } from '@luminescent/icons-qwik';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  useOnWindow('scroll', $(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const hero = document.getElementById('hero')!;
    hero.style.transform = `translateY(${window.scrollY / 2}px)`;
  }));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/luminaramc.org');
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
    const discorddata = await discordjson.json() as any
    store.discordonline = discorddata.presence_count;
  });

  return (
    <>
      <section class="min-h-svh flex flex-col gap-32 items-center justify-center relative overflow-hidden">
        <div id="hero" class="flex flex-col md:flex-row md:gap-5 text-gray-100 px-20 items-center justify-center md:justify-between pt-18 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
          <div class="relative flex flex-col gap-2 xl:gap-4">
            <div class={{
              'relative mr-auto': true,
            }}>
              <div class="absolute -inset-4 blur-lg backdrop-blur-md rounded-4xl" />
              <h1 class={{
                'text-7xl xl:text-8xl font-extrabold relative flex items-center drop-shadow-lg text-transparent bg-clip-text': true,
                'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600': true,
              }}>
                <Logo class="h-32 w-auto"/>
              </h1>
            </div>
            <div class={{
              'relative mr-auto': true,
            }}>
              <div class="absolute -inset-2 blur-lg backdrop-blur-md rounded-2xl" />
              <h2 class="text-xl! md:text-2xl! xl:text-3xl! font-bold animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800 drop-shadow-md">
                Minecraft with enhanced features, world-generation, and a friendly community.
              </h2>
            </div>
          </div>
          <div class="flex flex-col gap-2 mt-8">
            <button onClick$={() => {
                navigator.clipboard.writeText('luminaramc.org').catch(() => {
                  const response = document.getElementById('response-desktop') as HTMLParagraphElement;
                  response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
                  setTimeout(() => response.textContent = 'COPIED SUCCESSFULLY', 3000);
                });
              }}
              class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-green-300/40 hover:lum-bg-green-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
              <Purpur size={36} /> 
              <span class="flex flex-col gap-1 text-left">
                <span class="font-bold flex items-center gap-2">
                  luminaramc.org
                </span>
                <span class="text-sm flex items-center gap-1">
                  {store.online === null && <Loader2 size={16} class="animate-spin" />}
                  {store.online === null && 'click to copy ip'}
                  {store.online && `${store.players} online - ${store.version}`}
                  {store.online === false && 'server offline'}
                </span>
              </span>
            </button>
            <a href="https://discord.luminaramc.org"
              class="fill-current lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-indigo-300/40 hover:lum-bg-indigo-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600">
              <SiDiscord size={36} />
              <span class="flex flex-col gap-1 text-left">
                <span class="font-bold flex items-center gap-2">
                  Discord
                </span>
                <span class="text-sm flex items-center gap-1">
                  {store.discordonline === null && <Loader2 size={16} class="animate-spin" />}
                  {store.discordonline} users online
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div id="start" class="h-32 bg-linear-to-b from-transparent to-gray-950/70" />
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
