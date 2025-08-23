import { component$, useStore } from '@builder.io/qwik';
import { Toggle } from '@luminescent/ui-qwik';

export default component$(() => {
  const store = useStore({
    blue: true,
  });

  return (
    <section class="flex flex-col min-h-screen justify-center pt-20 max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-white mt-20">
        Vote for <span class="text-pink-400">Luminara SMP!</span>
      </h1>
      <p class="mb-6 text-xl">
        Voting for Luminara SMP helps us grow and reach more players by getting the server higher in the server list websites!<br />
        The blue buttons do not give any reward and are purely a way to support Luminara SMP<br />
        If you're a Bedrock player, dont forget to put a _ before your gamertag!
      </p>
      <div class="flex flex-wrap gap-2 mb-2">
        <a href="https://minecraft-server-list.com/server/507849/vote/" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSL
        </a>
        <a href="https://minecraftservers.org/vote/667461" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSO
        </a>
        <a href="https://minecraft-server.net/vote/ssaabboooorr/" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSN
        </a>
        <a href="https://minecraft-mp.com/server/337205/vote/" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCMP
        </a>
        <a href="https://minecraftpocket-servers.com/server/129088/vote/" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCPS
        </a>
        <a href="https://servers-minecraft.net/server-luminara.40623/vote" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          SMCN
        </a>
      </div>
      <div class="flex flex-wrap gap-2">
        <a href="https://www.curseforge.com/servers/minecraft/game/luminara" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-blue-600 hover:lum-bg-blue-500">
          CF
        </a>
        <a href="https://topg.org/minecraft-servers/server-674840" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-blue-600 hover:lum-bg-blue-500">
          TOPG
        </a>
        <a href="https://topminecraftservers.org/vote/41347" target="_blank" class="lum-btn lum-pad-xl rounded-xl lum-bg-blue-600 hover:lum-bg-blue-500">
          TMCS
        </a>
      </div>
      <h1 class="text-4xl font-bold text-white">
        Fast-vote
      </h1>
      <p class="mb-2">
        Fast-vote will let you open all the vote sites at once in separate tabs.<br/>
        <span class="text-pink-400">You must allow pop-ups in your browser for it to function properly.</span>
      </p>

      <div class="flex flex-wrap gap-2 my-2">
        <button onClick$={() => {
          window.open('https://minecraft-server-list.com/server/507849/vote');
          window.open('https://minecraftservers.org/vote/667461');
          window.open('https://minecraft-server.net/vote/ssaabboooorr');
          window.open('https://minecraft-mp.com/server/337205/vote');
          window.open('https://minecraftpocket-servers.com/server/129088/vote');
          window.open('https://servers-minecraft.net/server-luminara.40623/vote');
          if (!store.blue) return;

          window.open('https://www.curseforge.com/servers/minecraft/game/luminara');
          window.open('https://topg.org/minecraft-servers/server-674840');
          window.open('https://topminecraftservers.org/vote/41347');
        }} class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          Open vote sites
        </button>
      </div>
      <Toggle
        label="Open promotional vote sites"
        checked={store.blue}
        onChange$={(e, el) => {
          store.blue = el.checked;
        }}
      />
    </section>
  );
});
