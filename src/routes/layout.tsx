import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/navbar';

import { heroes } from '~/components/heroes';

export default component$(() => {
  const hero = heroes[Math.floor(Math.random() * heroes.length)];
  return (
    <>
      <main>
        <picture class="fixed top-0 overflow-hidden" style={{ height: '100lvh', width: '100lvw' }}>
          <source srcSet={hero.avif} type="image/avif" />
          <source srcSet={hero.webp} type="image/webp" />
          <img
            src={hero.placeholder}
            class="w-full h-full object-cover"
            alt="Hero Background"
            loading="eager"
            decoding="async"
            id="backdrop"
          />
        </picture>
        <Header />
        <section style="padding-top: 64px">
          <Slot />
        </section>
      </main>
    </>
  );
});
