import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/Nav';

import heroes from '~/components/heroes';

export default component$(() => {
  const Hero = heroes[Math.floor(Math.random() * heroes.length)];
  return (
    <>
      <main>
        <Hero class="fixed top-0 overflow-hidden -z-10 w-full h-full object-cover" id="backdrop" style={{ filter: 'blur(32px)', transform: 'scale(1.32)' }} />
        <Header />
        <section style="padding-top: 64px">
          <Slot />
        </section>
      </main>
    </>
  );
});
