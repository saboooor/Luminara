import { component$, useStore } from '@qwik.dev/core';
import { Toggle } from '@luminescent/ui-qwik';
import { Gauge, Road, Vote } from 'lucide-icons-qwik';
import { SiCurseforge } from 'simple-icons-qwik';
import MCSL from '~/images/vote/mcsl.png?jsx';
import MCSO from '~/images/vote/mcso.png?jsx';
import MCMP from '~/images/vote/mcmp.png?jsx';
import MCPS from '~/images/vote/mcps.png?jsx';
import TOPG from '~/images/vote/topg.png?jsx';
import TMCS from '~/images/vote/tmcs.png?jsx';
import MR from '~/images/vote/mr.png?jsx';

export default component$(() => {
  const store = useStore({
    blue: true,
  });

  return (
    <section class="flex flex-col justify-center pt-20 max-w-6xl mx-auto">
      <h1 class="flex gap-2 text-2xl font-extrabold items-center my-2">
        <Vote size={32} />
        Vote for <span class="text-red-200">Luminara SMP!</span>
      </h1>
      <p class="mb-4 border-b border-lum-border/10 pb-4 text-lum-text-secondary">
        Voting for Luminara SMP helps us grow and reach more players by getting the server higher in the server list websites!<br />
        The blue buttons do not give any reward and are purely a way to support Luminara SMP<br />
        If you're a Bedrock player, dont forget to put a _ before your gamertag!
      </p>
      <div class="flex flex-wrap gap-2 mb-2 *:flex-1">
        <a href="https://minecraft-server-list.com/server/507849/vote/" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <MCSL height={24} width={24} class="h-6 w-auto" />
          MCSL
        </a>
        <a href="https://www.curseforge.com/servers/minecraft/game/luminara" target="_blank"
          class="fill-current lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <SiCurseforge size={24} />
          CF
        </a>
        <a href="https://minecraftservers.org/vote/667461" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <MCSO height={24} width={24} class="h-6 w-auto" />
          MCSO
        </a>
        <a href="https://minecraft-mp.com/server/337205/vote/" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <MCMP height={24} width={24} class="h-6 w-auto" />
          MCMP
        </a>
        <a href="https://minecraftpocket-servers.com/server/129088/vote/" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <MCPS height={24} width={24} class="h-6 w-auto" />
          MCPS
        </a>
      </div>
      <div class="flex flex-wrap gap-2 justify-center">
        <a href="https://topg.org/minecraft-servers/server-674840" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-blue-400/20 hover:lum-bg-blue-400 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <TOPG height={24} width={24} class="h-6 w-auto" />
          TOPG
        </a>
        <a href="https://topminecraftservers.org/vote/41347" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-blue-400/20 hover:lum-bg-blue-400 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <TMCS height={24} width={24} class="h-6 w-auto" />
          TMCS
        </a>
        <a href="https://servers-minecraft.net/server-luminara.40623/vote" target="_blank"
          class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-blue-400/20 hover:lum-bg-blue-400 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <MR height={24} width={24} class="h-6 w-auto" />
          MR
        </a>
      </div>
      <h1 class="flex gap-2 text-2xl font-extrabold items-center mb-2 mt-20">
        <Gauge size={32} />
        Fast-vote
      </h1>
      <p class="mb-4 border-b border-lum-border/10 pb-4 text-lum-text-secondary">
        Fast-vote will let you open all the vote sites at once in separate tabs.<br/>
        <span class="text-red-500">You must allow pop-ups in your browser for it to function properly.</span>
      </p>

      <Toggle
        checked={store.blue}
        onChange$={(e, el) => {
          store.blue = el.checked;
        }}
      >
        Open promotional vote sites
      </Toggle>

      <div class="flex flex-wrap gap-2 mt-6 mb-20">
        <button onClick$={() => {
          window.open('https://minecraft-server-list.com/server/507849/vote');
          window.open('https://www.curseforge.com/servers/minecraft/game/luminara');
          window.open('https://minecraftservers.org/vote/667461');
          window.open('https://minecraft-server.net/vote/ssaabboooorr');
          window.open('https://minecraft-mp.com/server/337205/vote');
          window.open('https://minecraftpocket-servers.com/server/129088/vote');
          if (!store.blue) return;

          window.open('https://topg.org/minecraft-servers/server-674840');
          window.open('https://topminecraftservers.org/vote/41347');
          window.open('https://servers-minecraft.net/server-luminara.40623/vote');
        }} class="lum-btn xl:lum-btn-p-4 backdrop-blur-sm text-lg lum-grad-bg-red-200/20 hover:lum-bg-red-200 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800">
          <Road size={32} />
          Open vote sites
        </button>
      </div>
    </section>
  );
});
