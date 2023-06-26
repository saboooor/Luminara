import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Ranks from '~/components/sections/Ranks';
import Vote from '~/components/sections/Vote';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(32px)';
    backDrop.style.transform = 'scale(1.32)';
  });

  return <>
    <Ranks />
    <Vote noScrollIndicator />
  </>;
});

export const head: DocumentHead = {
  title: 'Ranks',
  meta: [
    {
      name: 'description',
      content: 'View the list of ranks Nether Depths has to offer',
    },
    {
      name: 'og:description',
      content: 'View the list of ranks Nether Depths has to offer',
    },
  ],
};
