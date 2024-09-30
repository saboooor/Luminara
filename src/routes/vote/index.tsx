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
    <Vote />
    <div id="ranks" class="mb-32" />
    <Ranks />
  </>;
});

export const head: DocumentHead = {
  title: 'Vote',
  meta: [
    {
      name: 'description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
    {
      name: 'og:description',
      content: 'Vote for Nether Depths and get rewarded!',
    },
  ],
};
