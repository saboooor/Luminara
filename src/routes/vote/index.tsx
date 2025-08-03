import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Ranks from '~/components/sections/Ranks';
import Vote from '~/components/sections/Vote';

export default component$(() => {
  return <>
    <Vote />
    <Ranks />
  </>;
});

export const head: DocumentHead = {
  title: 'Vote',
  meta: [
    {
      name: 'description',
      content: 'Vote for Luminara SMP and get rewarded! Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content: 'Vote for Luminara SMP and get rewarded! Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
