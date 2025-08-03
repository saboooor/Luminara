import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    blue: true,
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-20">
        Vote for <span class="text-pink-400">Luminara SMP!</span>
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Voting for Luminara SMP helps us grow and reach more players by getting the server higher in the server list websites!<br />
        The blue buttons do not give any reward and are purely a way to support Luminara SMP<br />
        If you're a Bedrock player, dont forget to put a _ before your gamertag!
      </p>
      <div class="flex flex-wrap gap-1 justify-center">
        <a href="https://minecraft-server-list.com/server/507849/vote/" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSL
        </a>
        <a href="https://minecraftservers.org/vote/667461" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSO
        </a>
        <a href="https://minecraft-server.net/vote/ssaabboooorr/" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSN
        </a>
        <a href="https://minecraft-mp.com/server/337205/vote/" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCMP
        </a>
        <a href="https://minecraftpocket-servers.com/server/129088/vote/" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCPS
        </a>
        <a href="https://servers-minecraft.net/server-luminara.40623/vote" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          SMCN
        </a>
      </div>
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Fast-vote
      </h1>
      <p class="mb-2 shadow-outline">
        Fast-vote will let you open all the vote sites at once in separate tabs.<br/>
        <span class="text-pink-400">You must allow pop-ups in your browser for it to function properly.</span>
      </p>
      <div class="mb-12 flex flex-wrap gap-1 justify-center">
        <button onClick$={() => {
          window.open('https://minecraft-server-list.com/server/507849/vote');
          window.open('https://minecraftservers.org/vote/667461');
          window.open('https://minecraft-server.net/vote/ssaabboooorr');
          window.open('https://minecraft-mp.com/server/337205/vote');
          window.open('https://minecraftpocket-servers.com/server/129088/vote');
          window.open('https://servers-minecraft.net/server-luminara.40623/vote');
          if (!store.blue) return;
        }} class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          Open vote sites
        </button>
      </div>
    </section>
  );
});