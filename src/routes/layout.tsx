import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/Nav';

import { heroes } from '~/components/heroes';

export default component$(() => {
  const hero = heroes[Math.floor(Math.random() * heroes.length)];
  return (
    <>
      <main>
        <picture class="fixed top-0 overflow-hidden -z-10" style={{ height: '100lvh', width: '100lvw' }}>
          <source srcSet={hero.avif} type="image/avif" />
          <source srcSet={hero.webp} type="image/webp" />
          <img
            src={hero.png}
            class="w-full h-full object-cover"
            alt="Hero Background"
            loading="eager"
            decoding="async"
            id="backdrop"
            style={{ filter: 'blur(32px)', transform: 'scale(1.32)' }}
            width={0}
            height={0}
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
