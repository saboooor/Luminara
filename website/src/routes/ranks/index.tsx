import { component$ } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import Ranks from '~/components/sections/Ranks';
import Vote from '~/components/sections/Vote';

export default component$(() => {
  return <>
    <Ranks />
    <Vote />
  </>;
});

export const head: DocumentHead = {
  title: 'Ranks',
  meta: [
    {
      name: 'description',
      content: 'View the list of ranks Luminara SMP has to offer. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content: 'View the list of ranks Luminara SMP has to offer. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
