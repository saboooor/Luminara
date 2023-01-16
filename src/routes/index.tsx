import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/sections/Hero';
import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

export default component$(() => {
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
