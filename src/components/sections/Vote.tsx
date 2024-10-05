import { component$, useStore } from '@builder.io/qwik';
import { Toggle } from '@luminescent/ui-qwik';
import { ChevronDown } from 'qwik-ionicons';

export default component$(({ noScrollIndicator }: any) => {
  const store = useStore({
    blue: true,
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-8">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-20">
        Vote for <span class="text-pink-400">Luminara SMP!</span>
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Voting for Luminara SMP helps us grow and reach more players by getting the server higher in the server list websites!<br />
        The blue buttons do not give any reward and are purely a way to support Luminara SMP<br />
        If you're a Bedrock player, dont forget to put a _ before your gamertag!
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <a href="https://bit.ly/NetherVote-MCSL" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSL
        </a>
        <a href="https://bit.ly/NetherVote-MCSO" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSO
        </a>
        <a href="https://bit.ly/NetherVote-MCSN" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCSN
        </a>
        <a href="https://bit.ly/NetherVote-MCMP" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCMP
        </a>
        <a href="https://bit.ly/NetherVote-MCPS" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          MCPS
        </a>
        <a href="https://bit.ly/NetherVote-SMCN" class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          SMCN
        </a>
      </div>
      <div class="mb-12 flex flex-wrap gap-3 justify-center">
        <a href="https://bit.ly/NetherVote-CF" class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          CurseForge
        </a>
        <a href="https://bit.ly/NetherVote-TMCS" class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          TMCS
        </a>
        <a href="https://bit.ly/NetherVote-MCSH" class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          MCSH
        </a>
        <a href="https://bit.ly/NetherVote-PMC"  class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          PMC
        </a>
        <a href="https://bit.ly/NetherVote-TOPG" class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          TopG
        </a>
        <a href="https://top.gg/servers/865519986806095902/vote" class="lum-btn lum-pad-xl rounded-xl lum-bg-indigo-600 hover:lum-bg-indigo-500">
          Top.gg
        </a>
      </div>
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Fast-vote
      </h1>
      <p class="mb-2 shadow-outline">
        Fast-vote will let you open all the vote sites at once in separate tabs.<br/>
        <span class="text-pink-400">You must allow pop-ups in your browser for it to function properly.</span>
      </p>
      <Toggle label="Include blue sites" checked={store.blue} onChange$={() => store.blue = !store.blue} onColor="purple" offColor="gray"/>
      <div class="mb-12 flex flex-wrap gap-3 justify-center">
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
        }} class="lum-btn lum-pad-xl rounded-xl lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
          Open vote sites
        </button>
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