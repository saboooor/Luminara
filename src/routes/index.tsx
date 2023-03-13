import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/sections/Hero';
import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(0px)';
    backDrop.style.transform = 'scale(1)';
  });

  return (
    <>
      <Hero />
      <div id="start" class="mb-32" />
      <Why />
      <Features />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home',
};
