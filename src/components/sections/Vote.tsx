import { component$, useStore } from '@builder.io/qwik';
import { ChevronDown } from 'qwik-ionicons';

export default component$(({ noScrollIndicator }: any) => {
  const store = useStore({
    blue: true,
  });

  return (
    <section class="flex mx-auto px-6 items-center justify-center text-center" style="min-height: calc(100lvh - 64px);">
      <div class="p-10 sm:p-16 drop-shadow-xl rounded-xl text-orange-100 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Vote for <span class="text-red-500">Nether Depths!</span>
        </h1>
        <p class="mb-6 shadow-outline">
          Voting for Nether Depths helps us grow and reach more players by getting the server higher in the server list websites!<br />
          The blue buttons do not give any reward and are purely a way to support Nether Depths<br />
          If you're a Bedrock player, dont forget to put a _ before your gamertag!
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
          <a href="https://bit.ly/NetherVote-SMCN" class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            SMCN
          </a>
          <a href="https://bit.ly/NetherVote-CF" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            CurseForge
          </a>
          <a href="https://bit.ly/NetherVote-TMCS" class="flex transition rounded-xl bg-cyan-700/70 hover:bg-cyan-700 border-cyan-700 border px-6 py-3 font-bold text-indigo-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            TMCS
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
        <h1 class="font-bold text-3xl sm:text-5xl mb-3 shadow-outline">
          Fast-vote
        </h1>
        <p class="mb-6 shadow-outline">
          Fast-vote will let you open all the vote sites at once in separate tabs.<br/>
          <span class="text-red-500">You must allow pop-ups in your browser for it to function properly.</span>
        </p>
        <input type="checkbox" id="blue-sites" checked={store.blue} onChange$={() => store.blue = !store.blue} />
        <label for="blue-sites" class="mb-3 ml-2 shadow-outline">
          Include blue sites
        </label>
        <div class="mt-6 mb-12 flex flex-wrap gap-3 justify-center">
          <button onClick$={() => {
            window.open('https://bit.ly/NetherVote-MCSL');
            window.open('https://bit.ly/NetherVote-MCSO');
            window.open('https://bit.ly/NetherVote-MCSN');
            window.open('https://bit.ly/NetherVote-MCMP');
            window.open('https://bit.ly/NetherVote-MCPS');
            window.open('https://bit.ly/NetherVote-SMCN');
            if (!store.blue) return;
            window.open('https://bit.ly/NetherVote-CF');
            window.open('https://bit.ly/NetherVote-TMCS');
            window.open('https://bit.ly/NetherVote-MCSH');
            window.open('https://bit.ly/NetherVote-PMC');
            window.open('https://bit.ly/NetherVote-TOPG');
            window.open('https://top.gg/servers/865519986806095902/vote');
          }} class="flex transition rounded-xl bg-red-600/80 hover:bg-red-600 border-red-600 border px-6 py-3 font-bold text-red-100 md:py-4 md:px-8 md:text-lg whitespace-nowrap justify-center">
            Open vote sites
          </button>
        </div>
      </div>
      { !noScrollIndicator &&
        <div class="absolute bottom-8 cursor-pointer flex gap-4 items-center font-bold text-white md:text-lg z-10 animate-bounce shadow-outline" onClick$={() => {
          document.getElementById('ranks')?.scrollIntoView();
        }}>
          <ChevronDown width="24" class="fill-current" /> Rank Info
        </div>
      }
    </section>
  );
});